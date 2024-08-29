import React from 'react'
import useCounter from '../hooks/useCounter'

const Comp2 = () => {
    const {count, setCount} = useCounter(10);
    return (
        <>
            <h1>Comp1</h1>
            <h2>Value: {count}</h2>
            <button onClick={() => setCount(count + 10)}>Inc  by 10</button>
        </>
    )
}

export default Comp2