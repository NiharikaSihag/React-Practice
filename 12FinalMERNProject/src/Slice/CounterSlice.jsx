import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    count: 0
}
const CounterSlice = createSlice({
    name: 'Counter',
    initialState,
    reducers: {
        incrementValue: (state) => {
            state.count++;
        },
        decrementValue: (state) => {
            state.count--;
        }
    }
})

export const {incrementValue, decrementValue} = CounterSlice.actions ;
export const selectCount = (state) => state.counter.count;
export default CounterSlice.reducer;