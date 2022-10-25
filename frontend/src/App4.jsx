import React, { useState } from 'react'
import './App.css'

const App4 = () => {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <button onClick={() => { setCount(count + 1) }}>Increase</button>
            <button onClick={() => { setCount(count - 1) }}>Decrease</button>
            <button onClick={() => { }}>Set to Zero</button>
            {count}
        </div>
    )
}

export default App4