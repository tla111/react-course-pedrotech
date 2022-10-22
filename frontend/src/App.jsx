import React from 'react'
import './App.css'

const App = () => {

  return (
    <div className="App">
      <User name="Pedro" age={21} email="PedroTech@gmail.com" />
      <User name="Tim" age={29} email="TimLa@gmail.com" />
      <Job />
    </div>
  )
}

const User = ({ name, age, email }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{email}</h1>
    </div>
  )
}

const Job = () => {
  return (
    <div>
      Job
    </div>
  )
}


export default App