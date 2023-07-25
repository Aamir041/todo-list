import "./TaskList.css"
const TaskList = ({task,deleteTask}) => {

    const removeTask = () =>{
        deleteTask(task.id);
    }

    return<>
    <div className="tasklist-container">
            <p className="tasklist-title">
                    {task.title}
            </p>
            <div className="tasklist-del-bttn-container">
                <button onClick={removeTask} className="tasklist-del-bttn">Delete</button>
            </div>
    </div>
    </>
}

export default TaskList;