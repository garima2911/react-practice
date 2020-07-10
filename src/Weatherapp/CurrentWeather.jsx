/** @jsx jsx */
import { jsx } from '@emotion/core'
const CurrentWeather = (props) =>{
    return(
            <div css={{display: 'flex',margin: '0 10%',color:'#85979E'}}>
                <h3 css={{flex: 1, padding: '20px'}}>Weather</h3>
                <div css={{padding : '20px'}}>
                    <h2>{props.currentTemp} &#8451;</h2>
                    <h3>{props.summary}</h3>
                </div>
            </div>
    )
}

export default CurrentWeather