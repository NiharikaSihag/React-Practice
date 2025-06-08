import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    task: [],
    nextId: 1
}
const ToDoSlice = createSlice({
    name: 'dolist',
    initialState,
    reducers:{
        addTask: (state, action) => {
            state.task.push({
                id: state.nextId,
                text: action.payload,
                completed: false

            });
            state.nextId+=1;
        } 
    } 
})

export const {addTask} = ToDoSlice.actions;
export const selectTask = (state) => state.dolist.task;
// export const selectHistory = (state) => state.counter.history;
export default ToDoSlice.reducer;