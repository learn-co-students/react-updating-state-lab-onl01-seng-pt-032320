// Code YouTubeDebugger Component Here
import React from 'react';


class YouTubeDebugger extends React.Component {

    constructor() {
        super();
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

    handleClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    handleSecondClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {resolution: '720p'}
            }
        })
    }

    render() {
        return (
        <div>
        <button className='bitrate' onClick={this.handleClick}></button> 
        <button className='resolution' onClick={this.handleSecondClick}></button>
        </div>
        )
    }
}

export default YouTubeDebugger;

// Create a button with the class 'bitrate'. Clicking this button changes the settings.bitrate state property to 12.

// Create a button with the class 'resolution'. Clicking this button changes the settings.video.resolution state property to '720p'.

//The spread operator syntax can be used in JavaScript to 'de-compose' objects and arrays. 
//When used on an object as we see above, ...this.state.addressInfo returns all the keys and values from within that object. 
//We're saying addressInfo should be equal to all the keys and values
// that make up addressInfo, and, in addition, there should be city key with the value New York City.
// If there is already a city key inside addressInfo, it will be overwritten. 
//If it doesn't exist, it will be added.
//


//flatiron solution: 
// import React from 'react';

// class YouTubeDebugger extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       errors: [],
//       user: null,
//       settings: {
//         bitrate: 8,
//         video: {
//           resolution: '1080p'
//         }
//       }
//     };
//   }

//   handleChangeBitrate = () => {
//     this.setState({
//       settings: {
//         ...this.state.settings,
//         bitrate: 12
//       }
//     });
//   };

//   handleChangeResolution = () => {
//     this.setState({
//       settings: {
//         ...this.state.settings,
//         video: {
//           ...this.state.settings.video,
//           resolution: '720p'
//         }
//       }
//     });

    /*
    Or this can be defined using the Object.assign method:
    
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
          resolution: '720p'
        })
      })
    });
    
    */
//   };

//   render() {
//     return (
//       <div>
//         <button className="bitrate" onClick={this.handleChangeBitrate}>
//           Change bitrate
//         </button>
//         <button className="resolution" onClick={this.handleChangeResolution}>
//           Change resolution
//         </button>
//       </div>
//     );
//   }
// }

// export default YouTubeDebugger;
