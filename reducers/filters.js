const initialState = {
	isFilter: false,
	standart: "DIN931",
	filterValues: {},
};

const filters = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_STANDART_FILTER":
			return {
				...state,
				standart: action.payload,
			};

		case "ADD_FILTERS_VALUE":
			return {
				...state,
				filterValues: action.payload,
			};

		default:
			return state;
	}
};

export default filters;
