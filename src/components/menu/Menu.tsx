import React, { useState } from 'react';

import CustomMode from './CustomMode';
import ClassicMode from './ClassicMode';

interface IMenuProps {
    setStatus: React.Dispatch<React.SetStateAction<'MENU' | 'CLOCK' | 'END_GAME' | 'WHITE_NO_TIME' | 'BLACK_NO_TIME'>>,
    setTime: React.Dispatch<React.SetStateAction<number>>,
    setIncrement: React.Dispatch<React.SetStateAction<number>>
}

const Menu = (props: IMenuProps) => {

    const [customMode, setCustomMode] = useState<Boolean>(false);

    const selectTime = (time: number, increment: number) => {
        if (time < 1 || isNaN(time) || increment < 0 || isNaN(increment)) return;
        props.setTime(time);
        props.setIncrement(increment);
        props.setStatus('CLOCK');
    }

    const activateCustomMode = () => { setCustomMode(true) };
    const disableCustomMode = () => { setCustomMode(false) };

    return (
        <div className='container d-flex justify-content-center align-items-center h-100'>
            {customMode ?
                <CustomMode selectTimeFunction={selectTime} disableCustomMode={disableCustomMode} />
                :
                <ClassicMode selectTimeFunction={selectTime} activateCustomMode={activateCustomMode} />
            }
        </div>
    );
}

export default Menu;