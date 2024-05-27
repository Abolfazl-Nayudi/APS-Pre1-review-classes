import React, { useState } from 'react';
import './GuessColor.css';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteGuess,
  addGuess,
  nextStep,
  clearGuess,
  clearStep,
} from '../../redux/actions';

export default function GuessColor({ allColors, randomColors }) {
  const dispatch = useDispatch();
  const guesses = useSelector((state) => state.guesses);

  const [fail, setFail] = useState(false);

  const handleSelectColor = (e) => {
    console.log('color circle clicked');
    // console.log(e.target.style.backgroundColor);
    dispatch(addGuess(e.target.style.backgroundColor));
  };

  const handleGuessClick = () => {
    setFail(false);
    const isEqual = randomColors.toString() === guesses.toString();

    if (isEqual) {
      dispatch(nextStep());
      dispatch(clearGuess());
    } else {
      setFail(true);
      dispatch(clearGuess());
      dispatch(clearStep());
    }
  };
  return (
    <section className="color-box">
      <div>
        {allColors.map((color, i) => {
          return (
            <div
              key={i}
              className="color-circle"
              style={{ backgroundColor: color }}
              onClick={handleSelectColor}
            ></div>
          );
        })}
      </div>
      <Button text="Guess" background="aqua" handleClick={handleGuessClick} />

      {fail && (
        <span style={{ color: 'crimson' }}>You loosed the Game, Try Again</span>
      )}
    </section>
  );
}
