import { useState } from 'react'
import './App.css'

function App() {
  let [counter, updateCount] = useState(0);
 
  // let counter = 10;
  return (
    <>
    
      <h1>Vite + React</h1>
      <h3>Count = {counter}</h3>
      <div className="card">
        <button onClick={() =>updateCount(counter+1)}>
          Inc Button
        </button>
        <button onClick={() => updateCount(counter-1)} >
          Dec Button
        </button>
      </div>
   
    </>
  )
}

export default App
