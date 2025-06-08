import { useDispatch, useSelector } from "react-redux";
import { decrementValue, incrementValue, selectCount, selectHistory } from "./CounterSlice";

function Counter(){

    const count = useSelector(selectCount);
    const history = useSelector(selectHistory)
    const dispatch = useDispatch();
    return(
        <>
        value :  {count}
        <br />
        <button onClick={() => dispatch(incrementValue())}>Increment</button>
        <button onClick={() => dispatch(decrementValue())}>Decrement</button>
        <br />
        History : {history} 
        </>
    )
}
export default Counter;