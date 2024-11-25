import {useState} from "react";

function App(){
    const [count, setCount] = useState(0);

    return <div>
        <button onClick = {() => {
            setCount(count+1);
        }}>Click me ({count})</button>
    </div>
}

const ButtonComponent = (() => {
    return <div>
        <button>Button Clicked</button>
    </div>
})

export default App;