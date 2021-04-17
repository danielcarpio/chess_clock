import React, { useState } from 'react';

import './assets/css/app.scss';
import './assets/fonts/digital_font/digital-7-fonts.css';

import Menu from './components/menu/Menu';
import Clock from './components/clock/Clock';
import EndGame from './components/endGame/EndGame';

function App() {
  const [status, setStatus] = useState<'MENU' | 'CLOCK' | 'END_GAME' | 'WHITE_NO_TIME' | 'BLACK_NO_TIME'>('MENU');

  const [time, setTime] = useState<number>(0);
  const [increment, setIncrement] = useState<number>(0);

  return (
    <div className="App">
      {
        status === 'MENU' ?
          <Menu 
            setStatus={setStatus} 
            setTime={setTime}
            setIncrement={setIncrement}
            />
        :
        status === 'CLOCK' ?
          <Clock setStatus={setStatus} time={time} increment={increment} />
        :
        status === 'END_GAME' ?
          <EndGame setStatus={setStatus} message='Game finished!' />
        :
        status === 'WHITE_NO_TIME' ? 
          <EndGame setStatus={setStatus} message='Black won the game!' />
        :
        status === 'BLACK_NO_TIME' ?
          <EndGame setStatus={setStatus} message='White won the game!' />
        :
        null
      }
    </div>
  );
}

export default App;
