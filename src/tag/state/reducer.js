import {CREATE_TAG, DELETE_TAG} from "./actions";

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
		list: tagsReducer(state.list, action),
		maxId: maxTagIdReducer(state.maxId, action)
	}
};

export default tags;