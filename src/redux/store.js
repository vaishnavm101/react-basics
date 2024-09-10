import { createStore } from "@reduxjs/toolkit";


const defaultState = { count: 100 }
const reducer = (state = defaultState, action) => {
    if (action.type == "increment") {
        return { count: state.count + 1 }
    }
    else{
        return state;
    }
}

export const store = createStore(reducer)