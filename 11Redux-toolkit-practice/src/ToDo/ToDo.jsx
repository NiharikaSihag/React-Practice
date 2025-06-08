import { useDispatch, useSelector } from "react-redux";
import { addTask, selectTask } from "./ToDoSlice";
function ToDO(){
    const tasks = useSelector(selectTask)
    console.log(tasks)
    const dispatch = useDispatch();
    return (
        <>
        <h2>To Do List</h2>
        <input placeholder="Add Task" type="text" />
        <button onClick={() => dispatch(addTask('Tssk added'))}>Add Task</button>
        <button>Remove Task</button>
        <button>Mark as done</button>

        <div>
            {tasks.length === 0 ? (
                <p>No task avai;abel</p>
             ):(
                tasks.map (task =>{
                    {task.text}
                })
            )}
        </div>
        </>
    )
}
export default ToDO;