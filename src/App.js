import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Stopwatch from './Stopwatch';
import WeatherApp from './Weatherapp';
import MovieSearch from './MovieSearch/components'

import Home from './Home';
export default function App() {
    return(  
            <div>
            <Router>
            <Switch>
                <Route exact path="/" ><Home/></Route>
                <Route exact path="/stopwatch"><Stopwatch/></Route>
                <Route exact path="/weatherapp"><WeatherApp/></Route> 
                <Route exact path="/moviesearch"><MovieSearch/></Route> 
            </Switch>
            </Router>
            </div>
        
    )
}