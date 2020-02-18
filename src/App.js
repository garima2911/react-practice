import React from 'react';
import './App.css';
import { TimerDisplay } from './TimerDisplay';
import CountTime  from './CountTime';
import {LapDisplay} from './LapDisplay';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      seconds : 0,
      minutes : 0,
      lap : []
    }
  }
  getCountTimeData(data){
    this.setState({
      seconds : data.seconds,
      minutes : data.minutes,
      lap : data.lap
    })
  }
 render(){
  return (
    
    <div className="App">
      <header className="App-header">
        <TimerDisplay {...this.state}/>
        <CountTime getCountTimeData={this.getCountTimeData.bind(this)} />
        <LapDisplay lap={this.state.lap}/>
      </header>
    </div>
  );
}
} 
export default App;
