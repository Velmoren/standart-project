import { useState, useEffect } from "react";
import PagePagination from "../../PagePagination/PagePagination";
import PageSelectCountPage from "../../PageSelectCountPage";
import Spinner from "../../Spinner";
import {getCustomerPayments} from '../../../action/getCustomer'

export default function CustomerPaymentsMobile(props) {
	const {
		userId,
		payments,
		acChangePayments,
		size,
		acChangeSize,
		countPage,
		acChangeCountPage,
		currentPage,
		incCurrentPage,
		decCurrentPage,
		changeCurrentPage,
		startData,
		endData,
	} = props;

	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		if (userId !== "") {
			getCustomerPayments(userId, currentPage, countPage, startData, endData)
				.then((data) => {
					acChangePayments(data.Documents);
					setIsLoading(false);
					acChangeSize(Math.ceil(data.totalsize / countPage));
				});
		}
	}, [userId, currentPage, countPage, startData, endData]);

	return (
		<>
			{payments.map((payment, index) => {
				return (
					<div className="order_box" key={index}>
						<div className="number_order row_item">
							<span className="description_text">Номер</span>
							<span className="order_text">{payment.Doc_Number}</span>
						</div>

						<div className="date_order row_item">
							<span className="description_text">Дата</span>
							<span className="order_text">{payment.Doc_Date}</span>
						</div>

						<div className="type_order row_item">
							<span className="description_text">Тип</span>
							<span className="order_text">
								{payment.type === 1
									? "безналичная оплата"
									: payment.type === 2
									? "наличная оплата"
									: "другой"}
							</span>
						</div>

						<div className="sum_in_order row_item">
							<span className="description_text">Оплата</span>
							<span className="order_text">
								{payment.Sum_in
									? payment.Sum_in + " " + payment.Currency
									: null}
							</span>
						</div>

						<div className="sum_out_order row_item">
							<span className="description_text">Возврат</span>
							<span className="order_text">
								{payment.Sum_out
									? payment.Sum_out + " " + payment.Currency
									: null}
							</span>
						</div>

						<div className="role_order row_item">
							<span className="description_text">Назначеие платежа</span>
							<span className="order_text">
								{payment.nazn ? payment.nazn : "Нет информации"}
							</span>
						</div>
					</div>
				);
			})}
			{isLoading ? <Spinner /> : null}

			<div className="buttons_tab">
				<PageSelectCountPage
					setCountPage={acChangeCountPage}
					changeCurrentPage={changeCurrentPage}
				/>
				<PagePagination
					count={size}
					currentPage={currentPage}
					incCurrentPage={incCurrentPage}
					decCurrentPage={decCurrentPage}
					changeCurrentPage={changeCurrentPage}
				/>
			</div>

			<style jsx>{`
				.buttons_tab {
					display: flex;
					justify-content: space-between;
					align-items: center;
				}

				.order_box {
					width: 100%;
					border: 1px solid #404c54;
					margin-bottom: 10px;
					padding: 5px;
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;
				}

				.row_item {
					display: flex;
					flex-direction: column;
					align-items: center;
					margin-bottom: 5px;
				}

				.description_text {
					font-size: 8px;
				}

				.order_text {
					font-size: 10px;
				}

				.number_order {
					width: 33%;
				}

				.date_order {
					width: 33%;
				}

				.role_order {
					width: 100%;
				}

				.currency_order {
					width: 25%;
				}

				.type_order {
					width: 33%;
				}

				.sum_in_order {
					width: 45%;
				}

				.sum_out_order {
					width: 45%;
				}

				@media (max-width: 400px) {
					.description_text {
						font-size: 6px;
					}

					.order_text {
						font-size: 8px;
					}
				}
			`}</style>
		</>
	);
}
