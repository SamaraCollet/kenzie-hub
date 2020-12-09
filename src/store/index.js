import { createStore, applyMiddleware, combineReducers } from "react-redux";
import { thunk } from "redux-thunk";

const reducers = combineReducers({});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
