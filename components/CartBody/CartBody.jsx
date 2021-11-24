import CartItem from "./CartItem";
import TotalSum from "./TotalSum";
import Link from "next/link";
import ModalMiniWrapper from "../ModalMiniWrapper";
import Router from "next/router";
import MessageCartEmpty from "../Elements/MessageCartEmpty";
import lscache from "lscache";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SettingsCart from "./SettingsCart";
import { newCartOrder } from '../../action/getOrder'

const useCart = () => {
    const typePayment = useSelector((state) => state.cart.typePayment);
    const typeDelivery = useSelector((state) => state.cart.typeDelivery);
    const deliveryAdress = useSelector((state) => state.cart.deliveryAdress);
    const isAuth = useSelector((state) => state.auth.isAuth);
    const comment = useSelector((state) => state.cart.comment);
    const auth = useSelector((state) => state.auth);
    const cart = useSelector((state) => state.cart);
    const cartItems = useSelector((state) => state.cart.cartItems);
    const total = useSelector((state) => state.cart.totalPrice);

    const dispatch = useDispatch();

    const acOnRemoveCart = () => {
        dispatch({
            type: "REMOVE_CART",
        });
    };

    const acOnClear = (id) => {
        dispatch({
            type: "CLEAR_CART_ITEM",
            payload: id,
        });
    };

    const acOnChangeCount = (val, id) => {
        dispatch({
            type: "CHANGE_COUNT_CART_ITEMS",
            payload: { value: val, id: id },
        });
    };

    const acOnIncCount = (id) => {
        dispatch({
            type: "INCREMENT_CART_ITEMS",
            payload: id,
        });
    };

    const acOnDecCount = (id) => {
        dispatch({
            type: "DECREMENT_CART_ITEMS",
            payload: id,
        });
    };

    const acOnResetComments = () => {
        dispatch({
            type: "RESET_COMMENTS",
        });
    };

    return {
        isAuth,
        auth,
        typePayment,
        typeDelivery,
        deliveryAdress,
        comment,
        cart,
        cartItems,
        acOnRemoveCart,
        acOnClear,
        acOnChangeCount,
        acOnIncCount,
        acOnDecCount,
        acOnResetComments,
        total
    };
};

