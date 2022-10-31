import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from "./Pages/Home"
import Menu from './Pages/Menu'
import Contact from './Pages/Contact'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const App10 = () => {
    const client = new QueryClient()
    return (
        <div className="App">
            <QueryClientProvider client={client}>
                <Router>
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/menu">Menu</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/menu" element={<Menu />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
                    </Routes>
                </Router>
            </QueryClientProvider>
        </div>
    )
}

export default App10