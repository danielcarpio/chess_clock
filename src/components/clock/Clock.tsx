import React, { useEffect, useState } from 'react';

interface IClockProps {
    time: number,
    increment: number
}

const Clock = (props: IClockProps) => {

    const [started, setStarted] = useState<boolean>(false);
    const [whiteTurn, setWhiteTurn] = useState<boolean>(true);

    const [whiteTime, setWhiteTime] = useState<number>(props.time * 60*10);
    const [blackTime, setBlackTime] = useState<number>(props.time * 60*10);

    let timeout:any;
    useEffect(() => {
        if (started) {
            // eslint-disable-next-line
            timeout = setTimeout(() => {
                if (whiteTurn) {
                    setWhiteTime(whiteTime - 1);
                } else {
                    setBlackTime(blackTime - 1);
                }
            }, 100);
        }
    });

    const changeTurn = () => {
        if(started){
            clearTimeout(timeout);
            if(props.increment !== 0){
                if(whiteTurn) setWhiteTime(whiteTime + props.increment*10);
                else setBlackTime(blackTime + props.increment*10);
            }
        }
        if (!!!started) setStarted(true);
        setWhiteTurn(!!!whiteTurn);
    }

    return (
        <div>
            <p>{props.time}|{props.increment}</p>
            
            <p>Tiempo de blancas: {Math.floor(whiteTime/600)}:{Math.floor(whiteTime/10-Math.floor(whiteTime/600)*60)}</p>
            <p>Tiempo de negras: {Math.floor(blackTime/600)}:{Math.floor(blackTime/10-Math.floor(blackTime/600)*60)}</p>
            {
                /*
                <p>Tiempo blancas: {Math.floor(whiteTime / 60)}:{whiteTime - Math.floor(whiteTime / 60) * 60}</p>
                <p>Tiempo negras: {Math.floor(blackTime / 60)}:{blackTime - Math.floor(blackTime / 60) * 60}</p>
                */
            }
            
            
            
            <button onClick={changeTurn}>Cambio de turno</button>
        </div>
    );
}

export default Clock;