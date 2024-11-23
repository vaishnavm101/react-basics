import React, { useState } from 'react'

const Register = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:8000/user/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
                name: name
            })
        })
        // console.log("response: ", response)
        const data = await response.json()
        if (data.user) {
            setMessage("User registered successfully!")
        }
        else {
            setMessage(data.msg)
        }

    }
    return (
        <>
            <h1>Register Form</h1>
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
                Enter Name: <input type="text" name="name" id="name"
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                /><br /><br />
                <input type="submit" value="Register" />
            </form>

            <h3>{message}</h3>
        </>
    )
}

export default Register