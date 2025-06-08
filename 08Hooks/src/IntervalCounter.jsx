import { useState, useRef } from 'react'
import './App.css'

function IntervalCounter() {
  const [counter, setCounter] = useState(0);
  const intervalRef = useRef(null); // useRef to keep track of the interval ID

  const startIncrement = () => {
     if(intervalRef.current !== null){
        clearMyInterval();
        
    }
    if (intervalRef.current === null) {
      intervalRef.current = setInterval(() => {
        setCounter(prev => prev + 1);
      }, 1000); // Increment every second
    }
  };

  const clearMyInterval = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const startDecrement = () => {
    if(intervalRef.current !== null){
        clearMyInterval();
    }
    if(intervalRef.current === null){
        intervalRef.current = setInterval(() => {
            setCounter(prev => prev-1);
        }, 1000);
    }
    // setCounter(prev => prev - 1);
  };

  return (
    <>
      <h1>Vite + React</h1>
      <h3>Count = {counter}</h3>
      <div className="card">
        <button onClick={startIncrement}>Start</button>
        <button onClick={clearMyInterval}>Stop</button>
        <button onClick={startDecrement}>Dec Button</button>
      </div>
    </>
  )
}

export default IntervalCounter;
