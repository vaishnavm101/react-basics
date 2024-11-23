import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AdminProfile = () => {
    const navigate = useNavigate()
    const [admin, setAdmin] = useState({ email: "" })
    const handleLogout = () => {
        localStorage.removeItem("admin_token")
        navigate("/admin-login")
    }
    const fetchAdminInfo = async () => {
        const url = "http://localhost:8000/admin/get-info"
        const adminToken = localStorage.getItem("admin_token")
        const options = {
            method: "GET",
            headers: {
                "token": adminToken
            }
        }
        const response = await fetch(url, options)
        const data = await response.json()
        console.log("Data: ", data)
        if (data.admin) {
            setAdmin({ email: data.admin.email })
        }
    }
    useEffect(() => {
        fetchAdminInfo()
    }, [])

    return (
        <>
            <button onClick={handleLogout}>Logout</button>
            <h1>Welcome back {admin.email}</h1>
        </>
    )
}

export default AdminProfile