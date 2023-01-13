import React, { useState } from 'react';
import './App.css';
import Controls from './components/Controls.js';
// import Counter from './components/Counter.js';
import Character from './components/Character/Character.js';
import bg from './Media/bg.backgroundlego.jpeg';

function App() {
  const [head, setHead] = useState('girl');
  const [middle, setMiddle] = useState('boxer');
  const [bottom, setBottom] = useState('white');
  const [headCount, setHeadCount] = useState(0);
  const [middleCount, setMiddleCount] = useState(0);
  const [bottomCount, setBottomCount] = useState(0);

  // const [input, setInput] = useState('');

  const handleChange = (type, value) => {
    if (type === 'head') {
      setHead(value);
      setHeadCount(headCount + 1);
    }
    if (type === 'middle') {
      setMiddle(value);
      setMiddleCount(middleCount + 1);
    }
    if (type === 'bottom') {
      setBottom(value);
      setBottomCount(bottomCount + 1);
    }
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${bg})` }}>
      <main>
        <h1>Character Designer</h1>
        <section className="container">
          <div className="left">
            <Controls {...{ head, middle, bottom, handleChange }} />
          </div>
          <div className="right">
            <Character {...{ head, middle, bottom }} />
            {/* <Counter {...{}} /> */}
          </div>
          <div>
            <p>
              {' '}
              You have changed the head {headCount} times,you have changed the shirt {middleCount}{' '}
              times, you have changed the bottom {bottomCount} times. And who can forget your
              characters classic catchphrase!{' '}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
export default App;
