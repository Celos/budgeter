import React, {Component} from 'react';
import './App.css';
import TagsList from "./view/tags/TagsList";

class App extends Component {
	render() {
		return (
			<div className="App">
				<TagsList/>
			</div>
		);
	}
}

export default App;
