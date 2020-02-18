import React from 'react';

class CountTime extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            seconds : 0,
            minutes : 0,
            isRunning : false,
            lap:[]
        }
    }
    timer = () => {
        this.setState({
            seconds : this.state.seconds + 1
        })
        if(this.state.seconds == 60){
            this.setState({
                minutes  : this.state.minutes + 1,
                seconds : 1
            })
        }
        this.props.getCountTimeData(this.state);
    }
    startTimer = () => {
        this.setState({
            isRunning : true
        })
        this.interval = setInterval(this.timer,1000)
    }
    stopTimer = () =>{
        this.setState({
            isRunning : false
        })
        clearInterval(this.interval);
    }
    resetTimer = () =>{
        this.setState({
            seconds : 0,
            minutes : 0,
            isRunning : false,
            lap : []
        },() => this.props.getCountTimeData(this.state))
        clearInterval(this.interval);
      }
    getLap = () => {
        this.setState({
            lap : [...this.state.lap,{seconds : this.state.seconds,minutes : this.state.minutes}]
        })
        this.props.getCountTimeData(this.state)
    }
    render(){
        return(
            <div>
                <button onClick= {!this.state.isRunning ? this.startTimer : 
                this.stopTimer}>
                {this.state.isRunning ? "Stop" : "Start"}</button>
                <button onClick={this.resetTimer}>Reset</button>
                <button onClick={this.getLap} disabled={!this.state.isRunning}>Lap</button>
            </div>
        )
    }
}

export default CountTime;