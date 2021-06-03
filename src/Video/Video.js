import React, { Component } from "react";
import "./Video.css";

export class Video extends Component {
  render() {
    return (
      <div className="Video">
      {/* 
        try using the react-youtube package rather than creating your own iframe!
        It's nice practice learning how to use 3rd party libraries and gives you an 
        easy way to hook into the video player events (onplay, onpause, etc)
      */}
        <iframe
          src={`https://www.youtube.com/embed/${this.props.match.params.id}`} //accesses id from /videos/:id via match.params on props
          allowFullScreen
          title="YTPlayer"
        ></iframe>
      </div>
    );
  }
}

export default Video;

// Reference:
// https://www.npmjs.com/package/react-youtube
