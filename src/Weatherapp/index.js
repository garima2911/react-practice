import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core'
import CurrentWeather from './CurrentWeather';

class WeatherApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentWeather : "",
            summary : ""
        }
    }
    componentDidMount(){
        var cors_api_url = 'https://cors-anywhere.herokuapp.com/';
        let api_url = "https://api.darksky.net/forecast/51ee1c9d0d1a24af2f8fb669fcaaa6c9/12.9716,77.5946";

        let url = cors_api_url + api_url
        fetch(url).then((response) =>  response.json()).then(
            (data) =>{
                this.convertToCelsius(data.currently.temperature);
                this.setState({
                    summary : data.currently.summary
                })
            }
        )
    }
    convertToCelsius = (temp) => {
        let celsius = (temp - 32) * (5/9)
        this.setState({
            currentWeather : Math.round(celsius)
        })
    }
    render(){
    return(
        <div css={{
        height : "100vh"}}>
         <CurrentWeather currentTemp = {this.state.currentWeather} summary = {this.state.summary}></CurrentWeather>
        </div>
    )
    }
}

export default WeatherApp
