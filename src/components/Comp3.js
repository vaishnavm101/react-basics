import React from 'react'

const Comp3 = ({ value, handleIncrement }) => {
    console.log("Comp3 rendered");
    return (
        <>
            <h2>Comp3</h2>
            <h4>Value inside Comp3 : {value}</h4>
            <button onClick={handleIncrement}>Increment from Comp3</button>
        </>
    )
}

export default React.memo(Comp3)