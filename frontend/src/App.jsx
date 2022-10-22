import React from 'react'
import './App.css'

const App = () => {

  return (
    <div className="App">
      <UserOne name="Pedro" age={21} email="PedroTech@gmail.com" />
    </div>
  )
}

const UserOne = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </div>
  )
}


export default App