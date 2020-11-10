import React, { useState } from 'react';
import './App.css';
import { Button, Input, FormControl, InputLabel } from '@material-ui/core';
import Todo from './Todo.js';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const addTodo = (event) => {
    event.preventDefault(); //stops refresh
    setTodos([...todos, input]);
    setInput('');
    // console.log(key);
  };
  return (
    <div className='App'>
      <h1>Yo!</h1>
      <FormControl>
        <InputLabel>Add a Task:</InputLabel>
        <Input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <Button
          disabled={!input}
          variant='contained'
          color='primary'
          type='submit'
          onClick={addTodo}
        >
          Add
        </Button>
      </FormControl>

      <ul>
        {todos.map((todo, key) => (
          <Todo todo={todo} key={key} />
        ))}
      </ul>
    </div>
  );
}

export default App;
