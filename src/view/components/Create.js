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
	newName: "",
	clicked: false
};

class Create extends Component {
	constructor(props) {
		super(props);
		this.state = initialState;
	}

	setNewName = (e) => {
		this.setState({newName: e.target.value});
	};

	showForm = () => {
		this.setState({clicked: true});
	};

	submitForm = (e) => {
		if (e) {
			e.preventDefault();
		}
		this.props.onCreate(this.props.newId, this.state.newName);
		this.setState(initialState);
	};

	render() {
		const { classes } = this.props;

		let form = (
			<form onSubmit={this.submitForm}>
				<Input value={this.state.newName} onChange={this.setNewName}/>
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

Create.propTypes = {
	onCreate: PropTypes.func.isRequired,
	newId: PropTypes.number.isRequired
};

export default withStyles(styles)(Create);