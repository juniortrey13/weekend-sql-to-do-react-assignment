import {useState, useEffect } from 'react';
import axios from 'axios';

function App () {
  const [ todoList, setTodoList ] = useState( [] );

  return (
    <div>
      <h1>TO DO APP</h1>
      <p>{ JSON.stringify( todoList )}</p>
    </div>
  );

}

export default App
