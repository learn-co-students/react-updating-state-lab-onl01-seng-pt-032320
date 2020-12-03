// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

class YouTubeDebugger extends Component {
    constructor() {
        super()

        //initial state
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
            }
        }   
    };
    }

    //settings.bitrate state property to 12
    handleBitrate = () => {
        this.setState({
            
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    //settings.vido.resolution state property to 720p
    handleResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                  ...this.state.settings.video,
                  resolution: '720p'
                }
            }
        })
    }

    render() {
        return (
          <div>
            <button className="bitrate" onClick={this.handleBitrate}>
              Change bitrate
            </button>
            <button className="resolution" onClick={this.handleResolution}>
              Change resolution
            </button>
          </div>
        );
      }
    }

export default YouTubeDebugger
