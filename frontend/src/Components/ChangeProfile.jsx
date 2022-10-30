import React, { useState, useContext } from 'react'
import { AppContext } from '../App9'

const ChangeProfile = () => {
    const [newUsername, setNewUsername] = useState("")
    const { setUsername } = useContext(AppContext)
    return (
        <div>
            <input onChange={(e) => setNewUsername(e.target.value)} />
            <button onClick={() => { setUsername(newUsername) }}>Change Username</button>
        </div>
    )
}

export default ChangeProfile