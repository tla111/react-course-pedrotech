import React, { useState, useEffect } from 'react'
import './App.css'
import Axios from 'axios'

const App7 = () => {
    const [name, setName] = useState("")
    const [predictedAge, setPredictedAge] = useState(null)
    const fetchData = () => {
        Axios(`https://api.agify.io/?name=${name}`).then((res) => {
            setPredictedAge(res.data)
        })
    }

    useEffect(() => {

    }, [])


    return (
        <div className="App">
            <input placeholder="Ex. Pedro..." onChange={(e) => setName(e.target.value)} />
            <button onClick={fetchData}>Predict Age</button>

            <h1>Name: {predictedAge?.name}</h1>
            <h1>Predicted Age: {predictedAge?.age}</h1>
            <h1>Count: {predictedAge?.count}</h1>
        </div>
    )
}

export default App7