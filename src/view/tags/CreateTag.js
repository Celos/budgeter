import React, {Component} from "react";
import * as PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import AddIcon from '@material-ui/icons/AddCircle';
import Input from "@material-ui/core/Input/Input";

const styles = theme => ({
	button: {
		border: 0,
		backgroundColor: "transparent"
	},
	icon: {
		margin: theme.spacing.unit,
	}
});

const initialState = {
	newTagName: "",
	clicked: false
};

class CreateTag extends Component {
	constructor(props) {
		super(props);
		this.state = initialState;
	}

	setTagName = (e) => {
		this.setState({newTagName: e.target.value});
	};

	showForm = () => {
		this.setState({clicked: true});
	};

	submitForm = (e) => {
		if (e) {
			e.preventDefault();
		}
		this.props.onCreateTag(this.props.newId, this.state.newTagName);
		this.setState(initialState);
	};

	render() {
		const { classes } = this.props;

		let form = (
			<form onSubmit={this.submitForm}>
				<Input value={this.state.newTagName} onChange={this.setTagName}/>
			</form>
		);

		let addButton = (
			<button className={classes.button} onClick={this.showForm}>
				<AddIcon className={classes.icon} color={"primary"}/>
			</button>
		);

		return (
			<div>{this.state.clicked ? form : addButton}</div>
		);
	}
}

CreateTag.propTypes = {
	onCreateTag: PropTypes.func.isRequired,
	newTagId: PropTypes.number.isRequired
};

export default withStyles(styles)(CreateTag);