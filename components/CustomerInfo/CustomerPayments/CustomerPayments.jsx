import { useState, useEffect } from "react";
import PagePagination from "../../PagePagination/PagePagination";
import PageSelectCountPage from "../../PageSelectCountPage";
import Spinner from "../../Spinner";
import {getCustomerPayments} from '../../../action/getCustomer'

export default function CustomerPayments(props) {
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
			<table className="table">
				<thead className="table_thead">
					<tr>
						<th className="th th-1">Номер</th>
						<th className="th th-2">Дата</th>
						<th className="th th-3">Назначеие платежа</th>
						<th className="th th-4">Сумма оплаты (приход)</th>
						<th className="th th-5">Сумма оплаты (расход)</th>
						<th className="th th-6">Валюта</th>
						<th className="th th-7">Тип</th>
					</tr>
				</thead>
				<tbody>
					{!isLoading ? (
						<>
							{payments.map((order, index) => {
								return (
									<tr key={index}>
										<th className="th th-1">{order.Doc_Number}</th>
										<th className="th th-2">{order.Doc_Date}</th>
										<th className="th th-3">{order.nazn}</th>
										<th className="th th-4">{order.Sum_in}</th>
										<th className="th th-5">{order.Sum_out}</th>
										<th className="th th-6">{order.Currency}</th>
										<th className="th th-7">
											{order.type === 1
												? "безналичная оплата"
												: order.type === 2
												? "наличная оплата"
												: "другой"}
										</th>
									</tr>
								);
							})}
						</>
					) : null}
				</tbody>
			</table>
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
				.table {
					border-collapse: collapse;
					width: 100%;
					margin-bottom: 10px;
				}

				.table_thead {
					background-color: #ebebeb;
				}

				.th {
					background-color: rgba(0, 0, 0, 0.05);
					padding: 12px 5px;
					height: 40px;
					font-size: 12px;
					border: 1px solid #dee2e6;
				}

				.searchLink {
					cursor: pointer;
				}

				.pdfLink {
					width: 25px;
				}

				.buttons_tab {
					display: flex;
					justify-content: space-between;
					align-items: center;
				}

				.th-1 {
					width: 12%;
				}
				.th-2 {
					width: 12%;
				}
				.th-3 {
					width: 29%;
				}
				.th-4 {
					width: 13%;
				}
				.th-5 {
					width: 13%;
				}
				.th-6 {
					width: 6%;
				}
				.th-7 {
					width: 15%;
				}

				@media (max-width: 1200px) {
					.th {
						height: 40px;
						font-size: 10px;
					}

					.th img {
						width: 20px;
					}
				}

				@media (max-width: 991px) {
					.th {
						height: 40px;
						font-size: 8px;
					}

					.th img {
						width: 15px;
					}
				}
			`}</style>
		</>
	);
}
