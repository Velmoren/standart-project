const initialState = {
	userName: "",
	userPassword: "",
	isAuth: false,
	isRemember: false,
	userNameError: null,
	userPasswordError: null,
	userId: "",
	page: "login",
};

const auth = (state = initialState, action) => {
	switch (action.type) {
		case "CHANGE_USER_NAME":
			return {
				...state,
				userName: action.payload,
			};

		case "CHANGE_USER_PASSWORD":
			return {
				...state,
				userPassword: action.payload,
			};

		case "UPDATE_IS_LOGIN":
			return {
				...state,
				isAuth: action.payload,
			};

		case "CHANGE_USER_NAME_ERROR":
			return {
				...state,
				userNameError: action.payload,
			};

		case "CHANGE_USER_PASSWORD_ERROR":
			return {
				...state,
				userPasswordError: action.payload,
			};

		case "CHANGE_USER_ID":
			return {
				...state,
				userId: action.payload,
			};

		case "CHANGE_AUTH_PAGE":
			return {
				...state,
				page: action.payload,
			};

		case "UPDATE_IS_AUTH":
			return action.payload;

		case "CHANGE_REMEMBER":
			return {
				...state,
				isRemember: action.payload,
			};
		case "UPDATE_IS_AUTH_FROM_COOKIE":
			return {
				...state,
				isAuth: action.payload.isAuth,
				userId: action.payload.id
			};

		case "IS_LOGOUT":
			return {
				userName: "",
				userPassword: "",
				isAuth: false,
				isRemember: false,
				userNameError: null,
				userPasswordError: null,
				userId: "",
				page: "login",
			};

		default:
			return state;
	}
};

export default auth;
