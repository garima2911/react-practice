import React from 'react';

export const LapDisplay = (props) =>{
return(
    <div>
        <ul>
        {props.lap.map((data,index) =>{
            let seconds = data.seconds.toString().length >= 2 ? data.seconds :
            0+`${data.seconds}`;
            let minutes = data.minutes.toString().length >= 2 ? data.minutes :
            0+`${data.minutes}`;
            return(
            <li key={index+1}>
                <span className = "index-span">{index+1}</span>
                <span>{minutes} : </span>
                <span>{seconds}</span>   
            </li>
            )
        })}
        </ul>
    </div>
)
}