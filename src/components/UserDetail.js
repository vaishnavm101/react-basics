import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const UserDetail = () => {
    // const {id} = useParams();
    console.log(useLocation())

    return (
        <>
            <h1>User Detail</h1>
        </>
    )
}

export default UserDetail