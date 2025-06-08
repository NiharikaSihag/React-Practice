import { configureStore } from "@reduxjs/toolkit";
import ToDoReducer from './ToDoSlice'
const store = configureStore({
    reducer: {
        ToDo: ToDoReducer
    }
}
)
export default store;