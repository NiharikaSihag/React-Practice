// Counter.jsx
import { useState } from 'react';

export default function MyCounter2() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1> {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
