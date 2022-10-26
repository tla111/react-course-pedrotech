import React, { useState } from 'react'
import './App.css'


const App5 = () => {
    const [todoList, setTodoList] = useState([])
    const [newTask, setNewTask] = useState("")

    const handleChange = (e) => {
        setNewTask(e.target.value)
    }

    return (
        <div className="App">
            <div className="addTask">
                <input onChange={handleChange} />
                <button>Add Task</button>
                {newTask}
            </div>
            <div className="list">

            </div>
        </div>
    )
}

export default App5