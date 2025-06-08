import { useState } from "react";

export default function ControlledInput() {
  const [value, setValue] = useState('');
  
  return (
    <input 
      type="text"
      value={value} 
      onChange={(e) => setValue(e.target.value)} 
    />
  );
}