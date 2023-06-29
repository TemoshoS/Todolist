import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [priority, setPriority] = useState('');

  const addTodo = () => {
    if (inputValue && priority) {
      let color = '';
      if (priority === 'high') {
        color = 'red';
      } else if (priority === 'medium') {
        color = 'yellow';
      } else if (priority === 'low') {
        color = 'green';
      }

      const newTodo = {
        id: Date.now(),
        text: inputValue,
        priority: priority,
        color: color,
      };

      setTodos([...todos, newTodo]);
      setInputValue('');
      setPriority('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <select onChange={(e) => setPriority(e.target.value)}>
        <option>Select</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ color: todo.color }}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
