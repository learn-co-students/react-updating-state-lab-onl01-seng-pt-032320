// Code DigitalClicker Component Here

import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {

    constructor(props){
        super(props)
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

    handleBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12 
            }
          });
    }

    handleResolution = () => {
        this.setState({
            settings: {
              ...this.state.settings,
              video: {
                  ...this.state.settings.video, 
                  resolution: '720p'
              }
              
            }
          });
    }

    render() {
        return(
            <div>
                <button type="submit" className="bitrate" onClick={this.handleBitrate}>Click Bitrate</button>
                <button type="submit" className="resolution" onClick={this.handleResolution}>Click Resolution</button>
            </div>
        )
    }
}
