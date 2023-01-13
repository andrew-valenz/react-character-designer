import React from 'react';
import './Character.css';

export default function Character({ head, middle, bottom }) {
  return (
    <div className="character">
      <img className="head" src={`./${head}-head.png`}></img>
      <img className="middle" src={`./${middle}-middle.png`}></img>
      <img className="bottom" src={`./${bottom}-pants.png`}></img>
    </div>
  );
}
