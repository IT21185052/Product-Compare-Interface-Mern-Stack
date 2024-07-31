import React from 'react';
import './CompareModeSwitch.css';

const CompareModeSwitch = () => {
  return (
    <div className="compare-mode-switch">
      <div className="button-container">
        <div className="left-rect">FULL</div>
        <div className="circle">OR</div>
        <div className="right-rect">DIFFERENCES</div>
      </div>
      <div className="compare-mode-text">
        <i className="info-icon">i</i> Change compare mode
      </div>
    </div>
  );
};

export default CompareModeSwitch;
