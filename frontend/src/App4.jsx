import React, { useState } from 'react'
import './App.css'

const App4 = () => {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <button>Increase</button>
            <button>Decrease</button>
            <button>Set to Zero</button>
            {count}
        </div>
    )
}

export default App4