import React, { useState } from 'react';

import './assets/css/app.scss';

import Menu from './components/menu/Menu';
import Clock from './components/clock/Clock';

function App() {

  const [status, setStatus] = useState<'MENU' | 'CLOCK'>('MENU');

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
          <Clock time={time} increment={increment} />
      }
    </div>
  );
}

export default App;
