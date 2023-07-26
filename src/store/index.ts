import {combineReducers, createStore, applyMiddleware, compose} from 'redux'
import userReducer from "../reducers/userReducer.ts";
import thunkMiddleware from 'redux-thunk'
const middlewareEnhancer = applyMiddleware(thunkMiddleware)
const composedEnhancers = compose(middlewareEnhancer)

const store = createStore(combineReducers({user: userReducer}),
  undefined,
  composedEnhancers)

export default store
