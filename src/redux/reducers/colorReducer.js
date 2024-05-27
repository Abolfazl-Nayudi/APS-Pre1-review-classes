import {
  ADD_GUESS,
  CLEAR_GUESS,
  DELETE_GUESS,
  STEP,
  CLEAR_STEP,
} from '../actions/actions';

const initialState = {
  guesses: [],
  step: 1,
};

// with spread

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GUESS:
      return { ...state, guesses: [...state.guesses, action.payload] };
    case DELETE_GUESS:
      return { ...state, guesses: state.guesses.slice(0, -1) };
    case CLEAR_GUESS:
      return { ...state, guesses: [] };
    case STEP:
      return { ...state, step: state.step + 1 };
    case CLEAR_STEP:
      return { ...state, step: 1 };
    default:
      return state;
  }
};

// wrapping the reducer into produce function
// const reducer = produce((state, action) => {
//   switch (action.type) {
//     case ADD_GUESS:
//       state.guesses.push(action.payload);
//       break;
//     case DELETE_GUESS:
//       state.guesses.splice(state.guesses.length - 1, 1);
//       break;
//     case CLEAR_GUESS:
//       state.guesses = [];
//       break;
//     case STEP:
//       state.step = state.step + 1;
//       break;
//     default:
//       return state;
//   }
// }, initialState);

// with produce method and draft callback

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_GUESS:
//       const nextState = produce(state, (draft) => {
//         draft.guesses.push(action.payload);
//       });

//       return nextState;
//     case DELETE_GUESS:
//       return produce(state, (draft) => {
//         draft.guesses.splice(draft.guesses.length - 1, 1);
//       });

//     case CLEAR_GUESS:
//       return { ...state, guesses: [] };
//     case STEP:
//       return { ...state, step: state.step + 1 };
//     default:
//       return state;
//   }
// };

export default reducer;
