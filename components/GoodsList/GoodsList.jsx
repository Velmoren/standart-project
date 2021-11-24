import Link from "next/link";
import MessageNotFound from "../Elements/MessageNotFound";
import { useState, useEffect } from "react";

function GoodsList(props) {
	const { goods, namePage } = props;
	const [items, setItems] = useState([]);

	useEffect(() => {
		setItems(goods);
	}, [goods]);

	if (goods.length === 0) {
		return <MessageNotFound />;
	}

	return (
		<>
			{items.map((item, index) => {
				const { STANDARTID, STANDARTNAME, Files } = item;

				if (STANDARTNAME && STANDARTID) {
					return (
						<div className="box" key={index}>
							<div className="image">
								<Link
									href={`/catalog/${namePage ? namePage : item.typeName}/[id]`}
									as={`/catalog/${
										namePage ? namePage : item.typeName
									}/${STANDARTID}`}
								>
									<a>
										<img
											src={
												Files.Pictures.length !== 0
													? "http://pic.standart.by/" +
													  Files.Pictures[0].FilePath.substr(12)
													: `/image/prod_img.jpg`
											}
											alt="prod_img"
										/>
									</a>
								</Link>
							</div>
							<div className="description">
								<Link
									href={`/catalog/${namePage ? namePage : item.typeName}/[id]`}
									as={`/catalog/${
										namePage ? namePage : item.typeName
									}/${STANDARTID}`}
								>
									<a className="title">{STANDARTNAME}</a>
								</Link>
								<div className="description_items">
									<div className="description_item">
										<h3>{item.Properties.TYPE}</h3>
										<span>{item.Properties.VALUE}</span>
									</div>
									{item.Properties.ANALOG.map((analog, index) => {
										return (
											<div className="description_item" key={index}>
												<h3>{analog.TYPE}</h3>
												<span>{analog.VALUE}</span>
											</div>
										);
									})}
								</div>
							</div>
							<div className="button">
								<Link
									href={`/catalog/${namePage ? namePage : item.typeName}/[id]`}
									as={`/catalog/${
										namePage ? namePage : item.typeName
									}/${STANDARTID}`}
								>
									<a>
										<span>в каталог</span>
									</a>
								</Link>
							</div>
						</div>
					);
				} else {
					return null;
				}
			})}
			<style jsx>{`
				.box {
					display: flex;
					justify-content: space-between;
					width: 100%;
					min-height: 110px;
				}
				.box:nth-child(2n + 1) .description,
				.box:nth-child(2n + 1) .button {
					background-color: #f8f8f8;
				}

				.title {
					text-decoration: none;
					color: #608d98;
					font-weight: bold;
					margin: 8px 0;
					font-size: 16px;
					position: relative;
					width: 100%;
				}
				.title:hover {
					text-decoration: underline;
				}

				.image {
					width: 15%;
					display: flex;
					justify-content: center;
					align-items: center;
					padding: 10px 15px;
				}

				.image img {
					width: 100%;
				}

				.description {
					width: 65%;
					display: flex;
					justify-content: center;
					align-items: flex-start;
					flex-direction: column;
					padding: 10px 15px;
				}

				.description_items {
					display: flex;
					flex-wrap: wrap;
				}

				.description_item {
					display: flex;
					margin-right: 15px;
				}
				.description_item h3 {
					margin: 0;
					margin-right: 10px;
					font-size: 14px;
				}

				.button {
					width: 20%;
					display: flex;
					justify-content: center;
					align-items: center;
				}
				.button a {
					text-decoration: none;
					outline: none;
					border: none;
					cursor: pointer;
					text-transform: uppercase;
					border-radius: 5px;
					padding: 12px 20px 12px 45px;
					background-color: #608d98;
					background-image: url("/image/cart_btn.png");
					background-position: 15px center;
					background-repeat: no-repeat;
					color: white;
					font-weight: bold;
				}
				.button a:hover {
					background-color: #6d9aa5;
				}

				@media (max-width: 1200px) {
					.title {
						font-size: 14px;
					}

					.button a {
						font-size: 12px;
					}
				}

				@media (max-width: 991px) {
					.box {
						min-height: 80px;
					}

					.title {
						font-size: 12px;
					}

					.button a {
						font-size: 10px;
					}
				}
				@media (max-width: 768px) {
					.image {
						padding: 8px;
					}

					.description_item {
						margin-right: 10px;
					}

					.description_item h3 {
						margin: 0;
						margin-right: 3px;
						font-size: 10px;
					}
					.description_item span {
						font-size: 10px;
					}

					.button a {
						font-size: 8px;
						padding: 10px 10px 10px 30px;
						background-position: 8px center;
						background-size: 20%;
					}
				}

				@media (max-width: 576px) {
					.image {
						width: 20%;
						padding: 5px;
					}

					.button {
						width: 10%;
					}
					.button a {
						font-size: 8px;
						padding: 12px;
						background-position: center center;
						background-size: 50%;
					}

					.button a span {
						display: none;
					}

					.description {
						width: 70%;
					}

					.description_item {
						margin-right: 5px;
					}

					.description_items h3 {
						margin-right: 3px;
						font-size: 9px;
					}

					.description_items span {
						font-size: 9px;
					}
				}

				@media (max-width: 400px) {
					.box {
						min-height: 60px;
					}

					.description {
						padding: 5px;
						width: 75%;
					}

					.title {
						font-size: 10px;
						margin: 3px 0;
					}

					.image {
						padding: 5px;
						width: 15%;
					}

					.description_items {
						margin-right: 2px;
					}

					.description_items h3 {
						margin-right: 2px;
						font-size: 8px;
					}

					.description_items span {
						font-size: 8px;
					}

					.button a {
						padding: 10px;
						background-size: 50%;
					}
				}
			`}</style>
		</>
	);
}

export default GoodsList;
