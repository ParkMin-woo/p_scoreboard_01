import {createStore} from "redux";
import {allReducers} from "./reducers";

export const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log("store in store : " , store);
console.log("store.getState in store : " , store.getState());