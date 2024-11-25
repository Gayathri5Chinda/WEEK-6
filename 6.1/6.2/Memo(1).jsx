import {useState, memo, useCallback} from "react";

function App(){
    const [count, setCount] = useState(0);

    const inputFunction = useCallback(() =>{
        console.log("hi there")
    }, [])
    /*inputFunction is a function which is wrapped inside a useCallback and only if something in this
    dependency array changes will be cnsider this input function to change else consider same across renders*/

    return <div>
      <ButtonComponent inputFunction = {inputFunction}/>
        <button onClick = {() => {
            setCount(count+1);
        }}>Click me ({count})</button>
    </div>
}

const ButtonComponent = memo((inputFunction) => {
    return <div>
        <button>Button Clicked</button>
    </div>
})

export default App;