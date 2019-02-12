import {CREATE_ACCOUNT, DELETE_ACCOUNT} from "./actions";

function accountsReducer(state = {}, action) {
	switch (action.type) {
		case CREATE_ACCOUNT:
			return {
				...state,
				[action.id]: {
					id: action.id,
					name: action.name
				}
			};
		case DELETE_ACCOUNT:
			const {[action.id]: value, ...newState} = state;
			return newState;
		default: return state;
	}
}

function maxAccountsIdReducer(state = 0, action) {
	switch (action.type) {
		case CREATE_ACCOUNT:
			return action.id;
		default: return state;
	}
}

const accounts = (state = {}, action) => {
	return {
		list: accountsReducer(state.list, action),
		maxId: maxAccountsIdReducer(state.maxId, action)
	}
};

export default accounts;