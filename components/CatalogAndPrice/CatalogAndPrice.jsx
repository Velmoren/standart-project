export default function CatalogAndPrice() {
	const checkFiles = (e) => {
		if (e.target.getAttribute("href") === "#") {
			return;
		}
	};

	return (
		<div className="buttons">
			<div className="catalog">
				<a
					href="/files/Katalog_STANDART.pdf"
					className="linkText"
					download
					onClick={checkFiles}
				>
					<span>каталог</span>
				</a>
			</div>
			<div className="price">
				<a href="#" className="linkText" onClick={checkFiles}>
					<span>прайс-лист</span>
				</a>
			</div>

			<style jsx>{`
				.linkText {
					color: white;
				}
				.buttons {
					display: flex;
					justify-content: space-between;
					margin-bottom: 45px;
				}
				.buttons span {
					width: 100px;
					font-weight: bold;
				}

				.catalog a {
					background-image: url("/image/catalog_pdf_btn_w.png");
					background-repeat: no-repeat;
					background-size: contain;
					width: 140px;
					height: 35px;
					display: flex;
					justify-content: flex-end;
					align-items: center;
					text-transform: uppercase;
					text-decoration: none;
				}
				.catalog a:hover {
					opacity: 0.7;
				}

				.price a {
					background-image: url("/image/price_pdf_btn_w.png");
					background-repeat: no-repeat;
					background-size: contain;
					width: 140px;
					height: 35px;
					display: flex;
					justify-content: flex-end;
					align-items: center;
					text-transform: uppercase;
					text-decoration: none;
				}
				.price a:hover {
					opacity: 0.7;
				}

				@media (max-width: 1370px) {
					.catalog a,
					.price a {
						width: 115px;
					}

					.buttons {
						margin-bottom: 65px;
					}

					.buttons span {
						font-size: 11px;
						width: 80px;
					}
				}

				@media (max-width: 1200px) {
					.catalog a,
					.price a {
						width: 90px;
						background-size: 20%;
						background-position: left center;
					}
					.buttons {
						margin-bottom: 85px;
					}
					.buttons span {
						font-size: 8px;
						width: 60px;
					}
				}

				@media (max-width: 991px) {
					.catalog a,
					.price a {
						width: 65px;
						background-size: 20%;
						background-position: left center;
					}

					.buttons {
						margin-bottom: 100px;
					}

					.buttons span {
						font-size: 6px;
						width: 45px;
					}
				}

				@media (max-width: 576px) {
					.buttons {
						width: 27%;
						flex-direction: column;
						align-items: flex-end;
						justify-content: flex-end;
						margin-bottom: 20px;
					}

					.catalog a,
					.price a {
						width: 100px;
						background-size: 25%;
						background-position: left center;
					}

					.catalog,
					.price {
						margin-top: 15px;
					}

					.buttons span {
						font-size: 9px;
						width: 65px;
					}
				}

				@media (max-width: 400px) {
					.catalog,
					.price {
						margin-top: 10px;
					}

					.catalog a,
					.price a {
						width: 100px;
						background-size: 20%;
						background-position: left center;
					}

					.buttons span {
						font-size: 9px;
					}
				}
			`}</style>
		</div>
	);
}
