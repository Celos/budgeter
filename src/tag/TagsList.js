import React, {Component} from "react";
import {connect} from "react-redux";
import LabelIcon from '@material-ui/icons/Label';
import Paper from "@material-ui/core/Paper/Paper";
import Chip from "@material-ui/core/Chip/Chip";
import withStyles from "@material-ui/core/styles/withStyles";
import {createTag, deleteTag} from "./state/actions";
import styles from "./TagsList.styles";
import Create from "../common/Create";

class TagsList extends Component {

	render() {
		const { classes } = this.props;

		return (
			<Paper className={classes.root}>
				{this.props.list.map(tag => {
					return (
						<Chip
							key={tag.id}
							icon={<LabelIcon/>}
							label={tag.name}
							onDelete={() => this.props.onDeleteTag(tag.id)}
							className={classes.chip}/>
					);
				})}
				<Create newId={this.props.newTagId} onCreate={this.props.onCreateTag}/>
			</Paper>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		list: Object.values(state.tags.list),
		newTagId: state.tags.maxId + 1
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onDeleteTag: id => dispatch(deleteTag(id)),
		onCreateTag: (id, name) => dispatch(createTag(id, name))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(
	withStyles(styles)(TagsList));
