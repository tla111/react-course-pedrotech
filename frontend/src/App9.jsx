import React, { useState, createContext } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from "./Pages/Home"
import Profile from './Pages/Profile'
import Contact from './Pages/Contact'

export const AppContext = createContext()

const App9 = () => {
    const [username, setUsername] = useState("Tim")
    return (
        <div className="App">
            <AppContext.Provider value={{ username, setUsername }}>
                <Router>
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/profile">Profile</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
                    </Routes>
                </Router>
            </AppContext.Provider>
        </div>
    )
}

export default App9