import React from 'react'
import './App.css'

fetch("https://catfact.ninja/fact")
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
    })

const App7 = () => {
    return (
        <div className="App">App7</div>
    )
}

export default App7