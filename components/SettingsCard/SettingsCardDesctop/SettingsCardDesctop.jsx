import SettingsCardItem from "../SettingsCardItem";

export default function SettingsCardMobile({
	goods,
	addCartItems,
	isAuth,
	pic1,
	loading,
	notGoods,
}) {
	return (
		<>
			<table className="table table_desctop table_sticky">
				<thead className="table_thead">
					<tr>
						<th className="th th-1">Товар</th>
						<th className="th th-2">Описание</th>
						<th className="th th-3">Стандарт</th>
						<th className="th th-4">Размер</th>
						<th className="th th-5">Материал</th>
						<th className="th th-6">Покрытие</th>
						<th className="th th-7">
							Упаковка <br />
							(шт)
						</th>
						<th className="th th-8">
							Цена <br />
							(за 100шт)
							<br /> без НДС
						</th>
						{isAuth ? <th className="th th-9">Статус</th> : null}
						<th className="th th-10">В корзину</th>
					</tr>
				</thead>
			</table>

			<table className="table table_set table_desctop">
				<tbody>
					{!loading && !notGoods ? (
						<SettingsCardItem
							goods={goods}
							addCartItems={addCartItems}
							isAuth={isAuth}
							pic1={pic1}
						/>
					) : null}
				</tbody>
			</table>

			<style jsx>{`
				.table_sticky {
					position: sticky;
					top: 200px;
					width: 100%;
					z-index: 83;
				}

				.table {
					border-collapse: collapse;
					width: 100%;
				}

				.table_thead {
					background-color: #ebebeb;

					width: 100%;
				}

				.th {
					padding: 15px 5px;
					color: #608d98;
					text-transform: uppercase;
					font-size: 10px;
					border: 1px solid #dee2e6;
				}

				.th-1 {
					width: ${isAuth ? "11%" : "15%"};
				}
				.th-2 {
					width: 15%;
				}
				.th-3 {
					width: 10%;
				}
				.th-4 {
					width: 10%;
				}
				.th-5 {
					width: 10%;
				}
				.th-6 {
					width: 10%;
				}
				.th-7 {
					width: ${isAuth ? "8%" : "10%"};
				}
				.th-8 {
					width: ${isAuth ? "8%" : "10%"};
				}
				.th-9 {
					width: 10%;
				}
				.th-10 {
					width: 10%;
				}

				@media (max-width: 1200px) {
					.th {
						font-size: 7px;
						font-family: Calibri;
						padding: 5px 2px;
					}

					.table_sticky {
						top: 170px;
					}
				}

				@media (max-width: 991px) {
					.table_sticky {
						top: 140px;
					}
				}

				@media (max-width: 768px) {
					.table_sticky {
						top: 130px;
					}
				}

				@media (max-width: 576px) {
					.table_desctop {
						display: none;
					}
				}

				@media (max-width: 400px) {
					.th {
						font-size: 5px;
					}

					.table_sticky {
						top: 125px;
					}
				}

				@media (max-height: 500px) {
					.table_sticky {
						position: static;
						z-index: 0
					}
				}
			`}</style>
		</>
	);
}
