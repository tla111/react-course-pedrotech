import React from 'react'
import ChangeProfile from '../Components/ChangeProfile'

const Profile = ({ username, setUsername }) => {
    return (
        <div>
            <h1>Profile, user is: {username} </h1>
            <ChangeProfile setUsername={setUsername} />
        </div>
    )
}

export default Profile