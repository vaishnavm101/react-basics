import React, { createContext, useState } from 'react'
import Comp11 from './components/Comp11';


// Creating a context....
export const MyContext = createContext();

const App = () => {
    const [value, setValue] = useState(100);
    console.log("App rendered");
    return (
        <MyContext.Provider value={{ value, setValue }}>
            <h1>App</h1>
            <h2>Value in App: {value}</h2>
            <Comp11 />
        </MyContext.Provider>

    )
}

export default App