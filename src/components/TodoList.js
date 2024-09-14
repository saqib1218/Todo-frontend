// src/components/TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, handleEditTodo, handleDeleteTodo }) => {
  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p>No todos available.</p>
      ) : (
        todos.map((todo) => {
          console.log(todo); // Log the todo to check its structure
          return (
            <TodoItem 
              key={todo._id} 
              todo={todo} 
              handleEditTodo={handleEditTodo} 
              handleDeleteTodo={handleDeleteTodo} 
            />
          );
        })
      )}
    </div>
  );
};

export default TodoList;
