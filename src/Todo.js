import {
  ListItemText,
  ListItem,
  List,
  Button,
  Modal,
  makeStyles,
} from '@material-ui/core';
import React, { useState } from 'react';
import db from './firebase';
import './Todo.css';
import DeleteIcon from '@material-ui/icons/Delete';
import { SettingsPowerRounded } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props, key) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState();

  const updateTodo = () => {
    db.collection('todos').doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <h4>Update your TODO:</h4>
          <input
            placeholder={props.todo.todo}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button disabled={!input} onClick={updateTodo}>
            Done
          </Button>
        </div>
      </Modal>
      <List className='todo__list'>
        <ListItem>
          <button onClick={(e) => setOpen(true)}>Edit</button>
          <DeleteIcon
            onClick={(event) =>
              db.collection('todos').doc(props.todo.id).delete()
            }
          />
          <ListItemText key={key.key} primary={props.todo.todo} />
        </ListItem>
      </List>
    </>
  );
}

export default Todo;
