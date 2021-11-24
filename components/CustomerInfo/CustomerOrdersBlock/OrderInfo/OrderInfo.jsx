import { useState, useEffect } from "react";
import Spinner from "../../../Spinner";
import {getCustomerOrderInfo} from '../../../../action/getCustomer'

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
		<div className="box">
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

					<table className="table">
						<thead className="table_thead">
							<tr>
								<th className="th">Артикул</th>
								<th className="th">Название</th>
								<th className="th">Упаковка</th>
								<th className="th">Количество</th>
								<th className="th">Статус</th>
								<th className="th">Цена</th>
								<th className="th">Стоимость</th>
								<th className="th">Ставка НДС</th>
								<th className="th">НДС</th>
								<th className="th">Стоимость с НДС</th>
								<th className="th">Валюта</th>
							</tr>
						</thead>
						<tbody>
							{items.map((item, index) => {
								console.log(item);
								return (
									<tr key={index}>
										<th className="th">{item.Artikul}</th>
										<th className="th">{item.Product_Name}</th>
										<th className="th">{item.pack} шт</th>
										<th className="th">{item.Quantity}</th>
										<th className="th">В наличии</th>
										<th className="th">{item.Price}</th>
										<th className="th">{item.Sum}</th>
										<th className="th">{item.NDS_rate}</th>
										<th className="th">{item.Sum_NDS}</th>
										<th className="th">{item.Sum_total}</th>
										<th className="th">{dataItems.Currency}</th>
									</tr>
								);
							})}
							<tr>
								<th className="th th_total th_none"></th>
								<th className="th th_total th_none"></th>
								<th className="th th_total th_none"></th>
								<th className="th th_total th_none"></th>
								<th className="th th_total th_none"></th>
								<th className="th th_total th_none"></th>
								<th className="th th_total">{dataItems.Sum}</th>
								<th className="th th_total th_none"></th>
								<th className="th th_total">{dataItems.Sum_NDS}</th>
								<th className="th th_total">{dataItems.Sum_total}</th>
								<th className="th th_total th_none"></th>
							</tr>
						</tbody>
					</table>
				</>
			)}

			<style jsx>{`
				.box {
					display: flex;
					flex-direction: column;
					align-items: center;
					overflow: auto;
					max-height: 630px;
					height: 100%;
				}

				.comment {
					width: 100%;
				}

				.total_info {
					width: 100%;
					display: flex;
					justify-content: space-between;
				}
				.table {
					border-collapse: collapse;
					width: 100%;
				}

				.table_total {
					border-collapse: collapse;
					margin-top: 20px;
				}

				.table_thead {
					background-color: #ebebeb;
				}

				.th {
					background-color: rgba(0, 0, 0, 0.05);
					padding: 5px 5px;
					height: 40px;
					font-size: 12px;
					border: 1px solid #dee2e6;
				}

				.th_total {
					border: 1px solid #404c54;
				}

				.th_none {
					background-color: inherit;
					border: none;
				}
			`}</style>
		</div>
	);
}
