import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effect executed');
    return () => console.log('Cleanup');
  }, []);

  return (
    <>
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count+1)}> Increment</button>
    </div>
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
    </>
    
  );
}
export default App;
