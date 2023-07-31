import { useActionData } from "react-router-dom";
import "./EditTask.css"
import { useState } from "react";

const EditTask = ({setEditPane,prevTask,changeTask}) => {

    const [newTask,setNewTask] = useState(prevTask);

    const addEdit = () => {
        changeTask(newTask);
        setEditPane(false);
    }

    return(
        <div className="edit-task">
            
            <button
            className="edit-task-close-bttn"
            onClick={() => setEditPane(false)}
            > 
            X 
            </button>
            
            <div className="edit-task-feilds">
            
            <input
            onChange={(e) => setNewTask(e.target.value)}
            className="edit-task-input" 
            value={newTask} 
            type="text"
            />

            <button 
            className="edit-task-confirm"
            onClick={addEdit}
            >
                Confirm
            </button>
            </div>
        </div>
    )
}

export default EditTask;