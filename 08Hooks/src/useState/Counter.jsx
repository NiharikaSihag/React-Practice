import { useState } from "react"

function Counter({Mycount}){
    // console.log(Mycount)
    const [ count, setCounter] = useState(() => {
       return Mycount || 15
        // console.log(Mycount)
    });

    return (
        <>
        <h1>Hey</h1>
        Count : {count}
        <button onClick={(()=> (setCounter(prev => prev+1)))}>Increase</button>
        <button onClick={(()=> (setCounter(prev => prev-1)))}>Decrease</button>
        </>
    )
}
export default Counter;