export const INCREMENT = "increment"
export const DECREMENT = "decrement"

export const INCREMENT_BY_VALUE = "incrementByValue"

export const increment = () => ({ type: INCREMENT })
export const decrement = () => ({ type: DECREMENT })
export const incrementByValue = (amount) => ({ type: INCREMENT_BY_VALUE, payload: amount })


