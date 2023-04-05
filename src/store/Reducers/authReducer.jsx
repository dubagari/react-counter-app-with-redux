import { ACTIONS } from "../data";

const authReducer = (state = true, action) => {
    switch (action.type) {
        case ACTIONS.AUTH:
            return !state
        default:
            return state
    }
}

export default authReducer