import React, { useState } from 'react';
import './App.css';
import Controls from './components/Controls.js';
import Counter from './components/Counter.js';
import Character from './components/Character/Character.js';
import bg from './Media/bg.backgroundlego.jpeg';

function App() {
  const [head, setHead] = useState('girl');

  const handleChange = (type, value) => {
    if (type === 'head') {
      setHead(value);
    }
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${bg})` }}>
      <main>
        <h1>Character Designer</h1>
        <section className="container">
          <div className="left">
            <Counter />
            <Controls {...{ head, handleChange }} />
          </div>
          <div className="right">
            <Character {...{ head }} />
          </div>
        </section>
      </main>
    </div>
  );
}
export default App;
