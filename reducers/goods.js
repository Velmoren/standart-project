const initialState = {
	goods: [],
};

const goods = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_GOODS":
			const goods = action.payload;

			return {
				...state,
				goods: goods,
			};

		default:
			return state;
	}
};

export default goods;
