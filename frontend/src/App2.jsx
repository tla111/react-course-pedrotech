import React from 'react'
import './App.css'

const App2 = () => {
    const age = 17;
    let sentence;

    if (age >= 18) {
        sentence = <h1>Over Age</h1>
    } else {
        sentence = <h2>Under Age</h2>
    }

    return (
        <div className="App">
            {sentence}
        </div>
    )
}

export default App2