const date = new Date();

const initialState = {
	customerInfo: [],
	orders: [],
	equalization: [],
	payments: [],
	headerOrg: null,
	size: 1,
	currentPage: 1,
	countPage: 10,
	tabs: "orders",
	startData: "",
	endData: `${date.getFullYear()}${
		date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
	}${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`,
};

const customer = (state = initialState, action) => {
	switch (action.type) {
		case "CHANGE_TABS":
			return {
				...state,
				tabs: action.payload,
			};
		case "CHANGE_CUSTOMER_INFO":
			return {
				...state,
				customerInfo: action.payload,
			};
		case "CHANGE_ORDERS":
			return {
				...state,
				orders: action.payload,
			};
		case "CHANGE_EQUALIZATION":
			return {
				...state,
				equalization: action.payload,
			};
		case "CHANGE_PAYMENTS":
			return {
				...state,
				payments: action.payload,
			};
		case "CHANGE_HEADER_ORG":
			return {
				...state,
				headerOrg: action.payload,
			};

		case "CHANGE_SIZE":
			return {
				...state,
				size: action.payload,
			};

		case "CHANGE_CURRENT_PAGE":
			return {
				...state,
				currentPage: action.payload,
			};
		case "CHANGE_COUNT_PAGE":
			return {
				...state,
				countPage: action.payload,
			};

		case "CHANGE_START_DATA":
			return {
				...state,
				startData: action.payload,
			};

		case "CHANGE_END_DATA":
			return {
				...state,
				endData: action.payload,
			};

		case "UPDATE_IS_CUSTOMER":
			return action.payload;

		default:
			return state;
	}
};

export default customer;
