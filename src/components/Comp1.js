import React from 'react'

const Comp1 = ({ value }) => {
    console.log("Comp1 rendered..");
    return (
        <>
            <h1>Comp1</h1>
            <h2>New Value : {value}</h2>
        </>
    )
}

export default React.memo(Comp1)