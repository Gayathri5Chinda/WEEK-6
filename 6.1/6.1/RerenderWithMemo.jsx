import React from 'react';
//react re render
import { useState } from 'react'


function App() {
    const[title, setTitle] = useState("itsme");
    function updateTitle(){
        setTitle("my name is "+Math.random());
    }

  return (
    <div>
      <button onClick = {updateTitle}>Update the title</button>
      <Header title = {title}></Header>
      <Header title = "my name is gaya"></Header>
      <Header title = "my name is gaya"></Header>
      <Header title = "my name is gaya"></Header>
    </div>
  )
}

const Header = React.memo(function Header({title}){
    return <div>
      {title}
    </div>
  })

export default App