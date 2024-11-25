//using useEffect() and with extra state variable
import {useState, useEffect} from "react";

function App(){
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState(1);
    const [count, setCount] = useState(0);

    useEffect(() => {
        let finalCount = 0;
        for(let i = 1; i <= inputValue; i++){
            finalCount = finalCount + i;
        } // <-- this is an expensive operation and shouldn't be done everytime we render it
        setCount(finalCount);
        //since you are updating the state variable here there will be two (unnessecary) re-renders
    }, [inputValue])
    
    return <div>
        <input onChange = {function(e){
            setInputValue(e.target.value);
        }} placeholder = {"Find sum from 1 to n"}></input>
        <br/>
        Sum from 1 to {inputValue} is {count}
        <button onClick = {() => {
            setCounter(counter+1);
        }}>Counter ({counter})</button>
    </div>
}

export default App;