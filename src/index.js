import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {createStore} from "redux";
import {Provider} from 'react-redux';
import tags from "./state/reducers/tagReducer.js";

const store = createStore(tags);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root"));