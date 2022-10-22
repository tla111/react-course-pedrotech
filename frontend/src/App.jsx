import React from 'react'
import './App.css'

const App = () => {

  return (
    <div className="App">
      <UserOne />
      <UserOne />
      <UserOne />
    </div>
  )
}

const UserOne = () => {
  return (
    <div>
      <h1>Pedro</h1>
      <h1>21</h1>
      <h1>PedroTech@gmail.com</h1>
    </div>
  )
}


export default App