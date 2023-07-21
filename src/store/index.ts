import {combineReducers, createStore} from 'redux'
import userReducer from "../reducers/userReducer.ts";
const store = createStore(combineReducers({user: userReducer}))

export default store
