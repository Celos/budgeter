import React, {Component} from "react";
import {connect} from "react-redux";

class TagsList extends Component {
	render() {
		return (
			<div>{JSON.stringify(this.props)}</div>
		);
	}
}
function mapStateToProps(state) {
	return state.tags;
}
export default connect(mapStateToProps)(TagsList);
