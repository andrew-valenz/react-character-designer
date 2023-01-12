import React, { useState } from 'react';
import './App.css';
import Controls from './components/Controls.js';
import Counter from './components/Counter.js';
import Display from './components/Display.js';
import bg from './Media/bg.backgroundlego.jpeg';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${bg})` }}>
      <Counter />
      <Controls />
      <Display />
    </div>
  );
}
export default App;
