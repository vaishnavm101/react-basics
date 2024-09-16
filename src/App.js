import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './features/counter';
import { produce } from 'immer';
// import { decrement, increment } from './features/counter';
// import { decrement, increment, incrementByValue } from './redux/actions';


const App = () => {
    const { count, name } = useSelector((state) => state.counter)
    const dispatch = useDispatch();
    const inputRef = useRef();

    let [obj, setObj] = useState({ name: "TestName", marks: [80, 90, 87], city: "TestCity" })

    const handleClick = () => {
        setObj({ ...obj, city: "New CIty" })
        const newObj = produce(obj, (draft) => {
            draft.city = "New City"
        })
        setObj(newObj)
    }

    return (
        <>
            <h1>App</h1>
            <h2>Count: {count}</h2>
            <h3>Name: {name}</h3>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <hr />

            <h3>{JSON.stringify(obj)}</h3>
            <button onClick={handleClick}>Change City</button>

            {/* <button onClick={() => console.log(increment(100))}>Check</button> */}
            {/* <h2>Users: {users}</h2> */}


            {/* <hr />
            <input type="text" ref={inputRef} placeholder='Enter User name' />
            <button onClick={() => dispatch({ type: "users/add_user", payload: inputRef.current.value })}>Add User</button> */}
            {/* 
            <button onClick={handleIncByValue}>Increment by Value</button> */}
        </>
    )
}

export default App