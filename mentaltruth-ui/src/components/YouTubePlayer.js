import React, { Component } from 'react';
import YouTube from 'react-youtube';

class YouTubePlayer extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      const opts = {
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1
        }
      };
  
      return (
        <YouTube
          videoId="EJ_S5Rjt_iI"
          opts={opts}
          onReady={this._onReady}
        />
      );
    }
  
    _onReady(event) {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }
  }
  export default YouTubePlayer ;