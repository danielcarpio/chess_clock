import React from 'react';

import '../../assets/css/endgame/endgame.scss';

interface IProps{
    setStatus: React.Dispatch<React.SetStateAction<'MENU' | 'CLOCK' | 'END_GAME' | 'WHITE_NO_TIME' | 'BLACK_NO_TIME'>>,
    message: string
}

const EndGame = (props: IProps)=>{
    return (
        <div className='endgame_main_div container h-100'>
            <div className='div_text h-50'>
                <p>{props.message}</p>
            </div>  
            <div className="div_button h-50">
                <button onClick={_=>props.setStatus('MENU')}>Restart</button>
            </div>
        </div>
    );
};

export default EndGame;