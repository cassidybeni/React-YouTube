import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home.css";

export class Home extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
      videoList: [],
      error: false,
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // could you update the api endpoint to request videos only?
      // as it stands, I can also get results for youtube channels - then if i click the link for a channel the UI breaks.
      const { data } = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=26&q=${this.state.input}&key=${process.env.REACT_APP_API_KEY}`
      );
      this.setState({ input: "", videoList: data.items, error: false });
    } catch (e) {
      this.setState({ input: "", videoList: [], error: true });
    }
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  render() {
    const { videoList, input, error } = this.state;
    const li = videoList.map((video) => {
      return (
        <Link to={`/video/${video.id.videoId}`}>
          {/* this li should be the outer most jsx tag. Separately, the key should also be placed on whichever tag is outermost.*/}
          <li key={video.id.videoId}>
            <img src={video.snippet.thumbnails.high.url} alt="thumbnail"></img>
            <h3>{video.snippet.title}</h3>
          </li>
        </Link>
      );
    });
    return (
      <div>
        <form className="SearchBar" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Search"
            value={input}
            onChange={this.handleChange}
          ></input>
          <button>
            {/*Love the magnifying glass!*/}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/120px-Magnifying_glass_icon.svg.png"
              alt="search"
            ></img>
          </button>
        </form>
        {/*Nice conditional rendering!*/}
        {!error && videoList.length >= 1 ? (
          <ul>{li}</ul>
        ) : (
          <h3 className="defaultMsg">No Results Yet</h3>
        )}
      </div>
    );
  }
}

export default Home;
