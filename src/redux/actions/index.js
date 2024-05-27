import {
  ADD_GUESS,
  CLEAR_GUESS,
  DELETE_GUESS,
  STEP,
  CLEAR_STEP,
} from './actions';

const addGuess = (data) => {
  return {
    type: ADD_GUESS,
    payload: data,
  };
};

const deleteGuess = (data) => {
  return {
    type: DELETE_GUESS,
    payload: data,
  };
};

const nextStep = () => {
  return {
    type: STEP,
  };
};

const clearGuess = () => {
  return {
    type: CLEAR_GUESS,
  };
};

const clearStep = () => {
  return {
    type: CLEAR_STEP,
  };
};

export { addGuess, deleteGuess, nextStep, clearGuess, clearStep };
