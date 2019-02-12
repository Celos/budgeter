import React, {Component} from 'react';
import './App.css';
import TagsList from "./tag/TagsList";
import AccountList from "./account/AccountList";

class App extends Component {
	render() {
		return (
			<div className="App">
				<TagsList/>
				<AccountList/>
			</div>
		);
	}
}

export default App;
