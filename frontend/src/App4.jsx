import React, { useState } from 'react'
import './App.css'

const App4 = () => {
    const [textColor, setTextColor] = useState("red")

    return (
        <div className="App">
            <button onClick={() => setTextColor(textColor === "black" ? "red" : "black")}>Show/Hide</button>
            <h1 style={{ color: textColor }}>HI MY NAME IS PEDRO</h1>
        </div>
    )
}

export default App4