// Code DigitalClicker Component 
import React, { Component } from 'react';

class DigitalClicker extends Component{
    constructor(props) {
        super()
        
        this.state = {
            timesClicked: 0
        }
    }

    onClick = () => {
             // Update our state here...
             this.setState(previousState => {
                 return {
                     timesClicked: previousState.timesClicked + 1
                 }
             })

             
           };

           render() {
            return (
              <button onClick={this.onClick}>
                {this.state.timesClicked}
              </button>
            )}
        }
        
export default DigitalClicker
