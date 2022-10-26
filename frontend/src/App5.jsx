import React, { useState } from 'react'
import './App.css'


const App5 = () => {
    const [todoList, setTodoList] = useState([])
    const [newTask, setNewTask] = useState("")

    const handleChange = (e) => {
        setNewTask(e.target.value)
    }

    const addTask = () => {
        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            taskName: newTask
        }
        setTodoList([...todoList, task])
    }

    const deleteTask = (id) => {
        setTodoList(todoList.filter((task) => task.id !== id))
    }

    return (
        <div className="App">
            <div className="addTask">
                <input onChange={handleChange} />
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className="list">
                {todoList.map((task) => (
                    <Task taskName={task.taskName} id={task.id} deleteTask={deleteTask} />
                ))}
            </div>
        </div>
    )
}

const Task = (props) => {
    return (
        <div>
            <h1>{props.taskName}</h1>
            <button onClick={() => props.deleteTask(props.id)}>X</button>
        </div>
    )
}

export default App5