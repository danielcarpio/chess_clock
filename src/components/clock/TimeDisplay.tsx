import React from 'react';

import '../../assets/css/clock/timeDisplay.scss';

interface IProps {
    time: number,
    changeTurnFunction: ()=>void,
    rotated: boolean, // if false, white time. if true, black time
    pressed: boolean //if its true, its not your turn,
    started: boolean
};

const TimeDisplay = (props: IProps)=>{
    const getTimeFormatted = (time: number)=>{
        const minutes = Math.floor(time/600);
        const zeroInMinutes = minutes.toString().length === 1 ? '0':'';
        const seconds = Math.floor(time/10 - minutes*60);
        const zeroInSecond = seconds.toString().length === 1 ? '0':'';

        return `${zeroInMinutes}${minutes}:${zeroInSecond}${seconds}`;
    }

    const rotatedClass = props.rotated ? ' rotated':'';
    const pressedClass = props.pressed ? ' pressed':'';
    const clockRunningClass = !!!props.pressed && props.started ? ' running':'';

    return (
        <div className={'timeDisplay' + rotatedClass}>
            <div className={'clock' + clockRunningClass}>
                {
                    props.started ?
                    <p>{getTimeFormatted(props.time)}</p>
                    :
                    props.rotated ?
                    <p>Black</p>
                    :
                    <p>White</p>
                }
            </div>
            <div className='changeTurn'>
                {  
                    pressedClass ? 
                    <button className={'changeTurnButton' + pressedClass} ></button>
                    :
                    <button className={'changeTurnButton'} onClick={props.changeTurnFunction}></button>
                }
            </div>
        </div>        
    );
};

export default TimeDisplay;