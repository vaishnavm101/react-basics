import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AdminProfile = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem("admin_token")
        navigate("/admin-login")
    }
    return (
        <>
            <button onClick={handleLogout}>Logout</button>
            <h1>Welcome to Admin Profile</h1>
        </>
    )
}

export default AdminProfile