import React, {Component} from 'react';
import './App.css';
import TagsList from "./view/tags/TagsList";
import AccountList from "./view/accounts/AccountList";

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
