import React from 'react';
import './GuessList.css';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteGuess } from '../../redux/actions';

export default function GuessList() {
  const guesses = useSelector((state) => state.guesses);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteGuess());
  };

  return (
    <div className="delete-button">
      <Button
        text="DELETE GUESS"
        background="lightgray"
        handleClick={handleClick}
        isDisabled={false}
      />
      <div style={{ width: '300px' }}>
        <ul className="color-list">
          {guesses.map((guess, i) => (
            <li key={i} className="guessed-color" style={{ background: guess }}>
              {guess}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
