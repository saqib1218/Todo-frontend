// src/App.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodosAsync, addTodoAsync, updateTodoAsync, deleteTodoAsync } from './features/todos/todosSlice';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './styles/App.css';

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [currentTodo, setCurrentTodo] = useState(null);

  useEffect(() => {
    dispatch(fetchTodosAsync());
  }, [dispatch]);

  useEffect(() => {
    console.log("todo",todos); // Log todos to check if they are being populated
  }, [todos]);

  const handleAddTodo = (text) => {
    dispatch(addTodoAsync(text));
  };

  const handleUpdateTodo = (id, text) => {
    dispatch(updateTodoAsync({ id, text }));
    setCurrentTodo(null);
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodoAsync(id));
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm currentTodo={currentTodo} onAdd={handleAddTodo} onUpdate={handleUpdateTodo} />
      <TodoList todos={todos} handleEditTodo={setCurrentTodo} handleDeleteTodo={handleDeleteTodo} />
    </div>
  );
};

export default App;
