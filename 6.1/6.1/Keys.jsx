import React from 'react';
//react re render
import { useState } from 'react'

let counter = 4;
function App() {
  const[todos, setTodos] = useState([{
    id: 1,
    title: "Go to gym",
    description: "You must go the gym now"
  },
  {
    id: 2,
    title: "eat food",
    description: "eat healthy food"
  },
  {
    id: 3,
    title: "Go to the class",
    description: "Visit the college for classes"
  }]);

  function addTodo(){
    const newTodos = [];
    for(let i = 0; i < todos.length; i++){
      newTodos.push(todos[i]);
    }
    newTodos.push({
      id: counter++,
      title: Math.random(),
      description: Math.random()
    })
    setTodos(newTodos)
  }

  return (
    <div>
      <button onClick={addTodo}>Add a todo</button>
      {todos.map(function(todo){
        return <Todo key = {todo.id} title={todo.title} description={todo.description}/>
      })}
    </div>
  )
}

function Todo({title, description}){
  return<div>
    <h1>{title}</h1>
    <h5>{description}</h5>
  </div>
}

export default App