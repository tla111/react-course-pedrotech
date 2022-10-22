import React from 'react'
import './App.css'

const App = () => {
  const name = "Tim"
  const greeting = <h1>{`Hello ${name}`}</h1>
  return (
    <div className="App">
      {greeting}
      {greeting}
      {greeting}
    </div>
  )
}

export default App