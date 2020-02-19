import React from 'react';

export const TimerDisplay = (props) => {
let seconds = props.seconds.toString().length >= 2 ? props.seconds :
 0+`${props.seconds}`;
 let minutes = props.minutes.toString().length >= 2 ? props.minutes :
 0+`${props.minutes}`;
return(
    <div>
        <span>{minutes}:</span>
        <span>{seconds}</span>
    </div>
)
}