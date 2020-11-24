// Code YouTubeDebugger Component Here
import React from 'react'
class YouTubeDebugger extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video:{
                    resolution: '1080p'
                }
            }

        }

    }

    bitrateHandle = () =>{
        this.setState({
            settings: {
              ...this.state.settings,
              bitrate: 12
            }
          });
    }

    resolutionHandle = () =>{
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution:'720p'
                }
            }
        })
    }




    render(){
        return(
            <div>
                <button className ='bitrate' onClick={this.bitrateHandle}>Change Bitrate {this.state.settings.bitrate}</button>
                <button className ='resolution' onClick={this.resolutionHandle}>Change resolution {this.state.settings.video.resolution}</button>
            </div>
        )
    }
}

export default YouTubeDebugger