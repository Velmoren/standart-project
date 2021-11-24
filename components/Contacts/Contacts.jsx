import contacts from "../../resources/contacts";

export default function Contacts(props) {
	const { colorText, paddingBox, backgroundBox } = props;
	const { city, index, adress, office, number1, number2, email } = contacts;

	return (
		<div className="contacts">
			<div className="item">
				<div className="item_left">
					<img src="/image/phone.png" alt="phone" className="item_image" />
					<span className="item_text">телефоны</span>
				</div>
				<div className="item_right">
					<a href={`tel:${number1}`} className="jsxText">
						{number1}
					</a>
					<a href={`tel:${number2}`} className="jsxText">
						{number2}
					</a>
				</div>
			</div>
			<div className="item">
				<div className="item_left">
					<img src="/image/map.png" alt="map" className="item_image" />
					<span className="item_text">адрес</span>
				</div>
				<div className="item_right">
					<span className="jsxText">
						{index}, {city}
					</span>
					<span className="jsxText">
						{adress}, {office}
					</span>
				</div>
			</div>
			<div className="item">
				<div className="item_left">
					<img src="/image/time.png" alt="time" className="item_image" />
					<span className="item_text">работаем</span>
				</div>
				<div className="item_right">
					<span className="jsxText">ПН-ПТ 09:00-17:00</span>
				</div>
			</div>
			<div className="item">
				<div className="item_left">
					<img src="/image/mail.png" alt="mail" className="item_image" />
					<span className="item_text">e-mail</span>
				</div>
				<div className="item_right">
					<a href={`mailto:${email}`} className="jsxText">
						{email}
					</a>
				</div>
			</div>

			<style jsx>{`
				.jsxText {
					color: ${colorText};
					font-weight: bold;
				}

				.contacts {
					padding: ${paddingBox};
					background: ${backgroundBox};
					position: sticky;
					top: 570px;
				}

				.item {
					display: flex;
					align-items: center;
					margin-bottom: 5px;
				}

				.item_left {
					width: 56px;
					height: 56px;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					border-radius: 5px;
					background: #404c54;
					margin-right: 15px;
				}

				.item_left img {
					margin-bottom: 5px;
				}

				.item_left span {
					text-transform: uppercase;
					font-size: 8px;
				}
				.item_right {
					display: flex;
					flex-direction: column;
				}
				.item_right a {
					text-decoration: none;
				}
				.item_right a:hover {
					opacity: 0.7;
				}
				.item_text {
					color: white;
				}

				@media (max-width: 1200px) {
					.item_left {
						height: 50px;
					}
				}

				@media (max-width: 991px) {
					.item_right a,
					.item_right span {
						font-size: 8px;
					}

					.item_left {
						width: 35px;
						height: 35px;
					}

					.item_left img {
						margin-bottom: 0;
					}

					.item_left span {
						display: none;
					}
				}

				@media (max-width: 768px) {
					.contacts {
						width: 32%;
					}

					.item {
						justify-content: space-between;
					}

					.item_right {
						order: 1;
					}

					.item_left {
						order: 2;
					}
				}

				@media (max-width: 576px) {
					.contacts {
						display: none;
					}
				}
			`}</style>
		</div>
	);
}
