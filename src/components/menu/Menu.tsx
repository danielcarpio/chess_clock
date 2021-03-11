import React, { useState } from 'react';

interface IMenuProps {
    setStatus: React.Dispatch<React.SetStateAction<'MENU' | 'CLOCK'>>,
    setTime: React.Dispatch<React.SetStateAction<number>>,
    setIncrement: React.Dispatch<React.SetStateAction<number>>
}

/*
    Más comunes:
    30 min, 10 min, 5 min, 3 min, 1 min,
    15|10, 10|5, 3|2, 2|1, 1|1,
    custom
*/

const Menu = (props: IMenuProps) => {

    const [customMode, setCustomMode] = useState<Boolean>(false);
    const [temporalTime, setTemporalTime] = useState<number>(0);
    const [temporalIncrement, setTemporalIncrement] = useState<number>(0);

    let selectTime = (time: number, increment: number) => {
        props.setTime(time);
        props.setIncrement(increment);
        props.setStatus('CLOCK');
    }

    return (customMode ?
        (
            <div>
                <input type='number' name='time' onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setTemporalTime(e.currentTarget.valueAsNumber);
                }} value={temporalTime} />
                <input type='number' name='increment' onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setTemporalIncrement(e.currentTarget.valueAsNumber)
                }} value={temporalIncrement} />
                <button onClick={_ => selectTime(temporalTime, temporalIncrement)}>Select</button>
                <button onClick={_ => setCustomMode(false)}>Back</button>
            </div>
        )
        :
        (
            <div>
                <button onClick={_ => selectTime(30, 0)}>30 min</button>
                <button onClick={_ => selectTime(10, 0)}>10 min</button>
                <button onClick={_ => selectTime(5, 0)}>5 min</button>
                <button onClick={_ => selectTime(3, 0)}>3 min</button>
                <button onClick={_ => selectTime(1, 0)}>1 min</button>
                <button onClick={_ => selectTime(15, 10)}>15|10</button>
                <button onClick={_ => selectTime(10, 5)}>10|5</button>
                <button onClick={_ => selectTime(3, 2)}>3|2</button>
                <button onClick={_ => selectTime(2, 1)}>2|1</button>
                <button onClick={_ => selectTime(1, 1)}>1|1</button>
                <button onClick={_ => setCustomMode(true)}>Custom</button>
            </div>
        )
    );
}

export default Menu;