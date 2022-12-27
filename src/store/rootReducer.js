import {combineReducers} from "redux";
import counterReducer from "./reducers/counterReducer";
import nameReducer from "./reducers/nameReducer";

const rootReducer = combineReducers({
    counter : counterReducer,
    name : nameReducer
})

export default rootReducer;