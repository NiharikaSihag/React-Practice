import { useState } from "react";
function ChildComponent() {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  }
  
  function ParentComponent() {
    return (
      <div>
        <ChildComponent />
        <ChildComponent />
      </div>
    );
  }
export default ParentComponent;  