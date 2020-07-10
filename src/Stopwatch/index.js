import React from 'react';
import './App.css';
import { TimerDisplay } from './TimerDisplay';
import CountTime  from './CountTime';
import {LapDisplay} from './LapDisplay';

class Stopwatch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      seconds : 0,
      minutes : 0,
      lap : []
    }
  }
  

  getTimePassed(){
    this.setState({
      seconds : this.state.seconds + 1,
  })
  if(this.state.seconds === 60){
      this.setState({
          minutes  : this.state.minutes + 1,
          seconds : 1
      })
  }
  }


  getLapsCount(){
    this.setState({
      lap : [...this.state.lap,{seconds : this.state.seconds,minutes : this.state.minutes}]
    })
  }


  resetTime(){
    this.setState({
      seconds : 0,
      minutes : 0,
      lap : []
    })
  }


 render(){
  return (
    
    <div className="App">
      <header className="App-header">
        <TimerDisplay {...this.state}/>
        <CountTime getTimePassed={this.getTimePassed.bind(this)} getLapsCount = {this.getLapsCount.bind(this)} resetTime = {this.resetTime.bind(this)}/>
        <LapDisplay lap={this.state.lap}/>
      </header>
    </div>
  );
}
} 
export default Stopwatch;
