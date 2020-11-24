// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            timesClicked: 0
        }
    }

    clicks = () =>{
        let newTally = this.state.timesClicked + 1
        this.setState({
            timesClicked: newTally
        })
        
    }


    render(){
        return(
        <div>
        <p>{this.state.timesClicked} click(s)</p> 
        <button onClick={this.clicks}>{this.state.timesClicked}</button>
        </div>
        )
        
    }


}

export default DigitalClicker
