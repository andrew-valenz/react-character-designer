import React from 'react';
import Picker from '../components/Picker.js';

export default function Controls({ head, handleChange }) {
  return (
    <div className="controls">
      <Picker
        label="Head"
        options={['girl', 'boy', 'man']}
        value={head}
        onChange={(e) => handleChange('head', e.target.value)}
      />
    </div>
  );
}
