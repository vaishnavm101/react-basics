import React, { useRef, useState } from 'react'

const App = () => {
  const [name, setName] = useState('');
  const [newName, setNewName] = useState('')
  const inputRef = useRef();

  const handleClick = () => {
    setName(newName);
    setNewName('');
    inputRef.current.focus();
  }
  return (
    <>
      <h1>App</h1>
      <input type="text" placeholder='Enter name' ref={inputRef}
      value={newName} onChange={(e) => setNewName(e.target.value)}
       />

      <button onClick={handleClick}>Get Name</button>
      <h3>Name: {name}</h3>
    </>
  )
}

export default App