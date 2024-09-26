import React from 'react';
import './VED.css'; // Include CSS file

const VED = () => {
  return (
    <div className="ved-floating-icon">
      <img src={require('../../static/img/ved.png').default} alt="VED AI" />
    </div>
  );
};

export default VED;
