import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import usersReducer from "./users-reducer";
// import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    usersPage: usersReducer
})

let store = legacy_createStore(reducers)

export default store;