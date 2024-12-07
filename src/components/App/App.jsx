import {useState, useEffect } from 'react';
import axios from 'axios';

function App () { // I am initializing my variable as an empty array, this will hold my data for my to-do list
  const [ todoList, setTodoList ] = useState( [] );

  useEffect( ()=>{  // When component first loads it will execute this code
    fetchTodoList()
  }, [] );

  function fetchTodoList(){
    console.log( 'in fetchTodoList' );
    axios.get( 'api/todo' ).then( function( response ){ // Making my GET request
      console.log( response.data );
    }).catch( function( err ){
      console.log( err );
      alert( 'error getting to do list' );
    })
  }
  return (
    <div>
      <h1>TO DO APP</h1>
      <p>{ JSON.stringify( todoList )}</p>
    </div>
  );

}

export default App
