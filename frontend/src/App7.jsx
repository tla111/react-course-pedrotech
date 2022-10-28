import React, { useState } from 'react'
import './App.css'
import Axios from 'axios'

const App7 = () => {
    const [catFact, setCatFact] = useState("")

    Axios.get("https://catfact.ninja/fact").then((res) => {
        setCatFact(res.data.fact);
    })

    return (
        <div className="App">
            <button>Generate Cat Fact</button>
            <p>{catFact}</p>
        </div>
    )
}

export default App7