import React from 'react';

class CountTime extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isRunning : false
        }
    }

    startTimer = () => {
        this.setState({
            isRunning : true
        })
        this.interval = setInterval(function(){
            this.props.getTimePassed();
        }.bind(this),1000)
    }

    stopTimer = () =>{
        this.setState({
            isRunning : false
        })
        clearInterval(this.interval);
    }

    resetTimer = () =>{
        this.setState({
            isRunning : false,
        },() => this.props.resetTime())
        clearInterval(this.interval);
      }

    render(){
        return(
            <div>
                <button onClick= {!this.state.isRunning ? this.startTimer : 
                this.stopTimer}>
                {this.state.isRunning ? "Stop" : "Start"}</button>
                <button onClick={this.resetTimer}>Reset</button>
                <button onClick={() => this.props.getLapsCount()} disabled={!this.state.isRunning}>Lap</button>
            </div>
        )
    }
}

export default CountTime;