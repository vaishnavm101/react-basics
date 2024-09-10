import { createContext, useContext, useState } from "react";

export const MyContext = createContext()

export const useMyContext = () => useContext(MyContext);

const MyContextProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    return (
        <MyContext.Provider value={{ count: count }}>
            {children}
        </MyContext.Provider>
    )
}

export default MyContextProvider