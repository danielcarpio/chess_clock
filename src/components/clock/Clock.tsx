import React, { useEffect, useState } from 'react';

import TimeDisplay from './TimeDisplay';
import Options from './Options';

interface IClockProps {
    setStatus: React.Dispatch<React.SetStateAction<'MENU' | 'CLOCK' | 'END_GAME' | 'WHITE_NO_TIME' | 'BLACK_NO_TIME'>>,
    time: number,
    increment: number
}

const Clock = (props: IClockProps) => {

    const [started, setStarted] = useState<boolean>(false);
    const [whiteTurn, setWhiteTurn] = useState<boolean>(true);

    const [whiteTime, setWhiteTime] = useState<number>(props.time * 600);
    const [blackTime, setBlackTime] = useState<number>(props.time * 600);

    let timeout:NodeJS.Timeout;
    useEffect(() => {
        if (started || whiteTime === 0 || blackTime === 0) {
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

    if(whiteTime === 0) {
        props.setStatus('WHITE_NO_TIME');
        return null;
    }
    if(blackTime === 0){
        props.setStatus('BLACK_NO_TIME');
        return null;
    }

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
        <div className='clock container h-100'>
            <TimeDisplay started={started} rotated={true} pressed={whiteTurn} time={blackTime} changeTurnFunction={changeTurn} />
            <Options setStatus={props.setStatus} started={started} whiteTurn={whiteTurn} />
            <TimeDisplay started={started} rotated={false} pressed={!!!whiteTurn} time={whiteTime} changeTurnFunction={changeTurn} />
        </div>
    );
}

export default Clock;