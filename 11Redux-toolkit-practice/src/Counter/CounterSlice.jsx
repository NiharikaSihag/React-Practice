import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    history: []
}
export const CounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incrementValue: (state) => {
            state.value++;
            state.history.push('Added 1 to count')
        },
        decrementValue: (state) =>{
            state.value--;
            state.history.push('Removed 1 from count')
        }
    }
})
export const {incrementValue, decrementValue} = CounterSlice.actions;
export const selectCount = (state) => state.counter.value;
export const selectHistory = (state) => state.counter.history;
export default CounterSlice.reducer;