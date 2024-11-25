import { useEffect, useState } from "react";
import axios from "axios";
import './App.css';

function App(){
  
  return (
    <>
    <Todo id={3}/>
    </>
  )
}

function Todo({id}){
  const [todo, setTodo] = useState({});

  useEffect(() =>{
    axios.get("https://sum-server.100xdev.com/todos?id="+id)
    .then(response => {
        setTodo(response.data.todo)
    })
  })


  return <div>
    <h1>{todo.title}</h1>
    <h4>{todo.description}</h4>
  </div>
}

export default App