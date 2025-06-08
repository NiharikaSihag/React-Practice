import { useCallback, useEffect, useState } from "react";

export default function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const generatePass = useCallback(() => {
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) chars += '0123456789';
    if (includeSymbols) chars += '!@#$%^&*()_+';

    let pass = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      pass += chars[randomIndex];
    }

    setPassword(pass);
  }, [length, includeNumbers, includeSymbols]);

  useEffect(() => {
    generatePass();
  }, [length, includeNumbers, includeSymbols]);

  return (
    <>
      <h3>Password Generator</h3>
      <input type="text" value={password} placeholder="Password" readOnly />
      
      <div>
        <input
          type="range"
          min={6}
          max={20}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />
        <label>Length: {length}</label>
      </div>
      
      <div>
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={() => setIncludeNumbers(prev => !prev)}
        />
        <label>Include Numbers</label>
      </div>

      <div>
        <input
          type="checkbox"
          checked={includeSymbols}
          onChange={() => setIncludeSymbols(prev => !prev)}
        />
        <label>Include Symbols</label>
      </div>
    </>
  );
}
