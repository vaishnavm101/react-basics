import React, { useRef, useState } from 'react'

const App = () => {
  const ref1 = useRef(0);
  const [value1, setValue1] = useState(0);
  const handleClick = () => {
    ref1.current += 1;
    console.log("ref1.current: ", ref1.current);
  }
  return (
    <>
      <h1>App</h1>
      <h2>Current: {ref1.current}</h2>
      <button onClick={handleClick}>Increment</button>

      <hr />
      <h3>Value : {value1}</h3>
      <button onClick={() => setValue1(value1 + 1)}>Inc Value</button>
    </>
  )
}

export default App