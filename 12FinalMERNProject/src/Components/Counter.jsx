import { decrementValue, incrementValue, selectCount } from "../Slice/CounterSlice";
import Button from "./Button";
// Add these imports to Counter.jsx:
import { useSelector, useDispatch } from 'react-redux';
function Counter(){
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    return (
        <>
        count: {count}
        <Button text= 'Increment' onClick={() => (dispatch(incrementValue()))}/>
        <Button text= 'Decrement' onClick={() => (dispatch(decrementValue()))}/>
        </>
    )
}

export default Counter; 