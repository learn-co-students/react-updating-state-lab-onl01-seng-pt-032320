// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

class YouTubeDebugger extends Component {
    constructor(){
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

    // changeBitRate = () => {
    //     this.setState( previousBitRate => ({
    //         bitrate: previousBitRate.settings.bitrate = 12
    //     }))
    // }
    changeBitRate = () => {
        this.setState({
            settings: {
                ...this.state.settings, 
                    bitrate: 12
            }
        })
    }

    // changeResolution = ()=>{
    //     this.setState( previousResolution => ({
    //         resolution: previousResolution.settings.video.resolution = '720p'
    //     }))
    // }
    changeResolution = () => {
        this.setState({
            settings: {...this.state.settings, video: {
                ...this.state.settings.video, 
                    resolution: '720p'
            }}
        })
    }


    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.changeBitRate}>Change bitrate</button>
                <button className="resolution" onClick={this.changeResolution}>Change resolution</button>
            </div>
        );
    }
}

export default YouTubeDebugger;
