import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {
    constructor () {
        super ()
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

    renderButtons = () => {
        return ([<button onClick={this.updateBitrate} className="bitrate">BitRate {this.state.settings.bitrate}</button>,
        <button onClick={this.updateResolution} className="resolution">Resolution {this.state.settings.video.resolution}</button>])
    }

    updateBitrate = () => {
        console.log()
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    updateResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        })
    }

    render () {
        return (
            <div>
                <button onClick={this.updateBitrate} className="bitrate">BitRate {this.state.settings.bitrate}</button>
                <button onClick={this.updateResolution} className="resolution">Resolution {this.state.settings.video.resolution}</button>
            </div>
        )
    }
}