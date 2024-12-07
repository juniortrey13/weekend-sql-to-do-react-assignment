import {useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App () { // I am initializing my variable as an empty array, this will hold my data for my to-do list
  const [ todoList, setTodoList ] = useState( [] );

  useEffect( ()=>{  // When component first loads it will execute this code
    fetchTodoList()
  }, [] );

  function deleteME( id ){
    console.log( 'in deleteME', id );
    axios.delete( `/api/todo?id=${ id }`).then( function( response ){
      console.log( 'back from DELETE:', response.data );
      fetchTodoList();
    }).catch( function( err ){
      console.log( err );
      alert( 'error deleting item' );
    })
  }

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
    const objectToSend = {
      id: id
    }
    axios.put( '/api/todo', objectToSend).then( function( response){
      console.log( 'back from PUT:', response.data );
      fetchTodoList();
    }).catch( function( err ){
      console.log( err );
      alert( 'error updating todo item' );
    })
  }
  return (
    <div>
      <h1>TO DO APP</h1>
      <p>{ JSON.stringify( todoList )}</p>
      {
        todoList.map( ( item )=>(
          <p className={ `complete-${ item.complete }` } key={ item.id }>{item.name} 
          <button onClick={ ()=>{ toggleME( item.id ) }}>Toggle Complete</button>
          <button onClick={ ()=>{ deleteME( item.id ) }}>Delete</button>
          </p>
        ))
      }
    </div>
  );

}

export default App
