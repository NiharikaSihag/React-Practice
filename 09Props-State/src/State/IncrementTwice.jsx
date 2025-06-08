
import { useState } from "react";

 
function IncrementItTwice(){

    let [count, setCount] = useState(5);
    // setCount(5);
    let twiceIncrement = () =>{
        // setCount((prev)=> prev++)
        setCount(prev => prev+1);
        setCount(prev => prev+1);
    }
     console.log('after function count', count);
    return(
        <>
        count = {count}
        <button onClick={()=>{
            twiceIncrement();
            twiceIncrement();
            alert(count);
            twiceIncrement();
            twiceIncrement();
            twiceIncrement();
        }}>Click me increment twice</button>

        </>
    )
}
export default IncrementItTwice; 
