import React from 'react';

import '../../assets/css/menu/classicMode.scss';

interface IProps{
    selectTimeFunction:(time: number, increment: number)=>void;
    activateCustomMode:()=>void;
}

const ClassicMode = (props: IProps)=>{
    return (
        <div className='menuClassicMode col-12 col-sm-10 col-md-8 col-xl-6 align-items-center'>
            <div className='hideWhenSmall'>
                <h4>Chess clock web app designed for a better experiences with phones. To start, select the time both users will start with and the increment (seconds that will be added after every movement)</h4>
                <hr/>
            </div>
            <h5>Select timer</h5>
            <div className='row'>
                <button onClick={_=>props.selectTimeFunction(30, 0)} className='buttonFirst'>30&nbsp;min</button>
                <button onClick={_=>props.selectTimeFunction(15, 0)} className='buttonMiddle'>15&nbsp;min</button>
                <button onClick={_=>props.selectTimeFunction(10, 0)} className='buttonLast'>10&nbsp;min</button>
            </div>
            <div className='row'>
                <button onClick={_=>props.selectTimeFunction(5, 0)} className='buttonFirst'>5&nbsp;min</button>
                <button onClick={_=>props.selectTimeFunction(3, 0)} className='buttonMiddle'>3&nbsp;min</button>
                <button onClick={_=>props.selectTimeFunction(1, 0)} className='buttonLast'>1&nbsp;min</button>
            </div>
            <div className='row'>
                <button onClick={_=>props.selectTimeFunction(15, 10)} className='buttonFirst'>15&nbsp;|&nbsp;10</button>
                <button onClick={_=>props.selectTimeFunction(10, 5)} className='buttonMiddle'>10&nbsp;|&nbsp;5</button>
                <button onClick={_=>props.selectTimeFunction(5, 2)} className='buttonLast'>5&nbsp;|&nbsp;2</button>
            </div>
            <div className='row'>
                <button onClick={_=>props.selectTimeFunction(3, 2)} className='buttonFirst'>3&nbsp;|&nbsp;2</button>
                <button onClick={_=>props.selectTimeFunction(2, 1)} className='buttonMiddle'>2&nbsp;|&nbsp;1</button>
                <button onClick={_=>props.selectTimeFunction(1, 1)} className='buttonLast'>1&nbsp;|&nbsp;1</button>
            </div>
            <div className='row'>
                <button onClick={_=>props.activateCustomMode()} className='buttonForCustom'>Custom</button>
            </div>
        </div>
    );
};

export default ClassicMode;