import {CREATE_TRANSFER, DELETE_TRANSFER, ADD_TAG, REMOVE_TAG} from "./actions";

function transfersReducer(state = {}, action) {
	switch (action.type) {
		case CREATE_TRANSFER:
			return {
				...state,
				[action.id]: {
					id: action.id,
					date: action.date,
					sum: action.sum,
					account: action.account,
					counterparty: action.counterparty,
					comment: action.comment,
					tags: action.tags
				}
			};
		case DELETE_TRANSFER:
			const {[action.id]: value, ...newState} = state;
			return newState;
		default: return state;
	}
}

function maxTransferIdReducer(state = 0, action) {
	switch (action.type) {
		case CREATE_TRANSFER:
			return action.id;
		default: return state;
	}
}

const transfers = (state = {}, action) => {
	return {
		list: transfersReducer(state.list, action),
		maxId: maxTransferIdReducer(state.maxId, action)
	}
};

export default transfers;