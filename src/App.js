import React from 'react'
import { useSelector } from 'react-redux'


const App = () => {
    const { count } = useSelector((state) => state)
    return (
        <>
            <h1>App</h1>
            <h2>Count: {count}</h2>
        </>
    )
}

export default App