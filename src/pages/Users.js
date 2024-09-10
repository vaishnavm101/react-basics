import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const divStyles = {
  border: '1px solid black',
  margin: '10px',
  padding: '10px',
  cursor: 'pointer'
}

const Users = () => {
  const navigate = useNavigate();
  const users = [
    { id: 1, name: "User 1", city: "User 1 city" },
    { id: 2, name: "User 2", city: "User 2 city" },
    { id: 3, name: "User 3", city: "User 3 city" },
  ]
  return (
    <>
      <h1>Users Page</h1>
      {users.map((user) => (
        <div>
          <div style={divStyles} onClick={() => navigate(`${user.id}`, {state: { data: user }})}> <h2>{user.name}</h2></div>
        </div>
      ))}
      <Outlet />
    </>
  )
}

export default Users