
import { ACTIONS } from "../data"

const countReducer = (state = 0, action) => {
    
    switch (action.type) {
        case ACTIONS.ADD:
            return state + 1;
        case ACTIONS.ADD_NUMBER:
            return state + action.payload;
        case ACTIONS.RESET:
            return state = 0
        case ACTIONS.SUBTRACT:
            return state - 1;
        default:
            return state
    }
}

export default countReducer