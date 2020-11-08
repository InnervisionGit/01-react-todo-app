import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['One', 'Two', 'Three']);
  return (
    <div className='App'>
      <h1>Yo!</h1>
      <input />
      <button>hi</button>

      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  );
}

export default App;
