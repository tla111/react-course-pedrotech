import React from 'react'
import './App.css'

const App2 = () => {
    const age = 17;
    const isTrue = false;

    return (
        <div className="App">
            {age >= 18 ? <h1>Over Age</h1> : <h2>Under Age</h2>}
            <h1 style={{ color: isTrue ? "red" : "blue" }}>Color</h1>
            {isTrue && <button>Button</button>}
            {!isTrue && <button>Button</button>}
        </div>
    )
}

export default App2