import React from 'react';

import '../../assets/css/clock/options.scss';

interface IProps{    
    setStatus: React.Dispatch<React.SetStateAction<'MENU' | 'CLOCK' | 'END_GAME' | 'WHITE_NO_TIME' | 'BLACK_NO_TIME'>>,
    whiteTurn: boolean,
    started: boolean
}

const Options = (props:IProps)=>{

    const classRotated = !!!props.whiteTurn ? ' rotated':'';

    const endGame = ()=>{
        if(!!!props.started){
            props.setStatus('MENU');
        } else {
            props.setStatus('END_GAME');
        }
    };

    return (
        <div className='options'>
            <button onClick={endGame} className={classRotated}>End game</button>
        </div>
    );
};

export default Options;