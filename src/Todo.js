// src/Todo.js
import React, { useState } from 'react';
import './Todo.css'; // Import the CSS file for styling

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task.trim(), completed: false }]);
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleToggleComplete = (index) => {
    setTasks(tasks.map((t, i) => 
      i === index ? { ...t, completed: !t.completed } : t
    ));
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new TASK"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((t, index) => (
          <li key={index} className={t.completed ? 'completed' : ''}>
            <span onClick={() => handleToggleComplete(index)}>{t.text}</span>
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
