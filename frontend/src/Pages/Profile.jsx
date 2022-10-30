import React, { useContext } from 'react'
import ChangeProfile from '../Components/ChangeProfile'
import { AppContext } from '../App9'


const Profile = () => {
    const { username, setUsername } = useContext(AppContext)
    return (
        <div>
            <h1>Profile, user is: {username} </h1>
            <ChangeProfile setUsername={setUsername} />
        </div>
    )
}

export default Profile