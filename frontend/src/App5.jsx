import React, { useState } from 'react'
import './App.css'


const App5 = () => {
    const [todoList, setTodoList] = useState([])
    const [newTask, setNewTask] = useState("")

    const handleChange = (e) => {
        setNewTask(e.target.value)
    }

    const addTask = () => {
        const newTodoList = [...todoList, newTask]
        setTodoList(newTodoList)
    }

    console.log(todoList);

    return (
        <div className="App">
            <div className="addTask">
                <input onChange={handleChange} />
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className="list">

            </div>
        </div>
    )
}

export default App5