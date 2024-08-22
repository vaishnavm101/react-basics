import React, { useEffect } from 'react'

const Comp1 = () => {
    useEffect(() => {
        console.log("Initial render of comp1");
        return () => {
            console.log("Comp removed!");
        }
    })
    return (
        <h1>Comp1</h1>
    )
}

export default Comp1