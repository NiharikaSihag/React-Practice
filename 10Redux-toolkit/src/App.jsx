import React from 'react';
import './App.css';
import { Counter } from './Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux Counter with History</h1>
        <Counter />
      </header>
    </div>
  );
}

export default App;