import React, { useEffect, useState } from 'react';
import './App.css';
import { Button, Input, FormControl, InputLabel } from '@material-ui/core';
import Todo from './Todo.js';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  //listen to DB and fetch as it updates
  useEffect(() => {
    //fires when app.js loads
    db.collection('todos')
      .orderBy('timestamp', 'asc')
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);
  const addTodo = (event) => {
    event.preventDefault(); //stops refresh

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

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
