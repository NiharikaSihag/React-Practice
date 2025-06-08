import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
  clearHistory,
  selectCount,
  selectHistory,
} from './CounterSlice';
// import './Counter.css';

export function Counter() {
  const count = useSelector(selectCount);
  const history = useSelector(selectHistory);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className="counter">
        <button
          className="button"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className="value">{count}</span>
        <button
          className="button"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className="row">
        <input
          className="textbox"
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className="button"
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className="button"
          onClick={() => dispatch(clearHistory())}
        >
          Clear History
        </button>
      </div>
      
      <div className="history">
        <h3>History</h3>
        <ul>
          {history.map((entry, index) => (
            <li key={index}>
              {entry.type === 'increment' && '➕ Incremented to '}
              {entry.type === 'decrement' && '➖ Decremented to '}
              {entry.type === 'incrementByAmount' && `➕ Added ${entry.amount} to reach `}
              <strong>{entry.value}</strong> at {new Date(entry.timestamp).toLocaleTimeString()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}