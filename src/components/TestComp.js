import React, { useEffect } from 'react'

const TestComp = () => {
    useEffect(() => {
        console.log("TesComp Intilized..!");
        return () => {
            console.log("TestComp Un-Mounted!");
        }
    }, [])
    return (
        <>
            <h1>Test Comp</h1>
        </>
    )
}

export default TestComp