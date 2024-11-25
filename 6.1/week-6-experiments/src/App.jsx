//react component return(side heading)
import { useState } from 'react'
import './App.css'

function App() {
  return (
    //donot remove top-level div because
    <div>
      <Header title = "my name is gayathri"></Header>
      <Header title = "my name is gaya"></Header>
    </div>
  )
}


function Header({title}){
  return <div>
    {title}
  </div>
}
export default App 
