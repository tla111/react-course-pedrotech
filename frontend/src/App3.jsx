import React from 'react'
import './App.css'


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
                    <div key={key} style={{ display: "flex" }}>
                        <h1>{user.name}</h1>
                        <h1 style={{ marginLeft: "5px" }}>{user.age}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default App3