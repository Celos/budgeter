import React, {Component} from "react";
import Paper from "@material-ui/core/Paper/Paper";
import connect from "react-redux/es/connect/connect";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "../tag/TagsList.styles";
import Chip from "@material-ui/core/Chip/Chip";
import AccountBalance from "@material-ui/icons/AccountBalance";
import {createAccount, deleteAccount} from "./state/actions";
import Create from "../common/Create";

class AccountList extends Component {

	render() {
		const { classes } = this.props;

		return (
			<Paper className={classes.root}>
				{this.props.list.map(account => {
					return (
						<Chip
							key={account.id}
							icon={<AccountBalance/>}
							label={account.name}
							onDelete={() => this.props.onDeleteAccount(account.id)}
							className={classes.chip}/>
					);
				})}
				<Create newId={this.props.newAccountId} onCreate={this.props.onCreateAccount}/>
			</Paper>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		list: Object.values(state.accounts.list),
		newAccountId: state.accounts.maxId + 1
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onDeleteAccount: id => dispatch(deleteAccount(id)),
		onCreateAccount: (id, name) => dispatch(createAccount(id, name))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(
	withStyles(styles)(AccountList));