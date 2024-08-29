import React, { useState } from 'react'
import Comp11 from './components/Comp11'
// import "./style.css";

const App = () => {
    const [value, setValue] = useState(0);
    return (
        <>
            <h1>App</h1>
            <h2 style={{ color: 'red' }}>Value in App : {value}</h2>
            {/* <h2 style={{color: value % 2 == 0 ? 'green' : ''}}>Value in App : {value}</h2> */}
            <Comp11 value={value} />
            <button onClick={() => setValue(value + 1)}>Add Value</button>
        </>
    )
}

export default App