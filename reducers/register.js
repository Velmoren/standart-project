const initialState = {
	typeRegister: "Юридическое лицо",
	name: "",
	accNumber: "",
	fullName: "",
	bankName: "",
	unp: "",
	bic: "",
	okpo: "",
	fio: "",
	certificate: "",
	adres: "",
	delivery: "",
	phone: "",
	pasport: "",
	email: "",
	userPass: "",
	userPassRepeat: "",
	loginError: null,
	passRepeatError: null,
};

const register = (state = initialState, action) => {
	switch (action.type) {
		case "CHANGE_TYPE_REG":
			return {
				...state,
				typeRegister: action.payload,
			};
		case "CHANGE_NAME_REG":
			return {
				...state,
				name: action.payload,
			};
		case "CHANGE_ACC_NUMBER_REG":
			return {
				...state,
				accNumber: action.payload,
			};
		case "CHANGE_FUUL_NAME_REG":
			return {
				...state,
				fullName: action.payload,
			};
		case "CHANGE_BANK_NAME_REG":
			return {
				...state,
				bankName: action.payload,
			};
		case "CHANGE_UNP_REG":
			return {
				...state,
				unp: action.payload,
			};

		case "CHANGE_BIC_REG":
			return {
				...state,
				bic: action.payload,
			};

		case "CHANGE_OKPO_REG":
			return {
				...state,
				okpo: action.payload,
			};

		case "CHANGE_FIO_REG":
			return {
				...state,
				fio: action.payload,
			};
		case "CHANGE_CERTIFICATE_REG":
			return {
				...state,
				certificate: action.payload,
			};
		case "CHANGE_ADRES_REG":
			return {
				...state,
				adres: action.payload,
			};

		case "CHANGE_DELIVERY_REG":
			return {
				...state,
				delivery: action.payload,
			};
		case "CHANGE_PHONE_REG":
			return {
				...state,
				phone: action.payload,
			};

		case "CHANGE_PASPORT_REG":
			return {
				...state,
				pasport: action.payload,
			};
		case "CHANGE_EMAIL_REG":
			return {
				...state,
				email: action.payload,
			};
		case "CHANGE_PASSWORD_REG":
			return {
				...state,
				userPass: action.payload,
			};
		case "CHANGE_PASSWORD_REPEAT_REG":
			return {
				...state,
				userPassRepeat: action.payload,
			};
		case "CHANGE_LOGIN_ERROR":
			return {
				...state,
				loginError: action.payload,
			};
		case "CHANGE_PASSWORD_REPEAT_ERROR":
			return {
				...state,
				passRepeatError: action.payload,
			};

		default:
			return state;
	}
};

export default register;
