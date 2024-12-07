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
      setTodoList( response.data );
    }).catch( function( err ){
      console.log( err );
      alert( 'error getting to do list' );
    })
  }

  function toggleME( id ){
    console.log( 'in toggleME', id );
  }
  return (
    <div>
      <h1>TO DO APP</h1>
      <p>{ JSON.stringify( todoList )}</p>
      {
        todoList.map( ( item )=>(
          <p key={ item.id }>{item.name} <button onClick={ ()=>{ toggleME( item.id ) }}>Toggle Complete</button></p>
        ))
      }
    </div>
  );

}

export default App
