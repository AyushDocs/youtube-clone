import { combineReducers } from "redux"
import userReducer from './UserReducer';
import yTReducer from './YtReducer';
const rootReducer = combineReducers({userReducer,yTReducer});

export default rootReducer