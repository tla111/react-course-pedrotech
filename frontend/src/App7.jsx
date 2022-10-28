import React, { useState, useEffect } from 'react'
import './App.css'
import Axios from 'axios'

const App7 = () => {
    const [name, setName] = useState("")
    const fetchData = () => {
        Axios(`https://api.agify.io/?name=${name}`).then((res) => {
            console.log(res.data);
        })
    }

    useEffect(() => {

    }, [])


    return (
        <div className="App">
            <input placeholder="Ex. Pedro..." onChange={(e) => setName(e.target.value)} />
            <button onClick={fetchData}>Predict Age</button>

            <h1>Predicted Age:</h1>
        </div>
    )
}

export default App7