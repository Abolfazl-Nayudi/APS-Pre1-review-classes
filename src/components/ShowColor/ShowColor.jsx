import React, { useState } from 'react';
import './ShowColor.css';
import Button from '../Button/Button';
export default function ShowColor({ randomColor }) {
  const [renderedColor, setRenderedColor] = useState('');
  const [loading, setLoading] = useState(false);
  const handleClick = (e) => {
    setLoading(true);
    let counter = 0;

    const interval = setInterval(() => {
      setRenderedColor(randomColor[counter]);

      if (counter === randomColor.length) {
        clearInterval(interval);
        setRenderedColor('white');
        setLoading(false);
      }

      counter++;
    }, 500);
  };

  return (
    <section className="show">
      <div className="randomColor" style={{ background: renderedColor }}></div>
      <Button
        text="Start"
        background="green"
        handleClick={handleClick}
        isDisabled={loading}
      />
    </section>
  );
}
