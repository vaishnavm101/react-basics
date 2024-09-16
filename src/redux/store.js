import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit"
import { DECREMENT, INCREMENT, INCREMENT_BY_VALUE } from "./actions";
// import { counterReducer } from "../features/counter";
import counterReducer from "../features/counter";

// const initialState = { count: 100 }

// const counterReducer = (state = initialState, action) => {
//     if (action.type === INCREMENT) {
//         // Increment code....
//         //  console.log(state);
//         // console.log("Increment action is dipatched!!");
//         return { count: state.count + 1 }
//     }
//     else if (action.type === DECREMENT) {
//         // Decrement code....
//         return { count: state.count - 1 }
//     }
//     else if (action.type === INCREMENT_BY_VALUE) {
//         return { count: state.count + action.payload }
//     }
//     else {
//         return state;
//     }
// }

// const defaultUsers = ["User 1", "User 2"]
// const usersReducer = (state = defaultUsers, action) => {
//     switch (action.type) {
//         case "users/add_user": {
//             return [...state, action.payload]
//         }
//         default: {
//             return state
//         }
//     }
// }


// const rootReducer = combineReducers({
//     counter: counterReducer,
//     users: usersReducer
// })

// export const store = createStore(rootReducer)

// export const store = configureStore({
//     reducer: {
//         counter: counterReducer,
//         users: usersReducer
//     }
// })


export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})
