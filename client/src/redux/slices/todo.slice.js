import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteTodoData,
  updateTodoData,
  createNewTodo,
} from "../../api/todoApi";
import { getAllTodoOfOneUser } from "../../api/userApi";
import { setToken } from "./user.slice";

// pending
// fulfilled
// rejected

export const fetchTodos = createAsyncThunk(
  "todo/fetchTodos",
  async (token, { dispatch, rejectWithValue }) => {
    // async operation => request
    try {
      const res = await getAllTodoOfOneUser(token);
      return res;
    } catch (error) {
      console.log(error.message);

      if (error.message === "Error: invalid token") {
        dispatch(setToken(null));
        localStorage.removeItem("token");
      }

      rejectWithValue("invalid token");
      throw new Error(error);
    }
  }
);

export const createTodo = createAsyncThunk("todo/createTodo", async (obj) => {
  try {
    const res = await createNewTodo(obj.data, obj.token);
    console.log(res);
    return res;
  } catch (error) {
    throw new Error(error);
  }
});

export const deleteTodo = createAsyncThunk("todo/deleteTodo", async (id) => {
  try {
    const res = await deleteTodoData(id);
    return res;
  } catch (error) {
    throw new Error(error);
  }
});

const initialState = {
  loading: false,
  error: null,
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    console.log(builder);

    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;

        console.log("fulfilled", action);
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        console.log("rejected", action);
        state.error = action.error.message;
      })
      .addCase(createTodo.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.todos.push(action.payload);
      })
      .addCase(createTodo.rejected, (state, action) => {
        console.log("rejected", action);
      })
      .addCase(deleteTodo.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = state.todos.filter(
          (todo) => todo._id !== action.payload._id
        );
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        console.log("rejected", action);
      });
  },
});

export default todoSlice.reducer;
