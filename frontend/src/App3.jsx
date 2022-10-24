import React from 'react'
import './App.css'
import { User } from './Components/User'


const App3 = () => {
    // const names = ["Pedro", "Jake", "Jessica", "Mike", "Dustin", "Luke"]
    const users = [
        { name: "Pedro", age: 21 },
        { name: "Jake", age: 25 },
        { name: "Jessica", age: 45 },
    ]


    return (
        <div className="App">
            {users.map((user, key) => {
                return (
                    <User name={user.name} age={user.age} key={key} />
                )
            })}
        </div>
    )
}

export default App3