function CartBody(props) {

    const {
        isAuth,
        auth,
        typePayment,
        typeDelivery,
        deliveryAdress,
        comment,
        cart,
        cartItems,
        acOnRemoveCart,
        acOnClear,
        acOnChangeCount,
        acOnIncCount,
        acOnDecCount,
        acOnResetComments,
        total
    } = useCart();

    const { minPrice } = props

    const [isInitial, setIsInitial] = useState(false);
    const [isModal, setIsModal] = useState(false);
    const [isSend, setIsSend] = useState(false);
    const [isMinTotal, setIsMinTotal] = useState(false);

    const onRemoveCart = () => {
        acOnRemoveCart();
    };

    const onClear = (id) => {
        acOnClear(id);
    };

    const onChangeCount = (val, id) => {
        acOnChangeCount(val, id);
    };

    useEffect(() => {
        setIsInitial(true);
    }, []);

    useEffect(() => {
        if (isInitial) {
            lscache.set("cart", cart);
        }
    }, [cart]);

    const submitOrder = () => {

        const order = {
            Client_id: auth.userId,
            Comment: comment,
            delivery: typeDelivery,
            deliveryAddresses: deliveryAdress,
            payment: typePayment,
            goods: cartItems,
        };
        newCartOrder(order)
            .then(() => {
                acOnRemoveCart();
                setIsSend(true);
                setTimeout(() => {
                    setIsSend(false);
                }, 2000);

                acOnResetComments();
            })
            .catch(() => console.log("err"));
    };

    const onSubmitCart = () => {
        auth.isAuth ? minPrice.OrderMinPrice <= total ? submitOrder() : setIsMinTotal(true) : setIsModal(true)
        // minPrice.OrderMinPrice <= total ? auth.isAuth ? submitOrder() : setIsModal(true) : setIsMinTotal(true)
    };

    return (
        <div className="cart">
            <div className="head">
                <div className="image">
                    <span>фото</span>
                </div>
                <div className="text_box">
                    <div className="description">
                        <span>описание</span>
                    </div>

                    <div className="weight">
                        <span>вес</span>
                    </div>

                    <div className="price">
                        <span>цена за 100шт</span>
                    </div>

                    <div className="nds">
                        <span>Ставка НДС</span>
                    </div>

                    <div className="nds_summ">
                        <span>НДС</span>
                    </div>

                    <div className="type">
                        <span>Цена с НДС</span>
                    </div>

                    {isAuth ? (
                        <div className="status">
                            <span>Статус</span>
                        </div>
                    ) : null}

                    <div className="remove_cart">
                        <a
                            href="#"
                            onClick={(event) => {
                                event.preventDefault();
                                onRemoveCart();
                            }}
                        >
                            очистить всю корзину
                        </a>
                    </div>
                </div>
            </div>

            {cartItems.length > 0 ? (
                <>
                    {cartItems.map((cartItem) => {
                        const { barcode } = cartItem;

                        return (
                            <div className="desctop_table" key={barcode}>
                                <CartItem
                                    isAuth={isAuth}
                                    cartItem={cartItem}
                                    onClear={onClear}
                                    onChangeCount={onChangeCount}
                                    acOnIncCount={acOnIncCount}
                                    acOnDecCount={acOnDecCount}
                                />
                            </div>
                        );
                    })}

                    <TotalSum minPrice={minPrice} />

                    <SettingsCart />

                    <div className="button-block">
                        <button className="form_buttons_send" onClick={onSubmitCart}>
                            Оформить
                        </button>
                    </div>
                </>
            ) : (
                    <MessageCartEmpty />
                )}

            {isSend ? (
                <ModalMiniWrapper setIsModal={setIsSend}>
                    <span className="MessText">Благодарим за оформление заказа!</span>
                </ModalMiniWrapper>
            ) : null}

            {isMinTotal ? (
                <ModalMiniWrapper setIsModal={setIsMinTotal}>
                    <span className="MessText">Минимальная сумма заказа {minPrice.OrderMinPrice} руб.</span>
                </ModalMiniWrapper>
            ) : null}

            {isModal ? (
                <ModalMiniWrapper setIsModal={setIsModal}>
                    <span className="MessText">
                        Для оформления заказа
						<Link href="/login">
                            <a className="linkToLogin"> войдите </a>
                        </Link>
						в систему
					</span>
                </ModalMiniWrapper>
            ) : null}

            <style jsx>{`
				.cart {
					width: 100%;
					position: relative;
				}

				.head {
					display: flex;
					justify-content: space-between;
					padding: 20px 0;
					background-color: #d2d2d2;
					text-transform: uppercase;
					font-weight: bold;
					color: #608d98;
					position: sticky;
					top: 155px;
					z-index: 82;
					font-size: 12px;
				}

				.image {
					width: 7%;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.text_box {
					width: 93%;
					display: flex;
					flex-wrap: wrap;
				}

				.description {
					width: 30%;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.type {
					width: ${isAuth ? "7%" : "9%"};
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.nds {
					width: 9%;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.nds_summ {
					width: ${isAuth ? "10%" : "12%"};
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.price {
					width: ${isAuth ? "10%" : "14%"};
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.weight {
					width: 4%;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.pack {
					width: ${isAuth ? "8%" : "10%"};
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.status {
					width: 8%;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.remove_cart {
					width: ${isAuth ? "20%" : "20%"};
					display: flex;
					justify-content: center;
					align-items: center;
				}
				.remove_cart > a {
					color: #608d98;
				}

				.item:nth-child(2n + 1) {
					background-color: #dedede;
				}

				.button-block {
					display: flex;
					justify-content: flex-end;
					padding: 15px 0 30px 0;
				}

				.form_buttons_send {
					color: white;
					background: #608d98;
					border-radius: 5px;
					border: none;
					outline: none;
					box-shadow: none;
					text-transform: uppercase;
					font-weight: bold;
					padding: 13px 25px;
					font-size: 16px;
					cursor: pointer;
				}
				.form_buttons_send:hover {
					background: #6d9aa5;
				}

				.linkToLogin {
					font-weight: bold;
					color: #608d98;
					text-decoration: none;
				}

				.MessText {
					font-size: 20px;
					color: #404c54;
				}

				@media (max-width: 1370px) {
					.head {
						font-size: 12px;
					}
					.form_buttons_send {
						font-size: 14px;
					}
				}

				@media (max-width: 1200px) {
					.head {
						padding: 15px 0;
						font-size: 10px;
						top: 135px;
					}

					.form_buttons_send {
						padding: 12px 20px;
						font-size: 12px;
					}
				}

				@media (max-width: 991px) {
					.head {
						padding: 10px 0;
						font-size: 7px;
						top: 115px;
					}

					.form_buttons_send {
						padding: 10px 15px;
						font-size: 10px;
					}
					
					.MessText {
						font-size: 18px;
					}
				}
				@media (max-width: 768px) {
					.head {
						top: 102px;
					}
				}
				@media (max-width: 576px) {
					.image {
						width: 0;
					}

					.image span {
						display: none;
					}

					.text_box {
						width: 100%;
						justify-content: space-between;
					}

					.head {
						align-items: flex-start;
						padding: 5px 0;
						font-size: 6px;
					}
					.description {
						display: none;
					}

					.type,
					.nds,
					.nds_summ,
					.price,
					.weight {
						width: 20%;
						padding: 5px 0;
					}

					.status {
						display: none;
					}

					.remove_cart {
						display: none;
					}

					.button-block {
						justify-content: center;
					}
					
					.MessText {
						font-size: 14px;
					}
				}

				@media (max-width: 400px) {
					.head {
						top: 99px;
					}
				}
			`}</style>
        </div>
    );
}

export default CartBody;
