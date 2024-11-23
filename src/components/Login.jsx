import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const url = "http://localhost:8000/user/login"
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }
        const response = await fetch(url, options)
        const data = await response.json()
        // console.log("Data: ", data)
        if (data.token) {
            localStorage.setItem("token", data.token)
            navigate("/profile")
        }
        else{
            setMessage(data.msg)
        }
    }
    return (
        <>
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit}>
                Enter Email:
                <input type="email" name="email" id="email"
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /> <br /><br />
                Enter Password: <input type="password" name="password" id="password"
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /><br /><br />
                <input type="submit" value="Login" />
            </form>
            <h3>{message}</h3>
        </>
    )
}

export default Login