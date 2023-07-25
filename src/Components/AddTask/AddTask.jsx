import { useEffect, useState } from "react";
import "./AddTask.css"
const AddTask = ({addTask}) => {

    const [task,setTask] = useState(null);
    
    const submitTask = (e) => {
        e.preventDefault();
        if(!task) {
            alert("Not Added Any task");
            return ;
        }
        let value = {
            id: (Math.round(10000*Math.random())),
            title: task
        }
        addTask(value);
        setTask(null);
    }

    return <>
    <form>
        <div className="addtask-container">
            <input onChange={(e) => setTask(e.target.value)} type="text" placeholder="Enter Task" />
            <button onClick={submitTask}
            className="addtask-button">Add Task</button>
        </div>
    </form>
    </>
}

export default AddTask;