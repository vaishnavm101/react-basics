import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminAuth = ({ children }) => {
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem("admin_token")) {
            navigate('/admin-login')
        }
    }, [])
    return localStorage.getItem("admin_token") ? children : null

}

export default AdminAuth