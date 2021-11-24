export default function AboutCompany(props) {
	const { info } = props;

	return (
		<div className="box">
			<h3 className="title">
				Предприятие СТАНДАРТ основано в 1989 году. Поставкой и реализацией
				метизной продукции в Республике Беларусь и странах СНГ мы занимаемся с
				2002 года.
			</h3>
			<img src="/image/about_img.jpg" alt="about_img" className="image" />
			<strong className="title_mini">о компании</strong>
			<p className="paragraph">
				Наше предприятие предлагает полный сервис в области поставки крепежных
				изделий для производства сельхозтехники, ремонта машин и оборудования,
				для строительства, энергетики, нефтехимической отрасли, станко и
				машиностроения, а также троса стальные и арматуру для них,
				соединительные элементы для дерева производства стран ЕВРОСОЮЗА более
				40000 наименований и типоразмеров.
			</p>
			<p className="paragraph">
				Предлагаем изделия из следующих материалов и видов покрытий, согласно
				норм DIN, ISO, PN, ГОСТ, EN, ANSI, UNI, в классах прочности 4.6, 5.6,
				5.8, 6.8, 8.8, 10.9, 12.9, 14.9:
			</p>

			<ul className="list">
				<li className="list_item">
					изготовленные из стали в т.ч. нержавеющей, кислотостойкой,
					огнестойкой, алюминия, латуни, бронзы, меди, титана и полиамида;
				</li>
				<li className="list_item">
					изделия с метрической, мелкой метрической, и дюймовой резьбой;
				</li>
				<li className="list_item">
					с покрытием антикоррозийным: гальванический цинк, горячий цинк,
					фосфатирование и другие;
				</li>
				<li className="list_item">
					комплекты HV для напряженных стальных конструкций (болт, гайка,
					шайбы);
				</li>
				<li className="list_item">диаметры от 1 мм до 120 мм;</li>
			</ul>

			<p className="paragraph">
				Гарантируем высокое качество и взаимовыгодные условия сотрудничества.
				Надеемся, что и Вы будете в числе постоянных партнеров нашего
				предприятия !!!
			</p>
			<strong className="title_mini">реквизиты</strong>

			<table className="requisites">
				<tbody>
					<tr>
						<th>Владелец магазина</th>
						<td>{info.name}</td>
					</tr>
					<tr>
						<th>Свидетельство о регистрации</th>
						<td>УНП {info.unp} от 20.06.2006 г.</td>
					</tr>
					<tr>
						<th>Дата регистрации в Торговом реестре РБ</th>
						<td>{info.regdate} г.</td>
					</tr>
					<tr>
						<th>Юридический адрес</th>
						<td>{info.ur_adress}</td>
					</tr>
					<tr>
						<th>Контактные телефоны</th>
						<td>
							<span>{info.tel},</span> <span>{info.tel1}</span>
						</td>
					</tr>
					<tr>
						<th>Адрес для почтовых отправлений</th>
						<td>{info.post_adress}</td>
					</tr>
				</tbody>
			</table>
			<style jsx>{`
				.box {
					display: flex;
					flex-direction: column;
					padding-bottom: 10px;
				}

				.title {
					font-size: 24px;
					font-style: italic;
					color: #9eb9ca;
					margin-top: 0;
					margin-bottom: 20px;
					line-height: 32px;
					text-align: center;
				}

				.image {
					border-radius: 5px;
				}

				.title_mini {
					margin: 10px 0;
					font-size: 14px;
					display: block;
					font-weight: bold;
					color: #9eb9ca;
					text-transform: uppercase;
				}

				.paragraph {
					font-size: 16px;
					line-height: 28px;
				}

				.list {
					padding: 0;
					list-style-position: inside;
					font-size: 16px;
					line-height: 28px;
				}

				th {
					color: #9eb9ca;
				}

				tr,
				th,
				td {
					width: 50%;
					text-align: left;
					padding: 10px 5px;
				}
				tr:nth-child(2n) {
					background: #ebebeb;
				}

				tr:nth-child(2n) th {
					border-top-left-radius: 5px;
					border-bottom-left-radius: 5px;
				}

				tr:nth-child(2n) td {
					border-top-right-radius: 5px;
					border-bottom-right-radius: 5px;
				}

				@media (max-width: 1370px) {
					.title {
						font-size: 20px;
					}
				}

				@media (max-width: 1200px) {
					.title {
						font-size: 18px;
					}

					.paragraph {
						font-size: 14px;
						line-height: 24px;
					}

					.list {
						font-size: 14px;
						line-height: 24px;
					}
				}

				@media (max-width: 991px) {
					.title {
						font-size: 14px;
						line-height: 24px;
					}

					.paragraph {
						font-size: 12px;
						line-height: 20px;
					}

					.list {
						font-size: 12px;
						line-height: 20px;
					}
					tr,
					th,
					td {
						font-size: 12px;
					}
				}

				@media (max-width: 576px) {
					td span {
						display: block;
					}
				}

				@media (max-width: 400px) {
					.title {
						font-size: 12px;
						line-height: 16px;
					}

					.title_mini {
						font-size: 12px;
					}

					.paragraph {
						font-size: 10px;
						line-height: 16px;
					}
					tr,
					th,
					td {
						font-size: 10px;
					}

					.list {
						font-size: 10px;
						line-height: 16px;
					}
				}
			`}</style>
		</div>
	);
}
