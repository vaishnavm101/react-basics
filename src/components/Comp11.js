import React from 'react'
import Comp12 from './Comp12'

const Comp11 = ({ value }) => {
    console.log("Comp11 rendered");
    return (
        <>
            <h1>Comp11</h1>
            <Comp12 value={value} />
        </>
    )
}

export default Comp11