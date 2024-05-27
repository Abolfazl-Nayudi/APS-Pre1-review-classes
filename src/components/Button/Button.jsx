import React from 'react';
import './Button.css';
export default function Button({ text, background, handleClick, isDisabled }) {
  return (
    <button
      style={{ background: isDisabled ? 'gray' : background }}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {isDisabled ? 'loading...' : text}
      {/* disable => true => loading... */}
      {/* disalbe => false => {text} */}
    </button>
  );
}
