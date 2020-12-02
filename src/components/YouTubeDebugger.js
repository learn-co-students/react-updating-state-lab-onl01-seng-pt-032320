// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

class YouTubeDebugger extends Component {
    constructor(){
    super()

    this.state = 
    {
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

    handleBitrateChange = () => {
        this.setState({
            errors: [],
            user: null,
            settings: {
              bitrate: 12,
              video: {
                resolution: '1080p'
              }
            }
          })
    }

    handleResolutionChange = () => {
        this.setState({
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '720p'
              }
            }
          })
        }

    render() { 
        return ( 
            <div>
            <button className="bitrate" onClick={this.handleBitrateChange} > Change Bitrate</button>
            <br></br>
            <button className="resolution" onClick={this.handleResolutionChange} > Change Resolution</button>
            </div>
         )
    }
}
 
export default YouTubeDebugger;