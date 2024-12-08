import {useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App () { // I am initializing my variable as an empty array, this will hold my data for my to-do list
  const [ todoList, setTodoList ] = useState( [] );
  const [ newItemName, setNewItemName ] = useState( [] );

  useEffect( ()=>{  // When component first loads it will execute this code
    fetchTodoList()
  }, [] );

  function addItem(){
    const objectToSend = {
      name: newItemName
    }
    console.log( 'sending:', objectToSend );
    axios.post( 'api/todo', objectToSend ).then( function( response ){
      console.log( 'back from POST:', response.data);
      fetchTodoList();
    }).catch( function( err ){
      console.log( err );
      alert( 'error adding to list');
    })
  }

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
      <h2>Current List</h2>
      <p>{ JSON.stringify( todoList )}</p>
      {
        todoList.map( ( item )=>(
          <p className={ `complete-${ item.complete }` } key={ item.id }>{item.name} 
          <button onClick={ ()=>{ toggleME( item.id ) }}>Toggle Complete</button>
          <button onClick={ ()=>{ deleteME( item.id ) }}>Delete</button>
          </p>
        ))
      }
      <h2>Add new to-list:</h2>
      <input type='text' placeholder='To Do'onChange={ (e)=>{ setNewItemName( e.target.value )}}/>
      <button onClick={addItem}>Add</button>
      <p>{JSON.stringify( newItemName )}</p>
    </div>
  );

}

export default App
