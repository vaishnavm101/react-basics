import React, { useEffect, useState } from 'react'

const App = () => {
    const [value, setValue] = useState(0);
    useEffect(() => {
        console.log("Component rendered!");
    }, [])


    useEffect(() => {
        console.log("Value changed: ", value);
        return () => {
            console.log("Return of value useEffect value: ", value);
        }
    }, [value])
    return (
        <>
            <h1>App</h1>
            <h2>Value: {value}</h2>
            <button onClick={() => setValue(value + 1)}>Inc</button>
        </>
    )
}

export default App