import Contacts from "../Contacts";

export default function Description() {
	return (
		<div className="block">
			<div className="text">
				<h3 className="title">Кто мы?</h3>
				<p className="subtitle">
					Компания Стандарт Контакт реализует метизную продукцию в Минске1. У
					нас представлен широкий ассортимент крепежных изделий, мы предлагаем
					купить метизы оптом в любых объемах
				</p>
			</div>
			<Contacts
				colorText={"white"}
				paddingBox={"0"}
				backgroundBox={"inherit"}
			/>
			<style jsx>{`
				.title {
					text-transform: uppercase;
					font-size: 20px;
					margin-top: 10px;
					margin-bottom: 5px;
					color: white;
				}

				.subtitle {
					line-height: 26px;
					margin-bottom: 40px;
					color: white;
				}

				@media (max-width: 1200px) {
					.title {
						font-size: 16px;
					}

					.subtitle {
						font-size: 12px;
						line-height: 20px;
						margin-bottom: 20px;
					}
				}

				@media (max-width: 991px) {
					.title {
						font-size: 12px;
						margin-top: 5px;
					}

					.subtitle {
						font-size: 10px;
						line-height: 16px;
						margin-bottom: 40px;
					}
				}

				@media (max-width: 768px) {
					.block {
						display: flex;
						justify-content: space-between;
					}

					.text {
						width: 45%;
					}
				}

				@media (max-width: 576px) {
					.text {
						width: 100%;
					}

					.title {
						font-size: 12px;
						text-align: center;
					}

					.subtitle {
						font-size: 11px;
						line-height: 18px;
						text-align: center;
					}
				}

				@media (max-width: 400px) {
					.block {
						flex-direction: column;
					}

					.text {
						width: 100%;
					}
				}
			`}</style>
		</div>
	);
}
