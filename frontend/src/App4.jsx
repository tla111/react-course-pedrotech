import React, { useState } from 'react'
import './App.css'

const App4 = () => {
    const [inputValue, setInputValue] = useState("")

    return (
        <div className="App">
            <input type="text" />
            {inputValue}
        </div>
    )
}

export default App4