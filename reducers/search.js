const initialState = {
	searchStr: "",
	isSubmit: false,
	goods: [],
	isInit: false,
};

const search = (state = initialState, action) => {
	switch (action.type) {
		case "UPDATE_SEARCH_STRING":
			return {
				...state,
				searchStr: action.payload,
			};
		case "RESET_SEARCH_STRING":
			return {
				...state,
				searchStr: action.payload,
			};
		case "ADD_SEARCH_GOODS":
			return {
				...state,
				goods: action.payload,
			};

		case "CHANGE_IS_INIT":
			return {
				...state,
				isInit: action.payload,
			};

		case "UPDATE_IS_SEARCH":
			return action.payload;

		default:
			return state;
	}
};

export default search;
