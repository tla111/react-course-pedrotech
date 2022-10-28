import React, { useState, useEffect } from 'react'
import './App.css'
import Axios from 'axios'

const App7 = () => {
    const [name, setName] = useState("")
    const [prediction, setPrediction] = useState(null)

    const fetchData = () => {
        Axios(`https://api.agify.io/?name=${name}`).then((res) => {
            setPrediction(res.data)
        })
    }

    useEffect(() => {

    }, [])


    return (
        <div className="App">
            <input placeholder="Ex. Pedro..." onChange={(e) => setName(e.target.value)} />
            <button onClick={fetchData}>Predict Age</button>
            <Person name={prediction?.name} age={prediction?.age} count={prediction?.count} />
            <Person name={prediction?.name} age={prediction?.age} count={prediction?.count} />
        </div>
    )
}

const Person = ({ name, age, count }) => {
    return (
        <div>
            <h1>Name: {name} </h1>
            <h1>Predicted Age: {age}</h1>
            <h1>Count: {count}</h1>
        </div>
    )
}

export default App7