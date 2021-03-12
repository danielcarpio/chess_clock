import React, { useState } from 'react';

import '../../assets/css/menu/customMode.scss';

interface IProps{
    selectTimeFunction:(time: number, increment: number)=>void,
    disableCustomMode: ()=>void
}

const CustomMode = (props: IProps) => {
    const [temporalTime, setTemporalTime] = useState<number>(1);
    const [temporalIncrement, setTemporalIncrement] = useState<number>(0);

    return (
        <div className='menuCustomMode align-items-center'>
            <h5>Customize your game</h5>
            <div className="form-group row">
                <label className='text-right col-4 col-form-label' htmlFor="inputTime">Time:</label>
                <input type="number" min='1' onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setTemporalTime(e.currentTarget.valueAsNumber);
                }} className="form-control col-7" placeholder="Select time" value={temporalTime} />
            </div>
            <div className="form-group row">
                <label className='text-right col-4 col-form-label' htmlFor="inputIncrement">Increment:</label>
                <input type="number" min='0' onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setTemporalIncrement(e.currentTarget.valueAsNumber)
                }} className="form-control col-7" placeholder="Select increment" value={temporalIncrement} />
            </div>
            <button className='startgamebutton' onClick={_=>props.selectTimeFunction(temporalTime, temporalIncrement)}>Start game</button>
            <button className='backbutton' onClick={_=>props.disableCustomMode()}>Back</button>
        </div>
    );
};

export default CustomMode;