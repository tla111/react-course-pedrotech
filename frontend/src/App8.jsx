import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home"
import Menu from './Pages/Menu'
import Contact from './Pages/Contact'

const App8 = () => {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
                </Routes>
            </Router>
        </div>
    )
}

export default App8