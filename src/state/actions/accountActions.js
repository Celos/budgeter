export const CREATE_ACCOUNT = "CREATE_ACCOUNT";
export const DELETE_ACCOUNT = "DELETE_ACCOUNT";

export function createAccount(id, name) {
	return {
		type: CREATE_ACCOUNT,
		id: id,
		name: name
	};
}

export function deleteAccount(id) {
	return {
		type: DELETE_ACCOUNT,
		id: id
	};
}