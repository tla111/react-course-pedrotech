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
            taskName: newTask,
            completed: false
        }
        setTodoList([...todoList, task])
    }

    const deleteTask = (id) => {
        setTodoList(todoList.filter((task) => task.id !== id))
    }

    const completeTask = (id) => {
        setTodoList(todoList.map((task) => {
            if (task.id === id) {
                return { ...task, completed: true };
            } else {
                return task;
            }
        }))
    }

    return (
        <div className="App">
            <div className="addTask">
                <input onChange={handleChange} />
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className="list">
                {todoList.map((task) => (
                    <Task key={task.id} taskName={task.taskName} id={task.id} completed={task.completed} deleteTask={deleteTask} completeTask={completeTask} />
                ))}
            </div>
        </div>
    )
}

const Task = ({ taskName, id, deleteTask, completeTask, completed }) => {
    return (
        <div>
            <h1 style={{ backgroundColor: completed ? "dodgerblue" : "" }}>{taskName}</h1>
            <button onClick={() => completeTask(id)}>Complete</button>
            <button onClick={() => deleteTask(id)}>X</button>
        </div>
    )
}

export default App5