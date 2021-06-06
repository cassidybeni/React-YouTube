import React, { Component } from "react";
import YouTube from "react-youtube";
import "./Video.css";

export class Video extends Component {
  render() {
    const opts = {
      height: "315",
      width: "560",
      playerVars: {
        autoplay: 1,
      },
    };
    return (
      <div className="Video">
        <YouTube videoId={this.props.match.params.id} opts={opts}></YouTube>
      </div>
    );
  }
}

export default Video;