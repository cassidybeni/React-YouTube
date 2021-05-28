import React, { Component } from "react";
import YouTube from "react-youtube";

export class Video extends Component {
  render() {
    const { id } = this.props.match.params.id.videoId;

    return (
      <div>
        <YouTube videoId={id}></YouTube>
      </div>
    );
  }
}

export default Video;

// Reference:
// https://www.npmjs.com/package/react-youtube
