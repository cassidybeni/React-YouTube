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
      const { data } = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${this.state.input}&type=video&key=${process.env.REACT_APP_API_KEY}`
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
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/120px-Magnifying_glass_icon.svg.png"
              alt="search"
            ></img>
          </button>
        </form>
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
