import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <h1>Welcome to App</h1>
            <Link to='/login'>Login</Link> <br /><br />
            <Link to='/register'>Register</Link><br /><br />
            <hr />
            <Link to='/admin-login'>Admin Login</Link><br /><br />
            
        </>
    )
}

export default Home