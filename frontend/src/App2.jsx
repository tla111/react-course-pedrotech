import React from 'react'
import './App.css'

const App2 = () => {
    const age = 17;

    return (
        <div className="App">
            {age >= 18 ? <h1>Over Age</h1> : <h2>Under Age</h2>}
        </div>
    )
}

export default App2