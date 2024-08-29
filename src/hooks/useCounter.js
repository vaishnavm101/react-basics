import React, { useEffect, useState } from 'react'

const useCounter = (initValue) => {
    const [count, setCount] = useState(initValue);
    // return { count, setCount }
    return {count: count, setCount: setCount}
}

export default useCounter