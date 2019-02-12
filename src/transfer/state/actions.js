export const CREATE_TRANSFER = "CREATE_TRANSFER";
export const DELETE_TRANSFER = "DELETE_TRANSFER";
export const ADD_TAG = "ADD_TAG";
export const REMOVE_TAG = "REMOVE_TAG";

export function createTransfer(id, date, sum, account, counterparty, comment, tags) {
	return {
		type: CREATE_TRANSFER,
		id: id,
		date: date,
		sum: sum,
		account: account,
		counterparty: counterparty,
		comment: comment,
		tags: tags
	};
}

export function deleteAccount(id) {
	return {
		type: DELETE_TRANSFER,
		id: id
	};
}

export function addTag(transferId, tagId) {
	return {
		type: ADD_TAG,
		transfer: transferId,
		tag: tagId
	};
}

export function removeTag(transferId, tagId) {
	return {
		type: REMOVE_TAG,
		transfer: transferId,
		tag: tagId
	};
}

