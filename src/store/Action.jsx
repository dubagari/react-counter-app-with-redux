import { ACTIONS } from "./data"

export const ADD = () => {
    return {
        type: ACTIONS.ADD
    }
}
export const RESET = () => {
    return {
        type: ACTIONS.RESET
    }
}
export const SUBTRACT = () => {
    return {
        type: ACTIONS.SUBTRACT
    }
}
export const ADD_NUMBER = (num) => {
    return {
        type: ACTIONS.ADD_NUMBER,
        payload: num
    }
}
export const TOOGLE_AUTH = () => {
    return {
        type: ACTIONS.AUTH,
        
    }
}