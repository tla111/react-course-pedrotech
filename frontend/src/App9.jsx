import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from "./Pages/Home"
import Profile from './Pages/Profile'
import Contact from './Pages/Contact'

const App9 = () => {
    const [username, setUsername] = useState("Pedro")
    return (
        <div className="App">
            <Router>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <Routes>
                    <Route path="/" element={<Home username={username} />} />
                    <Route path="/profile" element={<Profile username={username} />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
                </Routes>
            </Router>
        </div>
    )
}

export default App9