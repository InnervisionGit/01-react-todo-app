import { ListItemText, ListItem, List, Button } from '@material-ui/core';
import React from 'react';
import db from './firebase';
import './Todo.css';

function Todo(props, key) {
  return (
    <List className='todo__list'>
      <ListItem>
        <ListItemText key={key.key} primary={props.todo.todo} />
      </ListItem>
      <Button
        onClick={(event) => db.collection('todos').doc(props.todo.id).delete()}
      />
    </List>
  );
}

export default Todo;
