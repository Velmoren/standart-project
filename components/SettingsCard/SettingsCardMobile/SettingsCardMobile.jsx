export default function SettingsCardMobile({
	goods,
	addCartItems,
	isAuth,
	pic1,
}) {
	return (
		<>
			<div className="table_head table_mobile">
				<div className="head_item item_1">
					<div className="item_name">Товар</div>
					<div className="item_name">Описание</div>
				</div>
				<div className="head_item item_next item_2">
					<div className="item_std">Стандарт</div>
					<div className="item_std">Размер</div>
				</div>
				<div className="head_item item_next item_3">
					<div className="item_set">Материал</div>
					<div className="item_set">Покрытие</div>
				</div>
				<div className="head_item item_next item_4">
					<div className="item_set">Упаковка (шт)</div>
					<div className="item_set">
						Цена <br />
						<span>(за 100шт) без НДС</span>
					</div>
				</div>
			</div>
			<div className="table_body table_mobile">
				{goods.map((item) => {
					return (
						<div className="body_item" key={item.barcode}>
							<div className="body_item_up">
								<div className="body_item_stat item_1">
									<div className="body_item_elem item_name">{item.name}</div>
									<div className="body_item_elem item_name">
										{item.description}
									</div>
								</div>
								<div className="body_item_stat item_next item_2">
									<div className="body_item_elem item_std">
										{item.TYPE} {item.VALUE}
									</div>
									<div className="body_item_elem item_std">
										{item.dimA} {item.dimB ? `Х ${item.dimB}` : null}
										{item.dimC ? `Х ${item.dimC}` : null}
									</div>
								</div>
								<div className="body_item_stat item_next item_3">
									<div className="body_item_elem item_set">{item.mat}</div>
									<div className="body_item_elem item_set">{item.cov}</div>
								</div>
								<div className="body_item_stat item_next item_4">
									<div className="body_item_elem item_set">{item.pack} шт</div>
									<div className="body_item_elem item_set">
										{item.price.toFixed(2)}
									</div>
								</div>
							</div>
							<div className="body_item_down">
								<div className="body_item_elem item_stat">
									{isAuth ? (
										<div className="item_quantity">
											<div
												style={{
													backgroundColor:
														item.quantity === "В наличии" ? "#608d98" : "white",
												}}
											></div>
											<span>{item.quantity}</span>
										</div>
									) : null}
								</div>
								<div className="body_item_elem item_stat">
									<button
										className="btn_cart"
										onClick={() => {
											const newPack = +item.pack.replace(/\s/g, "");
											addCartItems({ item, pic1, newPack });
										}}
									>
										<span>В корзину</span>
									</button>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<style jsx>{`
				.table_mobile {
					display: none;
				}

				.table_head {
					position: sticky;
					top: 140px;
					width: 100%;
					z-index: 83;
				}

				.table_body {
					width: 100%;
					flex-direction: column;
				}

				.head_item {
					color: #608d98;
					text-transform: uppercase;
					font-size: 8px;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: space-between;
					text-align: center;
					border: 1px solid #dee2e6;
					padding: 5px 1px;
					background-color: #ebebeb;
					border: 1px solid #608d98;
				}

				.body_item {
					display: flex;
					flex-direction: column;
					margin: 2px 0;
					border: 1px solid #608d98;
				}

				.body_item_up {
					display: flex;
					min-height: 35px;
					background-color: #ebebeb;
				}
				.body_item_down {
					height: 23px;
					display: flex;
					justify-content: space-between;
					align-items: center;
					background-color: #ebebeb;
					padding: 0 5px;
				}

				.body_item_elem {
					padding: 3px 0;
					font-weight: bold;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.body_item_stat {
					text-transform: uppercase;
					font-size: 8px;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: flex-start;
					text-align: center;
					border: 1px solid #dee2e6;
					background-color: #ebebeb;
				}

				.item_quantity {
					display: flex;
					justify-content: space-between;

					align-items: center;
				}

				.item_quantity div {
					border-radius: 50%;
					width: 8px;
					height: 8px;
					margin-right: 3px;
					border: 2px solid #608d98;
				}

				.item_quantity span {
					text-transform: uppercase;
					font-size: 8px;
					font-weight: bold;
				}

				.item_next {
					border-left: none;
				}

				.item_1 {
					width: 35%;
				}

				.item_2 {
					width: 20%;
				}

				.item_3 {
					width: 20%;
				}

				.item_4 {
					width: 25%;
				}

				.btn_cart {
					background-color: #608d98;
					border: none;
					width: 100%;
					height: 17px;
					font-size: 7px;
					color: white;
					text-transform: uppercase;
					border-radius: 3px;
					cursor: pointer;
					outline: none;
				}

				.btn_cart:hover {
					background-color: #82a7b0;
				}

				@media (max-width: 576px) {
					.table_mobile {
						display: flex;
					}

					.table_head {
						top: 120px;
					}
				}

				@media (max-width: 400px) {
					.btn_cart {
						font-size: 8px;
					}

					.table_head {
						top: 145px;
					}

					.head_item {
						font-size: 8px;
					}

					.item_set span {
						font-size: 6px;
					}
				}

				@media (max-height: 500px) {
					.table_head {
						position: static;
						z-index: 0
					}
				}
			`}</style>
		</>
	);
}
