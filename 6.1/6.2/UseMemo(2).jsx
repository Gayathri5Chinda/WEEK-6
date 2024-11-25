//using useEffect() and with extra state variable
import {useState, useMemo} from "react";

function App(){
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState(1);

    let count = useMemo(() => {
        let count = 0;
        for(let i = 1; i <= inputValue; i++){
            count = count + i;
        }
        return count;
    }, [inputValue]) //this means only run this logic when inputValue(dependancy array) changes
    
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