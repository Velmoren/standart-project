const initialState = {
	cartItems: [],
	totalPrice: 0,
	typePayment: "Оплата ЕРИП",
	typeDelivery: "Самовывоз",
	comment: "",
	deliveryAdress: "",
};

const giveMeTotalPrice = (arr) => {
	return arr.reduce((acc, item) => acc + item.total, 0);
};

const cart = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_CART_ITEMS":
			const newItem = action.payload.item;

			const newCartItem = {
				TYPE: newItem.TYPE,
				VALUE: newItem.VALUE,
				barcode: newItem.barcode,
				cov: newItem.cov,
				dimA: newItem.dimA,
				dimB: newItem.dimB,
				dimC: newItem.dimC,
				form: newItem.form,
				id: newItem.id,
				mat: newItem.mat,
				name: newItem.name,
				pack: newItem.pack,
				priceForHundred: newItem.price,
				price: newItem.price / 100,
				productname: newItem.productname,
				quantity: 1,
				status: newItem.quantity,
				standartID: newItem.standartID,
				standartName: newItem.standartName,
				stdname: newItem.stdname,
				weight: newItem.weight,
				NDS: newItem.NDS,
				nds_summ: newItem.price * (newItem.NDS / 100),
				priceForHundredAndNDS:
					newItem.price + newItem.price * (newItem.NDS / 100),
			};

			const goodInCart = state.cartItems.find(
				(item) => item.barcode === newCartItem.barcode
			);

			const newTotalPrice =
				state.totalPrice +
				newCartItem.price +
				newCartItem.price * (newCartItem.NDS / 100);

			if (goodInCart) {

				return {
					...state,
					cartItems: state.cartItems.map((item) => {
						if (item.barcode === goodInCart.barcode) {
							item.newPrice = goodInCart.price;
							item.total +=
								goodInCart.price * (newCartItem.NDS / 100) + goodInCart.price;
							item.quantity += 1;
						}
						return item;
					}),
					totalPrice: newTotalPrice,
				};
			} else {
				newCartItem.total =
					newCartItem.price * (newCartItem.NDS / 100) + newCartItem.price;
				newCartItem.quantity = 1;
				newCartItem.image = action.payload.pic1;


				return {
					...state,
					cartItems: state.cartItems.concat(newCartItem),
					totalPrice: newTotalPrice,
				};
			}
		case "CLEAR_CART_ITEM":
			const clearBarcode = action.payload;
			const newClearCartItems = state.cartItems.filter(
				(item) => item.barcode !== clearBarcode
			);

			return {
				...state,
				cartItems: newClearCartItems,
				totalPrice: giveMeTotalPrice(newClearCartItems),
			};

		case "CHANGE_COUNT_CART_ITEMS":
			const changeBarcode = action.payload.id;
			const changeCount = action.payload.value;

			const newChangeCartItems = state.cartItems.map((item) => {
				if (item.barcode === changeBarcode) {
					item.quantity = +changeCount;
					item.total = item.price * +changeCount * (item.NDS / 100 + 1);
				}
				return item;
			});

			return {
				...state,
				cartItems: newChangeCartItems,
				totalPrice: giveMeTotalPrice(newChangeCartItems),
			};

		case "INCREMENT_CART_ITEMS":
			const incBarcode = action.payload;

			const newIncCartItems = state.cartItems.map((item) => {
				if (item.barcode === incBarcode) {
					item.quantity = +item.quantity + 1;
					item.total = item.price * item.quantity * (item.NDS / 100 + 1);
				}
				return item;
			});

			return {
				...state,
				cartItems: newIncCartItems,
				totalPrice: giveMeTotalPrice(newIncCartItems),
			};

		case "DECREMENT_CART_ITEMS":
			const decBarcode = action.payload;

			const newDecCartItems = state.cartItems.map((item) => {
				if (item.barcode === decBarcode) {
					if (item.quantity === 1) {
						item.quantity = 1;
					} else {
						item.quantity = +item.quantity - 1;
					}

					if (item.total === 1) {
						item.total = item.price * 1 * (item.NDS / 100 + 1);
					} else {
						item.total = item.price * item.quantity * (item.NDS / 100 + 1);
					}
				}
				return item;
			});

			return {
				...state,
				cartItems: newDecCartItems,
				totalPrice: giveMeTotalPrice(newDecCartItems),
			};

		case "CHENGE_COMMENT":
			return {
				...state,
				comment: action.payload,
			};

		case "CHENGE_DELIVERY_ADRESS":
			return {
				...state,
				deliveryAdress: action.payload,
			};

		case "CHENGE_TYPE_PAYMENT":
			return {
				...state,
				typePayment: action.payload,
			};

		case "CHENGE_TYPE_DELIVERY":
			return {
				...state,
				typeDelivery: action.payload,
			};

		case "REMOVE_CART":
			return {
				...state,
				cartItems: [],
				totalPrice: 0,
			};

		case "RESET_COMMENTS":
			return {
				...state,
				comment: "",
				deliveryAdress: "",
				typePayment: "Оплата ЕРИП",
				typeDelivery: "Самовывоз",
			};
		case "UPDATE_IS_CART":
			return action.payload;

		default:
			return state;
	}
};

export default cart;
