import { createStore, combineReducers } from "redux";
import countReducer from "./Reducers/counterReducer";
import authReducer from "./Reducers/authReducer";

const reducers = combineReducers({
    count: countReducer,
    auth: authReducer
})

const store = createStore(reducers)

export default store