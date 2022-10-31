import React from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {
    const { register, handleSubmit } = useForm()

    const onSubmit = () => {
        console.log("Hello World");
    }
    return (
        <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit(onSubmit)}>
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