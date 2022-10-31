import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const Form = () => {
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Full Name..." {...register("fullName")} />
            <input type="text" placeholder="Email..." {...register("email")} />
            <input type="number" placeholder="Age..."{...register("age")} />
            <input type="password" placeholder="Password" {...register("password")} />
            <input type="password" placeholder="Confirm Password..." {...register("confirmPassword")} />
            <input type="submit" />
        </form>
    )
}

export default Form