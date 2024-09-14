// src/features/todos/todosSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTodos, createTodo, updateTodo as apiUpdateTodo, deleteTodo } from './todosAPI';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      return state.filter(todo => todo._id !== action.payload); // Use _id for MongoDB
    },
    updateTodo: (state, action) => {
      const index = state.findIndex(todo => todo._id === action.payload._id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
        .addCase(fetchTodosAsync.fulfilled, (state, action) => {
            return action.payload; // Set the state to the fetched todos
        });
},
});

// Async thunks
export const fetchTodosAsync = createAsyncThunk('todos/fetchTodos', async () => {
  const todos = await fetchTodos();
  return todos;
});

export const addTodoAsync = createAsyncThunk('todos/addTodo',  async (todoText, { dispatch }) => {
  const newTodo = await createTodo(todoText);
  dispatch(addTodo(newTodo));
  return newTodo;
});

// Rename the async thunk to avoid conflict
export const updateTodoAsync = createAsyncThunk('todos/updateTodo', async ({ id, text }, { dispatch }) => {
  const updatedTodo = await apiUpdateTodo(id, text); // Use the renamed import
  dispatch(updateTodo(updatedTodo));
  return updatedTodo;
});

export const deleteTodoAsync = createAsyncThunk('todos/deleteTodo', async (id, { dispatch }) => {
  await deleteTodo(id);
  dispatch(removeTodo(id));
  return id;
});

// Export actions and reducer
export const { addTodo, removeTodo, updateTodo } = todosSlice.actions;
export default todosSlice.reducer;
  