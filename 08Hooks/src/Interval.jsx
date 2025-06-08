import { useRef, useState } from "react";

function IntervalCount(){
    const [count, setCount] = useState(0);
    let myRefrence = useRef(null);
    function IncreaseCount(){
        if(myRefrence.current !== null){
            ClearMyInterval()
        }
        if(myRefrence.current === null){
            myRefrence.current = setInterval(() => {
                setCount(prev => prev+1)
            }, 1000)
        }
    }
    function ClearMyInterval(){
        clearInterval(myRefrence.current);
        myRefrence.current= null;
    }
    function DecreaseCount(){
        if(myRefrence.current !== null){
            ClearMyInterval()
            
        }
        if(myRefrence.current === null){
            myRefrence.current = setInterval(() => {
                setCount(prev => prev - 1)
            }, 1000)
        }
    }
    return (
        <>
        count: {count}
        <button onClick={IncreaseCount}>Increment</button>
           <button onClick={DecreaseCount}>Decrement</button>
        </>
    )
}
export default IntervalCount;