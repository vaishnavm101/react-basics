import React, { useMemo, useState } from 'react'

const App = () => {
  const [arr, setArr] = useState([])
  const [newValue, setNewValue] = useState('')

  const [value2, setValue2] = useState(0);
  const handleClick = () => {
    setArr([...arr, parseInt(newValue)])
    setNewValue('')
  }
  const getSum = useMemo(() => {
    console.log("Calculation total...");
    return arr.reduce((acc, nxt) => acc + nxt, 0);
  }, [arr])

  return (
    <>
      <h1>App</h1>
      <h2>{JSON.stringify(arr)}</h2>
      <input type="text" value={newValue} onChange={(e) => setNewValue(e.target.value)} />
      <button onClick={handleClick}>Add Value</button>
      <hr />
      <h2>Total of Arr: {getSum}</h2>
      <hr />
      <h2>Value2 : {value2}</h2>
      <button onClick={() => setValue2(value2 + 1)}>Increment value2</button>

    </>
  )
}

export default App