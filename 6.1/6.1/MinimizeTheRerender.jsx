//minimizing react re-render
import { useState } from 'react'
import './App.css'

function App() {
    

  return (
    <>
      <HeaderWithButton></HeaderWithButton>
      <Header title = "my name is gaya"></Header>
    </>
  )
}

function HeaderWithButton(){
    const[title, setTitle] = useState("itsme");
    function updateTitle(){
        setTitle("my name is "+Math.random());
    }
    return <div>
        <button onClick = {updateTitle}>Update the title</button>
        <Header title = {title}></Header>
    </div>
}

function Header({title}){
    return <div>
      {title}
    </div>
  }
  export default App
