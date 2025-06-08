import { useState } from "react"

function UnCounter(){
    let [count, setCount] =useState(0);
    return(
        <>
        <button onClick={() => setCount(count+1)}>Inc Count</button>
        count: { count}
        </>
    )
}
function ParentCount(){
    return(
        <>
        <UnCounter/>
        </>
    )
}
export default ParentCount;