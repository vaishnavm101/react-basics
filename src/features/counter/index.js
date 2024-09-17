import { createSlice } from "@reduxjs/toolkit";


const defaultValue = { count: 0, name: "TestName" }
const counterSlice = createSlice({
    name: "counter",
    initialState: defaultValue,
    reducers: {
        increment: (state, action) => {
            console.log("increment called")
            // return { ...state, count: state.count + 1 }
            state.count = state.count + 1
        },
        decrement: (state, action) => {
            console.log("decrement called")
            // return { ...state, count: state.count - 1 }
            state.count -= 1
        },
        incrementByValue: (state, action) => {
            state.count += parseInt(action.payload)
        }
    }
})


// export const counterReducer = counterSlice.reducer
export default counterSlice.reducer

export const { increment, decrement, incrementByValue } = counterSlice.actions

// { increment: () => {return {type: 'counter/increment'}},  decrement: () => { return {type: 'counter/decrement'}}}