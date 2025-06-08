// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Slice/CounterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});