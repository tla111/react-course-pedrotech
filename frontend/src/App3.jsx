import React from 'react'
import './App.css'
import { User } from './Components/User'


const App3 = () => {
    // const names = ["Pedro", "Jake", "Jessica", "Mike", "Dustin", "Luke"]
    const users = [
        { name: "Pedro", age: 21, status: true },
        { name: "Jake", age: 25, status: false },
        { name: "Jessica", age: 45, status: true },
    ]


    return (
        <div className="App">
            {users.map((user, key) => {
                return (
                    user.status && <User name={user.name} age={user.age} key={key} />
                )
            })}
        </div>
    )
}

export default App3