import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Profile = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem("token")
        navigate("/login")
    }
    return (
        <>
            <h1>Welcome to profile</h1>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default Profile