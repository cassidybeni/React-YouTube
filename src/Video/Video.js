import React, { Component } from "react";
import "./Video.css";

export class Video extends Component {
  render() {
    return (
      <div className="Video">
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
