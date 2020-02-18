import React from 'react';

export const LapDisplay = (props) =>{
return(
    <div>
        <ul>
        {props.lap.map((data,index)=>{
            return(
            <li key={index+1}>
                <span className = "index-span">{index+1}</span>
                <span>{data.minutes} : </span>
                <span>{data.seconds}</span>   
            </li>
            )
        })}
        </ul>
    </div>
)
}