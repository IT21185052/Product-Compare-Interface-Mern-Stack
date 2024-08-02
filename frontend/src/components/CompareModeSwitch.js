import React, { useState } from 'react';
import './CompareModeSwitch.css';

const CompareModeSwitch = ({ setCompareMode }) => {
  const [mode, setMode] = useState('FULL');

  const handleModeChange = (newMode) => {
    setMode(newMode);
    setCompareMode(newMode);
  };

  return (
    <div className="compare-mode-switch">
      <div className="button-container">
        <div 
          className={`left-rect ${mode === 'FULL' ? 'active' : ''}`} 
          onClick={() => handleModeChange('FULL')}
        >
          FULL
        </div>
        <div className="circle">OR</div>
        <div 
          className={`right-rect ${mode === 'DIFFERENCES' ? 'active' : ''}`} 
          onClick={() => handleModeChange('DIFFERENCES')}
        >
          DIFFERENCES
        </div>
      </div>
      <div className="compare-mode-text">
        <i className="info-icon">i</i> Change compare mode
      </div>
    </div>
  );
};

export default CompareModeSwitch;
