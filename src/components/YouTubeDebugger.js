import React from 'react';
 
export default class YouTubeDebugger extends React.Component {

  constructor() { 
    super(); 
    this.state = { 
      errors: [], 
      user: null,
      settings: { bitrate: 8,
        video: { resolution: '1080p' }
    }}; 
  }

  bitRateButton = () => { 
    this.setState({ settings: { ...this.state.settings, bitrate: 12 } });
  }

  resoButton = () => { 
    this.setState({ settings: { ...this.state.settings, video: { resolution: '720p' } } });
  }

  render() {
    return (
      <div>
      <button onClick={this.bitRateButton} className="bitrate">Bit Rate</button>
      <button onClick={this.resoButton} className="resolution">Resolution</button>
      </div>
    );
  }
}