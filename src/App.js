import React, { useState } from 'react';
import './App.css';
import Controls from './components/Controls.js';
import Counter from './components/Counter.js';
import Character from './components/Character/Character.js';
import bg from './Media/bg.backgroundlego.jpeg';

function App() {
  const [head, setHead] = useState('girl');
  const [middle, setMiddle] = useState('boxer');
  const [bottom, setBottom] = useState('white');

  const handleChange = (type, value) => {
    if (type === 'head') {
      setHead(value);
    }
    if (type === 'middle') {
      setMiddle(value);
    }
    if (type === 'bottom') {
      setBottom(value);
    }
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${bg})` }}>
      <main>
        <h1>Character Designer</h1>
        <section className="container">
          <div className="left">
            <Controls {...{ head, middle, bottom, handleChange }} />
            <Counter />
          </div>
          <div className="right">
            <Character {...{ head, middle, bottom }} />
          </div>
        </section>
      </main>
    </div>
  );
}
export default App;
