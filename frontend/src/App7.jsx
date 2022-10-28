import React, { useState, useEffect } from 'react'
import './App.css'
import Axios from 'axios'

const App7 = () => {

    useEffect(() => {

    }, [])


    return (
        <div className="App">
            <input placeholder="Ex. Pedro..." />
            <button>Predict Age</button>

            <h1>Predicted Age:</h1>
        </div>
    )
}

export default App7