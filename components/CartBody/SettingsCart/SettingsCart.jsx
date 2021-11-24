import InputRadio from "../../Elements/InputRadio";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
	YMaps,
	Map,
	Clusterer,
	Placemark,
	FullscreenControl,
	TrafficControl,
	SearchControl,
	GeolocationControl,
	ZoomControl,
} from "react-yandex-maps";

const useCart = () => {
	const comment = useSelector((state) => state.cart.comment);
	const deliveryAdress = useSelector((state) => state.cart.deliveryAdress);
	const dispatch = useDispatch();


	const acOnChengeComment = (str) => {
		dispatch({
			type: "CHENGE_COMMENT",
			payload: str,
		});
	};

	const acOnChengeDeliveruAdress = (str) => {
		dispatch({
			type: "CHENGE_DELIVERY_ADRESS",
			payload: str,
		});
	};

	const acOnChengePayment = (str) => {
		dispatch({
			type: "CHENGE_TYPE_PAYMENT",
			payload: str,
		});
	};

	const acOnChengeDelivery = (str) => {
		dispatch({
			type: "CHENGE_TYPE_DELIVERY",
			payload: str,
		});
	};

	return {
		comment,
		deliveryAdress,
		acOnChengeComment,
		acOnChengeDeliveruAdress,
		acOnChengePayment,
		acOnChengeDelivery,
	};
};

export default function SettingsCart() {
	const {
		comment,
		deliveryAdress,
		acOnChengeComment,
		acOnChengeDeliveruAdress,
		acOnChengePayment,
		acOnChengeDelivery,
	} = useCart();

	const [isAdress, setIsAdress] = useState(false);
	const loadSuggest = ymaps => {
		const suggestView = new ymaps.SuggestView("suggest");
		suggestView.events.add("select", (e) => {
			changeDeliveryAdress(e.get("item").value)
		});
	};
	const changeComment = (e) => {
		let value = e.target.value;
		acOnChengeComment(value);
	};

	const changeDeliveryAdress = (str) => {
		acOnChengeDeliveruAdress(str);
	};

	const changeDelivery = (str) => {
		acOnChengeDelivery(str);
		acOnChengeDeliveruAdress("");
		str === "Доставка" ? setIsAdress(true) : setIsAdress(false);
	};

	const changePayment = (str) => {
		acOnChengePayment(str);
	};

	return (
		<div className="settings_total">
			<div className="settings_total_item">
				<h3>Комментарий к заказу</h3>
				<textarea
					className="commentInput"
					name="comment"
					id="comment"
					maxLength="150"
					placeholder="Оставьте комментарий к заказу"
					onChange={changeComment}
					value={comment}
				></textarea>
			</div>

			<div className="settings_total_item">
				<h3>Условия получения товара</h3>
				<InputRadio
					id="pickup"
					label="Самовывоз"
					name="deliveryGroup"
					onChange={() => changeDelivery("Самовывоз")}
					checked={true}
				/>
				<InputRadio
					id="delivery"
					label="Доставка"
					name="deliveryGroup"
					onChange={() => changeDelivery("Доставка")}
					checked={false}
				/>
				{isAdress ? (
					<div className="adressBlock">
						<input
							type="text"
							value={deliveryAdress}
							className="form-control"
							id="suggest"
							placeholder="Адрес доставки"
							onChange={(e) => {
								changeDeliveryAdress(e.target.value)
							}}
						/>
						<YMaps>
							<Map
								className="map-block"
								onLoad={ymaps => loadSuggest(ymaps)}
								defaultState={{ center: [55.751574, 37.573856], zoom: 9 }}
								modules={["SuggestView"]}
							/>
						</YMaps>
					</div>
				) : null}
			</div>
			<div className="settings_total_item">
				<h3>Тип оплаты</h3>
				<InputRadio
					id="online"
					label="Оплата ЕРИП"
					name="byGroup"
					onChange={() => changePayment("ЕРИП")}
					checked={true}
				/>
				<InputRadio
					id="card"
					label="Оплата картой"
					name="byGroup"
					onChange={() => changePayment("Оплата картой")}
					checked={false}
				/>
			</div>

			<style jsx>{`
				.map-block {
					visibility: hidden;
				}
				.settings_total {
					padding: 25px 0;
					display: flex;
					justify-content: space-between;
					border-top: 2px solid black;
				}

				.settings_total_item {
					width: 30%;
				}

				.commentInput {
					width: 100%;
					height: 100px;
					padding: 10px;
					font-size: 16px;
					overflow: auto;
					resize: none;
					border-radius: 5px;
					box-shadow: none;
					border: 1px solid #6e99a3;
					background: white;
					outline: none;
					color: #608d98;
				}

				.commentInput:focus {
					border: 2px solid #608d98;
					padding: 9px;
				}

				.commentInput::placeholder {
					color: rgba(1, 1, 1, 0.3);
				}

				.commentInput:focus::placeholder {
					color: transparent;
				}

				.adressBlock {
					display: flex;
					justify-content: space-between;
				}

				.adressBlock input {
					border-radius: 5px;
					box-shadow: none;
					border: 1px solid #6e99a3;
					background: white;
					height: 40px;
					font-size: 14px;
					width: 100%;
					color: #608d98;
					outline: none;
					padding: 0 10px;
				}

				.adressBlock input::placeholder {
					color: rgba(1, 1, 1, 0.3);
				}

				.adressBlock input:focus::placeholder {
					color: transparent;
				}

				label {
					font-size: 18px;
					margin-left: 10px;
				}

				@media (max-width: 1200px) {
					h3 {
						font-size: 14px;
					}

					.commentInput {
						font-size: 12px;
					}
				}

				@media (max-width: 991px) {
					h3 {
						font-size: 12px;
					}

					.commentInput {
						font-size: 10px;
						height: 80px;
					}
				}

				@media (max-width: 768px) {
					h3 {
						font-size: 10px;
					}

					.commentInput {
						font-size: 8px;
						height: 70px;
					}
				}

				@media (max-width: 576px) {
					.settings_total {
						flex-direction: column-reverse;
						align-items: center;
					}

					.settings_total_item {
						width: 80%;
					}

					h3 {
						font-size: 12px;
					}

					.commentInput {
						font-size: 10px;
						height: 80px;
						padding: 5px;
					}
				}
			`}</style>
		</div>
	);
}
