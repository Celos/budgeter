import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {combineReducers, createStore} from "redux";
import {Provider} from 'react-redux';
import tags from "./state/reducers/tagReducer.js";
import accounts from "./state/reducers/accountReducer";

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {};
const store = createStore(combineReducers({tags, accounts}), persistedState);
store.subscribe(()=>{
	console.log(store.getState());
	localStorage.setItem('reduxState', JSON.stringify(store.getState()))
});

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root"));