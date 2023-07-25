import { useState } from 'react'
import './App.css'
import AddTask from './Components/AddTask/AddTask' 
import TaskList from './Components/TaskList/TaskList';
function App() {
  const [tasks,setTasks]  = useState([]);

  const addTask = (task) => {
    tasks ? setTasks(() => [...tasks,task]) : setTasks([task]);
  }

  const deleteTask = (id) => {
    let temp = tasks.filter((ele) => ele.id != id );
    setTasks([...temp]);
  }

  return (
    <>
      <div className='app'>
        <h1 className='heading'>To Do List</h1>
        <AddTask addTask={addTask}/>
        {tasks.length > 0
          ? tasks.map((ele) => <TaskList key={ele.id} task={ele} deleteTask={deleteTask}></TaskList>)
          : <div className='no-tasks'>No Tasks Added</div>
        }
      </div>
      
    </>
  )
}

export default App
