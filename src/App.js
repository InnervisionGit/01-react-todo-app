import React, { useEffect, useState } from 'react';
import './App.css';
import { Button, Input, FormControl, InputLabel } from '@material-ui/core';
import Todo from './Todo.js';
import db from './firebase';
import firebase from 'firebase';
import GitHubIcon from '@material-ui/icons/GitHub';

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
  };

  // const clearTodos = (event) => {
  //   event.preventDefault();
}
return (
  <div className='App'>
    <div className='App-header'>
      <a href='https://github.com/InnervisionGit/01-react-todo-app'>
        <h3>
          <GitHubIcon />
          &nbsp; InnervisionGit &nbsp;
          <GitHubIcon />
        </h3>
      </a>
    </div>
    <div className='content'>
      <h1>T A S K - L I S T</h1>
      <form className='form-wrapper'>
        <FormControl>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button
            className='add-btn'
            disabled={!input}
            variant='contained'
            color='primary'
            type='submit'
            onClick={addTodo}
          >
            Add
          </Button>
        </FormControl>
      </form>
      <ul>
        {todos.map((todo, key) => (
          <Todo todo={todo} key={key} />
        ))}
      </ul>
    </div>
    <div className='App-footer'>
      <a href='https://github.com/InnervisionGit/01-react-todo-app'>
        <h3>
          <GitHubIcon />
          &nbsp; InnervisionGit &nbsp;
          <GitHubIcon />
        </h3>
      </a>
    </div>
  </div>
);

export default App;
