import React, { useState } from 'react'
import './App.css'

const App4 = () => {
    const [showText, setShowText] = useState(true);

    return (
        <div className="App">
            <button>Show/Hide</button>
            <h1>HI MY NAME IS PEDRO</h1>
        </div>
    )
}

export default App4