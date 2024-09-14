// src/features/todos/todosAPI.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL; // Ensure this is set in your .env file

// Fetch all todos
export const fetchTodos = async () => {
  const response = await axios.get(`${API_URL}/get`);
  return response.data;
};

// Create a new todo
export const createTodo = async (todoText) => {
  const response = await axios.post(API_URL, { text: todoText });
  return response.data;
};

// Update an existing todo
export const updateTodo = async (id, todoText) => {
  const response = await axios.put(`${API_URL}/${id}`, { text: todoText });
  return response.data;
};

// Delete a todo
export const deleteTodo = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
};
