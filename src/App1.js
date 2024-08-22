import { useState } from "react";
import './App.css';
// import MyComp1 from "./components/MyComp1";
import MyComp1 from "./components/MyComp1";


function App() {


  const [arr, setArr] = useState([]);

  const [obj, setObj] = useState({ name: "TestName", marks: [88, 89, 76] });



  const [list, setList] = useState([]);

  const [inputValue, setInputValue] = useState("");



  // const [obj, setObj] = useState({ name: "Jagjit", city: "CH", marks: [89, 92, 97] })
  // const [newValue, setNewValue] = useState("");
  function buttonClicked() {
    console.log("Button clicked!");

  }

  const handleAddValue = () => {
    // setList([...list, newValue])
    // setObj({ ...obj, city: newValue })
    // setObj({...obj, marks: [...obj.marks, parseInt(newValue)]})
    // setNewValue("");
  }

  const addValue = () => {
    // setArr([...arr, 100])
    // setObj({ marks: parseInt(inputValue) })
    setObj({ ...obj, marks: [...obj.marks, parseInt(inputValue)] })
  }

  const handleChange = (event) => {
    // console.log("event: ", event)
    setInputValue(event.target.value);
  }

  const insertValue = () => {
    setArr([...arr, parseInt(inputValue)])
  }

  return (
    <>
      <h1>App</h1>
      <h4>{JSON.stringify(obj)}</h4>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={addValue}>Add Mark</button>
      {/* <h4>{arr}</h4> */}
      {/* <h4>{JSON.stringify(arr)}</h4> */}
      {/* <input type="text" placeholder="Add marks" value={newValue} onChange={(e) => setNewValue(e.target.value)} />
      <button onClick={handleAddValue}>Add</button> */}
      {/* <h2>List: {JSON.stringify(list)}</h2>
      <h3>Enter new List Value</h3>
     */}
    </>
  )
}

export default App;