import { useState, useEffect } from "react";
import Spinner from "../../../Spinner";
import {getCustomerOrderInfo} from "../../../../action/getCustomer";

export default function OrderInfo({ id }) {
	const [items, setItems] = useState([]);
	const [dataItems, setDataItems] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		getCustomerOrderInfo(id).then((data) => {
			setDataItems(data);
			setItems(data.Doc_Items);
			setLoading(false);
		})
	}, [id]);

	return (
		<div className="box_modal" data-scroll-lock-scrollable>
			{loading ? (
				<Spinner />
			) : (
				<>
					{dataItems.comment !== "" ? (
						<div className="comment">
							<h3>Примечание к заказу:</h3>
							<p>{dataItems.comment}</p>
						</div>
					) : null}

					<div className="block">
						{items.map((item, index) => {
							return (
								<div className="order_box" key={index}>
									<div className="artikul_order row_item">
										<span className="description_text">Артикул</span>
										<span className="order_text">{item.Artikul}</span>
									</div>

									<div className="name_order row_item">
										<span className="description_text">Название</span>
										<span className="order_text">{item.Product_Name}</span>
									</div>

									<div className="pack_order row_item">
										<span className="description_text">Валюта</span>
										<span className="order_text">BYN</span>
									</div>

									<div className="count_order row_item">
										<span className="description_text">Количество</span>
										<span className="order_text">{item.Quantity}</span>
									</div>

									<div className="status_order row_item">
										<span className="description_text">Статус</span>
										<span className="order_text">В наличии</span>
									</div>

									<div className="price_order row_item">
										<span className="description_text">Цена</span>
										<span className="order_text">{item.Price} BYN.</span>
									</div>

									<div className="sum_order row_item">
										<span className="description_text">Сумма</span>
										<span className="order_text">{item.Sum} BYN.</span>
									</div>

									<div className="nds_order row_item">
										<span className="description_text">НДС</span>
										<span className="order_text">{item.Sum_NDS} BYN.</span>
									</div>

									<div className="nds_percent_order row_item">
										<span className="description_text">Ставка НДС</span>
										<span className="order_text">{item.NDS_rate}</span>
									</div>

									<div className="total_sum_order row_item">
										<span className="description_text">Итого</span>
										<span className="order_text">{item.Sum_total} BYN.</span>
									</div>
								</div>
							);
						})}
					</div>

					<div className="total_block">
						<div className="order_total_box">
							<div className="total_price_order row_item">
								<span className="description_text">Стоимость</span>
								<span className="order_text">{dataItems.Sum} BYN.</span>
							</div>
							<div className="total_nds_order row_item">
								<span className="description_text">НДС</span>
								<span className="order_text">{dataItems.Sum_NDS} BYN.</span>
							</div>
							<div className="total_order row_item">
								<span className="description_text">Стоимость с НДС</span>
								<span className="order_text">{dataItems.Sum_total} BYN.</span>
							</div>
						</div>
					</div>
				</>
			)}

			<style jsx>{`
				.block {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.box_modal {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: flex-start;
					overflow-y: scroll;
					overflow-x: hidden;
					max-height: 630px;
					height: 100%;
				}

				.order_box {
					border: 1px solid #404c54;
					margin-bottom: 10px;
					padding: 5px;
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;
				}

				.order_total_box {
					border: 1px solid #404c54;
					margin-bottom: 10px;
					padding: 5px;
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;
				}

				.total_block {
					display: flex;
					flex-direction: column;
					align-items: center;
					width: 100%;
				}

				.row_item {
					display: flex;
					flex-direction: column;
					align-items: center;
					margin-bottom: 5px;
				}

				.artikul_order {
					width: 30%;
				}

				.none_order {
					width: 33%;
				}

				.name_order {
					width: 65%;
					text-align: center;
				}

				.pack_order {
					width: 25%;
				}

				.count_order {
					width: 25%;
				}

				.status_order {
					width: 25%;
				}

				.price_order {
					width: 25%;
				}

				.sum_order {
					width: 25%;
				}

				.nds_percent_order {
					width: 25%;
				}

				.nds_order {
					width: 25%;
				}

				.total_sum_order {
					width: 25%;
				}

				.description_text {
					font-size: 8px;
				}

				.order_text {
					font-size: 10px;
				}

				.total_price_order {
					width: 33%;
				}

				.total_nds_order {
					width: 33%;
				}

				.total_order {
					width: 33%;
				}

				.comment {
					width: 100%;
				}
				@media (max-width: 576px) {
					.order_box {
						width: 300px;
						height: 100px;
					}

					.order_total_box {
						width: 300px;
						height: 40px;
					}
				}

				@media (max-width: 400px) {
					.order_box {
						width: 220px;
						height: 90px;
					}

					.order_total_box {
						width: 220px;
						height: 30px;
					}

					.description_text {
						font-size: 6px;
					}

					.order_text {
						font-size: 8px;
					}
				}
			`}</style>
		</div>
	);
}
