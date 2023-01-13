import React from 'react';
import Picker from '../components/Picker.js';

export default function Controls({ head, middle, bottom, handleChange }) {
  return (
    <div className="controls">
      <Picker
        label="Head"
        options={['girl', 'boy', 'man']}
        value={head}
        onChange={(e) => handleChange('head', e.target.value)}
      />
      <Picker
        label="Middle"
        options={['boxer', 'fancy', 'pink', 'white']}
        value={middle}
        onChange={(e) => handleChange('middle', e.target.value)}
      />
      <Picker
        label="Bottom"
        options={['orange', 'pink', 'white']}
        value={bottom}
        onChange={(e) => handleChange('bottom', e.target.value)}
      />
    </div>
  );
}
