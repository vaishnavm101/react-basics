import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Contact = () => {
    console.log("Contact rendered");
    return (
        <>
            <h1>Contact Page</h1>
            <Link to="form">Contact form</Link> <br />
            <Link to="details">Contact details</Link>
            <Outlet />
        </>
    )
}

export default Contact