import React, { useState } from 'react'
import Comp1 from './components/Comp1'

const App = () => {
    const [value, setValue] = useState(0);
    const [value2, setValue2 ] = useState(0);
    return (
        <>
            <h1>App</h1>
            <Comp1 value={value}/>
            <h3>Value: {value}</h3>
            <button onClick={() => setValue(value + 1)}>Increment</button>
            <hr />
            {/* <h3>Value2: {value2}</h3>
            <button onClick={() => setValue2(value2 + 1)}>Inc value2</button> */}
        </>
    )
}

export default App