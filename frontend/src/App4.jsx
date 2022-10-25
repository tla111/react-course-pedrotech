import React, { useState } from 'react'
import './App.css'

const App4 = () => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        console.log(event.target.value);
    }

    return (
        <div className="App">
            <input type="text" onChange={handleInputChange} />
            {inputValue}
        </div>
    )
}

export default App4