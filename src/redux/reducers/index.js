import { combineReducers } from "redux"
import userReducer from './UserReducer';
import visibilityReducer from './visibilityReducer';
import yTReducer from './YtReducer';
const rootReducer = combineReducers({userReducer,yTReducer,visibilityReducer});

export default rootReducer