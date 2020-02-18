import React from 'react';

export const TimerDisplay = (props) => {
return(
    <div>
        <span>{props.minutes}:</span>
        <span>{props.seconds}</span>
    </div>
)
}