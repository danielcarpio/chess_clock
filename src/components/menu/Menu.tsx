import React, { useState } from 'react';

import CustomMode from './CustomMode';

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
    
    const selectTime = (time: number, increment: number) => {
        if(time <= 1 || isNaN(time) || increment <= 0 || isNaN(increment)) return;
        props.setTime(time);
        props.setIncrement(increment);
        props.setStatus('CLOCK');
    }

    const disableCustomMode = ()=>{setCustomMode(false)};

    return (
        <div className='container d-flex justify-content-center align-items-center h-100'>

            {customMode ?
            <CustomMode selectTimeFunction={selectTime} disableCustomMode={disableCustomMode} />
            :
            (
                <div>
                    <button onClick={_ => selectTime(30, 0)}>30 min</button>
                    <button onClick={_ => selectTime(15, 0)}>15 min</button>
                    <button onClick={_ => selectTime(10, 0)}>10 min</button>

                    <button onClick={_ => selectTime(5, 0)}>5 min</button>
                    <button onClick={_ => selectTime(3, 0)}>3 min</button>
                    <button onClick={_ => selectTime(1, 0)}>1 min</button>

                    <button onClick={_ => selectTime(15, 10)}>15|10</button>
                    <button onClick={_ => selectTime(10, 5)}>10|5</button>
                    <button onClick={_ => selectTime(10, 5)}>5|2</button>

                    <button onClick={_ => selectTime(3, 2)}>3|2</button>
                    <button onClick={_ => selectTime(2, 1)}>2|1</button>
                    <button onClick={_ => selectTime(1, 1)}>1|1</button>
                    <button onClick={_ => setCustomMode(true)}>Custom</button>
                </div>
            )}
        </div>
    );
}

export default Menu;