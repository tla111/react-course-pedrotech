import React from 'react'
import './App.css'

const App4 = () => {
    let age = 0;

    const increaseAge = () => {
        age = age + 1;
        console.log(age);
    }
    return (
        <div className="App">
            {age}
            <button onClick={increaseAge}>Increase Age</button>
        </div>
    )
}

export default App4