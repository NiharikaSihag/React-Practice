import { useState } from "react"

function Text(props){
    return(
        <>
        Count = {props.MyCount}
        </>
    )
}
function Counter(){
    let [count, setCount] = useState(0);
    return(
        <>
        Parent Component 
        <button onClick={() => {setCount(count+1)}}>Inc Count</button>
        <Text MyCount={count}/>
        </>
    )
}
export default Counter;