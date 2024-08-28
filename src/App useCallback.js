import React, { useCallback, useState } from 'react'
import Comp3 from './components/Comp3';

const App = () => {
    const [value, setValue] = useState(0);
    const [value2, setValue2] = useState(0);

    const handleIncrement = useCallback(() => {
        // setValue(value + 1);
        setValue(preValue => preValue + 1)
    }, [])

    return (
        <>
            <h1>App</h1>
            <h2>Value: {value}</h2>
            <button onClick={handleIncrement}>Inc</button>
            <Comp3 value={value} handleIncrement={handleIncrement} />
            <hr />
            <h3>Value2: {value2}</h3>
            <button onClick={() => setValue2(value2 + 1)}>Increment Value 2</button>
        </>
    )
}

export default App