import React from 'react'
import './App.css'
import Axios from 'axios'

const App7 = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
        console.log(res.data);
    })

    return (
        <div className="App">App7</div>
    )
}

export default App7