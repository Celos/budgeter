import {CREATE_ACCOUNT, DELETE_ACCOUNT} from "../actions/accountActions";

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
		accounts: accountsReducer(state.accounts, action),
		maxAccountId: maxAccountsIdReducer(state.maxAccountId, action)
	}
};

export default accounts;