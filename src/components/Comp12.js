import React, { useContext } from 'react'
import { MyContext } from '../App'

const Comp12 = () => {
    const { value, setValue } = useContext(MyContext)
    console.log("Comp12 rendered");
    return (
        <>
            <h1>Comp12</h1>
            <h2>value: {value}</h2>
            <button onClick={() => setValue(value + 1)}>Increment value</button>
        </>
    )
}

export default Comp12