import { useState, useEffect } from 'react'
import './App.css'

const App6 = () => {
    const [text, setText] = useState("")

    useEffect(() => {
        console.log("State Changed");
    }, [])

    return (
        <div className="App">
            <input
                onChange={(e) => {
                    setText(e.target.value)
                }}
            />
            <h1>{text}</h1>
        </div>
    )
}

export default App6