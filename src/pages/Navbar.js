import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <Link to='/'>Home</Link> <br />
            <Link to='/contact'>Contact</Link>
        </>
    )
}

export default Navbar