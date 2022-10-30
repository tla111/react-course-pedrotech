import React, { useState } from 'react'

const ChangeProfile = ({ setUsername }) => {
    const [newUsername, setNewUsername] = useState("")
    return (
        <div>
            <input onChange={(e) => setNewUsername(e.target.value)} />
            <button onClick={() => { setUsername(newUsername) }}>Change Username</button>
        </div>
    )
}

export default ChangeProfile