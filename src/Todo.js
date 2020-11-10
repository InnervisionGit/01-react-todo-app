import { ListItemText, ListItem, List } from '@material-ui/core';
import React from 'react';
import './Todo.css';

function Todo(props, key) {
  return (
    <List className='todo__list'>
      <ListItem>
        <ListItemText key={key.key} primary={props.todo} />
      </ListItem>
    </List>
  );
}

export default Todo;
