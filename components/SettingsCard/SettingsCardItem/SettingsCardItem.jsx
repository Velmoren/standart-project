import { sliceGosts } from "../../../action";

export default function SettingsCardItem(props) {
	const { goods, addCartItems, isAuth, pic1 } = props;

	return (
		<>
			{goods.map((item, i, arr) => {
				const {
					id,
					name,
					description,
					form,
					dimA,
					dimB,
					dimC,
					mat,
					pack,
					price,
					cov,
					barcode,
					TYPE,
					VALUE,
					quantity,
				} = item;

				return (
					<tr key={barcode}>
						<th className="th_body th_standart th-1">{sliceGosts(name)}</th>
						<th className="th_body th_standart th-2">{description}</th>
						<th className="th_body th-3">
							{TYPE} {VALUE}
						</th>
						<th className="th_body th-4">
							{dimA} {dimB ? `Х ${dimB}` : null} {dimC ? `Х ${dimC}` : null}
						</th>
						<th className="th_body th-5">{mat}</th>
						<th className="th_body th-6">{cov}</th>
						<th className="th_body th-7">{pack} шт</th>
						<th className="th_body th-8">{price.toFixed(2)}</th>
						{isAuth ? <th className="th_body th-9">{quantity}</th> : null}
						<th className="th_body th-10">
							<button
								className="btn_cart"
								onClick={() => {
									const newPack = +pack.replace(/\s/g, "");
									addCartItems({ item, pic1, newPack });
								}}
							>
								<img src="/image/cart_btn.png" alt="cart_btn" />
							</button>
						</th>
					</tr>
				);
			})}
			<style jsx>{`
				.th {
					padding: 15px;
					color: #608d98;
					text-transform: uppercase;
					font-size: 10px;
				}
				.th_body {
					background-color: rgba(0, 0, 0, 0.05);
					padding: 5px 2px;
					height: 40px;
					font-size: 12px;
					border: 1px solid #dee2e6;
				}

				.th_standart {
					width: 150px;
				}

				.input_count {
					width: 80px;
					height: 35px;
					border-radius: 5px;
					box-shadow: none;
					border: 1px solid #b8c9d6;
					outline: none;
					color: #80a4ad;
					font-size: 16px;
					padding: 5px;
				}

				.btn_cart {
					background-color: #608d98;
					border: none;
					width: 50px;
					height: 35px;
					border-radius: 5px;
					cursor: pointer;
					outline: none;
				}

				.btn_cart:hover {
					background-color: #82a7b0;
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
					.th_body {
						font-size: 10px;
					}

					.btn_cart {
						width: 30px;
						height: 30px;
					}

					.btn_cart img {
						width: 25px;
					}
				}
			`}</style>
		</>
	);
}
