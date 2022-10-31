import React from 'react'

const Form = () => {
    return (
        <form style={{ display: "flex", flexDirection: "column" }}>
            <input type="text" placeholder="Full Name..." />
            <input type="text" placeholder="Email..." />
            <input type="text" placeholder="Age..." />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password..." />
            <input type="submit" />
        </form>
    )
}

export default Form