
import React from 'react';
import './loading.css'; // Create this file with the CSS below

const Loading = ({ size = 40, color = '#09f', thickness = 4 }) => {
  const spinnerStyle = {
    width: size,
    height: size,
    border: `${thickness}px solid rgba(0, 0, 0, 0.1)`,
    borderLeftColor: color,
    borderRadius: '50%',
    animation: 'spin 1s linear infinite'
  };

  return (
    <div className="spinner-container">
      <div style={spinnerStyle}></div>
    </div>
  );
};

export default Loading;