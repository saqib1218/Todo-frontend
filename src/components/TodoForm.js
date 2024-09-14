// src/components/TodoForm.js
import React, { useState, useEffect } from 'react';

const TodoForm = ({ currentTodo, onAdd, onUpdate }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    if (currentTodo) {
      setText(currentTodo.text);
    } else {
      setText('');
    }
  }, [currentTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentTodo) {
      onUpdate(currentTodo._id, text); // Use _id for MongoDB
    } else {
      onAdd(text);
    }
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
        required
      />
      <button type="submit">{currentTodo ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default TodoForm;
