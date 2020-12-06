import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {
  constructor(props) {
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  onBitrateClick = event => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  }

  onResolutionClick = event => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    });
  }

  render() {
    return (
      <div>
        <button className='bitrate' onClick={this.onBitrateClick}>
          Bitrate: {this.state.settings.bitrate}
        </button>
        <button className='resolution' onClick={this.onResolutionClick}>
          Resolution: {this.state.settings.video.resolution}
        </button>
      </div>
    )
  }
}