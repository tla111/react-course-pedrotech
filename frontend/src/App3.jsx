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
                    <User name={user.name} age={user.age} key={key} />
                )
            })}
        </div>
    )
}

const User = (props) => (
    <div key={props.key} style={{ display: "flex" }}>
        <h1>{props.name}</h1>
        <h1 style={{ marginLeft: "5px" }}>{props.age}</h1>
    </div>
)

export default App3