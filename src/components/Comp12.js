import React from 'react'

const Comp12 = ({ value }) => {
    console.log("Comp12 rendered");
    return (
        <>
            <h1>Comp12</h1>
            <h2>Value in Comp12 : {value}</h2>
        </>
    )
}

export default Comp12