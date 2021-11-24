const initialState = {
	userName: "",
};

const info = (state = initialState, action) => {
	switch (action.type) {
		case "CHANGE_USER_NAME":
			return {
				...state,
				userName: action.payload,
			};

		default:
			return state;
	}
};

export default info;
