import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/user.slice";
import todoSlice from "../slices/todo.slice";
const store = configureStore({
  reducer: {
    user: userSlice,
    todo: todoSlice,
  },
});

export default store;
