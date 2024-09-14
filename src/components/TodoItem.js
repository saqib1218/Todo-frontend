// src/components/TodoItem.js
import React from 'react';

const TodoItem = ({ todo, handleEditTodo, handleDeleteTodo }) => {
  return (
    <div className="todo-item">
      <span>{todo.text}</span> {/* Ensure this is accessing the correct property */}
      <button onClick={() => handleEditTodo(todo)}>Edit</button>
      <button onClick={() => handleDeleteTodo(todo._id)}>Delete</button> {/* Use _id here */}
    </div>
  );
};

export default TodoItem;
