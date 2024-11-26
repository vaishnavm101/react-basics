import React, { useState } from 'react'

const LoginTwo = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const url = "http://localhost:8000/user/login"
        const options = {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        }
        const response = await fetch(url, options)
        const data = await response.text()
        console.log("Data: ", data)

    }

    const handleGetProfile = async () => {
        const url = "http://localhost:8000/user/"
        const options = {
            method: "GET",
            credentials: "include"
        }
        const response = await fetch(url, options)
        const data = await response.text()

    }

    return (
        <>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                Enter Email: <input type="email" name="email" id="email"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email'
                /> <br /><br />
                Enter Password: <input type="password" name="password" id="password"
                    value={password} onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password'
                /> <br /> <br />
                <input type="submit" value="Login" />
            </form>
            <hr /><hr />
            <button onClick={handleGetProfile}>Get Profile</button>
        </>
    )
}

export default LoginTwo