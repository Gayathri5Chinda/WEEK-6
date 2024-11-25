//react re render
import { useState } from 'react'
import {Fragment} from 'react';

function App() {
    const[title, setTitle] = useState("itsme");
    function updateTitle(){
        setTitle("my name is "+Math.random());
    }

  return (
    <Fragment>
      <button onClick = {updateTitle}>Update the title</button>
      <Header title = {title}></Header>
      <Header title = "my name is gaya"></Header>
    </Fragment>
  )
}

function Header({title}){
  return <div>
    {title}
  </div>
}
export default App