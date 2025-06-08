import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  history: []
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      state.history.push({ type: 'increment', value: state.value, timestamp: new Date().toISOString() });
    },
    decrement: (state) => {
      state.value -= 1;
      state.history.push({ type: 'decrement', value: state.value, timestamp: new Date().toISOString() });
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
      state.history.push({ type: 'incrementByAmount', amount: action.payload, value: state.value, timestamp: new Date().toISOString() });
    },
    clearHistory: (state) => {
      state.history = [];
    }
  },
});

export const { increment, decrement, incrementByAmount, clearHistory } = counterSlice.actions;

// Selectors
export const selectCount = (state) => state.counter.value;
export const selectHistory = (state) => state.counter.history;

export default counterSlice.reducer;