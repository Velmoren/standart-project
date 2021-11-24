const initialState = {
	isActiveMenu: false,
};

const menu = (state = initialState, action) => {
	switch (action.type) {
		case "CHENGE_MENU_ACTIVE":
			return {
				...state,
				isActiveMenu: action.payload,
			};

		default:
			return state;
	}
};

export default menu;
