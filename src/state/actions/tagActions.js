export const CREATE_TAG = "CREATE_TAG";
export const DELETE_TAG = "DELETE_TAG";

export function createTag(id, name, parent) {
	return {
		type: CREATE_TAG,
		id: id,
		name: name,
		parent: parent
	};
}

export function deleteTag(id) {
	return {
		type: DELETE_TAG,
		id: id
	};
}