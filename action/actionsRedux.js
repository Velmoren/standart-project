const incAc = () => {
	return {
		type: "INC",
		payload: 1,
	};
};

const addToCartAc = (id) => {
	return {
		type: "ADD_TO_CART",
		payload: id,
	};
};

export { incAc, addToCartAc };
