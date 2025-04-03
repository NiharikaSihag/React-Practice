import { useState } from "react";
function ParentComponent2() {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <ChildComponent count={count} setCount={setCount} />
        <ChildComponent count={count} setCount={setCount} />
      </div>
    );
  }
  
  function ChildComponent({ count, setCount }) {
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  }
export default ParentComponent2;  