//Reducer'ları biraraya getirmek -combineReducers

import { combineReducers } from "redux";
import counterReducer from "./counterReducer"; // counterReducer.js

const reducers = combineReducers({
    counterReducer
});

export default reducers;