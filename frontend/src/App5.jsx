import React, { useState } from 'react'
import './App.css'


const App5 = () => {
    const [todoList, setTodoList] = useState([])
    const [newTask, setNewTask] = useState("")

    const handleChange = (e) => {
        setNewTask(e.target.value)
    }

    const addTask = () => {
        setTodoList([...todoList, newTask])
    }

    console.log(todoList);

    return (
        <div className="App">
            <div className="addTask">
                <input onChange={handleChange} />
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className="list">
                {todoList.map((task) => (
                    <h1>{task}</h1>
                ))}
            </div>
        </div>
    )
}

export default App5