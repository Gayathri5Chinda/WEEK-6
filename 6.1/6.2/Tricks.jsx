import { useState} from "react";

function App(){
    const [count, setCount] = useState(0);

    return <div>
        <button onClick={() =>{
            setCount(count + 1);
            setCount(count + 1);
            //the setcount will update the count variable in bulk hence the count will be increment by 1
            //setCount doesnot syncronously update the count variable
        }}>
            click me {count}
        </button>
    </div>
}




//-----------------------------------------------------------------------------------
import { useState} from "react";

function App(){
    const [count, setCount] = useState(0);

    return <div>
        <button onClick={() =>{
            setCount(function(c){
                return c + 1;
            });
            // (or) setCount(c => c + 1);
            setCount(c => c + 1);
            //this will get update by 2
        }}>
            click me {count}
        </button>
    </div>
}
