import React, { useState } from 'react'
import './App.css'

const App4 = () => {
    const [showText, setShowText] = useState(false);

    return (
        <div className="App">
            <button onClick={() => setShowText(!showText)}>Show/Hide</button>
            {showText && <h1>HI MY NAME IS PEDRO</h1>}
        </div>
    )
}

export default App4