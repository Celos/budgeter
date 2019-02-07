import {CREATE_TAG, DELETE_TAG} from "../actions/tagActions";

const initialTags = {
	1: {id: 1, name: "Groceries"},
	2: {id: 2, name: "Dining Out"},
	3: {id: 3, name: "Housing Loan"},
};

function tagsReducer(state = initialTags, action) {
	switch (action.type) {
		case CREATE_TAG:
			return {
				...state,
				[action.id]: {
					id: action.id,
					name: action.name
				}
			};
		case DELETE_TAG:
			const {[action.id]: value, ...newState} = state;
			return newState;
		default: return state;
	}
}

function maxTagIdReducer(state = Object.keys(initialTags).length, action) {
	switch (action.type) {
		case CREATE_TAG:
			return action.id;
		default: return state;
	}
}

const tags = (state = {}, action) => {
	return {
		tags: tagsReducer(state.tags, action),
		maxTagId: maxTagIdReducer(state.maxTagId, action)
	}
};

export default tags;