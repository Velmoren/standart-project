import Link from "next/link";
import contacts from "../../resources/contacts";

export default function Footer() {
    const {city, index, adress, office, number1, number2, email, unp} = contacts;

    const logget = () => {
        fetch('/api/bolts').then(data => data.json()).then(res => console.log(res))
    }

    return (
        <footer className="footer">
            <div className="container">
                <div className="box">
                    <div className="top">
                        <div className="links">
                            <div className="links_item">
                                <Link href="/catalog">
                                    <a>
                                        <strong>Каталог</strong>
                                    </a>
                                </Link>
                                <Link href="/news">
                                    <a>
                                        <strong>Новости</strong>
                                    </a>
                                </Link>
                                <Link href="/about">
                                    <a>
                                        <strong>О компании</strong>
                                    </a>
                                </Link>
                                <Link href="/contacts">
                                    <a>
                                        <strong>Контакты</strong>
                                    </a>
                                </Link>
                            </div>
                            <div className="links_item">
                                <div className="contacts">
									<span>
										{index} {city}
									</span>
                                    <span>
										{adress}, {office}
									</span>
                                </div>
                                <div className="contacts">
                                    <strong>ВРЕМЯ РАБОТЫ</strong>
                                    <span>пн.-пт. 09:00-17:00</span>
                                </div>
                                <div className="unp">
                                    <strong>УНП</strong>
                                    <span>
										{unp}
									</span>
                                </div>
                            </div>
                            <div className="links_item">
                                <div className="contacts">
                                    <strong>ТЕЛЕФОНЫ</strong>
                                    <a href={`tel:${number1}`}>{number1}</a>
                                    <a href={`tel:${number2}`}>{number2}</a>
                                </div>
                                <div className="contacts">
                                    <strong>E-MAIL</strong>
                                    <a href={`mailto:${email}`}>{email}</a>
                                </div>
                            </div>
                            <div className="links_item">
                                <div className="catalogs">
                                    <a
                                        href="http://pic.standart.by/catalog_pdf/Katalog_STANDART.pdf"
                                        className="catalog"
                                        download
                                    >
                                        <span>каталог</span>
                                    </a>
                                    <a href="#" className="price">
                                        <span>прайс-лист</span>
                                    </a>
                                </div>
                            </div>
                            <div className="links_item">
                                <div className="languages" onClick={logget}>
                                    <Link href="/">
                                        <a>ENG</a>
                                    </Link>
                                    <Link href="/">
                                        <a>РУС</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="down">
                        <div className="payment-logo">
                            <div className="payment-logo__item payment-logo__item-1">
                                <img src="/image/logos-payment/visa.svg" alt="visa"/>
                            </div>
                            <div className="payment-logo__item payment-logo__item-2">
                                <img src="/image/logos-payment/maestro.svg" alt="maestro"/>
                            </div>
                            <div className="payment-logo__item payment-logo__item-3">
                                <img src="/image/logos-payment/belcard-squire.png" alt="belcard"/>
                            </div>
                            <div className="payment-logo__item payment-logo__item-4">
                                <img src="/image/logos-payment/mastercard.svg" alt="mastercard"/>
                            </div>
                            <div className="payment-logo__item payment-logo__item-5">
                                <img src="/image/logos-payment/erip.png" alt="erip"/>
                            </div>
                        </div>
                        <span>© 2017 Все права защищены. ООО "СтандартКонтакт"</span>
                    </div>
                </div>
            </div>

            <style lang="scss" jsx>{`
				.footer {
					padding: 15px 0;
					background-color: #404c54;
					color: #9eb9ca;
				}

				.footer a {
					color: #9eb9ca;
					text-decoration: none;
				}

				.footer a:hover {
					opacity: 0.7;
				}

				.box {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
				}

				.top {
					display: flex;
					justify-content: space-between;
					margin-bottom: 10px;
				}

				.links {
					display: flex;
					justify-content: space-between;
					width: 100%;
					line-height: 20px;
				}

				.links_item {
					display: flex;
					flex-direction: column;
				}

				.contacts {
					display: flex;
					flex-direction: column;
				}
				
				.unp {
					display: flex;
					flex-direction: column;
				}

				.catalog {
					width: 130px;
				}

				.catalogs > a {
					display: flex;
					border: 1px solid #9eb9ca;
					border-radius: 5px;
					background-repeat: no-repeat;
					background-position: 10px center;
					margin-bottom: 10px;
				}

				.catalogs > a:hover {
					opacity: 0.7;
				}

				.catalog {
					padding: 10px 10px 10px 40px;
					background-image: url("/image/catalog_pdf_btn.png");
				}

				.price {
					width: 130px;
					padding: 10px 10px 10px 40px;
					background-image: url("/image/price_pdf_btn.png");
				}
				.languages a {
					width: 55px;
				}
				.languages > a {
					display: flex;
					border: 1px solid #9eb9ca;
					border-radius: 5px;
					background-repeat: no-repeat;
					background-position: 10px center;
					margin-bottom: 10px;
					padding: 10px;
				}
				.languages > a:hover {
					opacity: 0.7;
				}
				
				.payment-logo {
                   display:flex;
                   justify-content:flex-end;
                   padding: 5px 0;
                   //background-color: #596670;
                   box-shadow: 0 0 10px rgba(0,0,0,0.5);
                   border-radius: 5px;
				}
				
				.payment-logo__item {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  margin: 0 10px;
				}
				
				.payment-logo__item img {
                   object-fit: cover;
                   max-width: none;
				}
				
				.payment-logo__item-1 {
				  width: 50px;
				}
				.payment-logo__item-2 {
				  width: 50px;
				}
				.payment-logo__item-3 {
				  width: 30px;
				}
				.payment-logo__item-4 {
				  width: 50px;
				}
				.payment-logo__item-5 {
				  width: 75px;
				}
				
				.payment-logo__item-1 img{
				  height: 30px;
				  width: 60px;
				}
				.payment-logo__item-2 img, .payment-logo__item-4 img{
				  height: 30px;
				  width: 50px;
				}
				.payment-logo__item-3 img{
				  height: 30px;
				  width: 30px;
				}
				.payment-logo__item-5 img{
                  height: 25px;
                  width: 75px;
				}
				
				.down {
				  display: flex;
				  justify-content: space-between;
				  align-items: flex-end;
				}

				@media (max-width: 991px) {
					.links {
						flex-wrap: wrap;
						justify-content: space-between;
						line-height: 16px;
					}

					.links_item {
						width: 30%;
						font-size: 12px;
					}

					.catalog {
						padding: 8px 8px 8px 40px;
						width: 115px;
					}

					.price {
						padding: 8px 8px 8px 40px;
						width: 115px;
					}

					.languages a {
						padding: 8px;
						width: 45px;
					}

					.languages {
						display: flex;
						flex-direction: column;
						align-items: flex-end;
					}
					
					.payment-logo {
					  justify-content: center;
					}
					
					.payment-logo__item {
					  margin: 0 5px;
					}
	
					.payment-logo__item-1 {
                      width: 50px;
                    }
                    .payment-logo__item-2 {
                      width: 50px;
                    }
                    .payment-logo__item-3 {
                      width: 30px;
                    }
                    .payment-logo__item-4 {
                      width: 50px;
                    }
                    .payment-logo__item-5 {
                      width: 75px;
                    }
                        
                    .payment-logo__item-1 img{
                      height: 20px;
                      width: 50px;
                    }
                    .payment-logo__item-2 img, .payment-logo__item-4 img{
                      height: 20px;
                      width: 30px;
                    }
                    .payment-logo__item-3 img{
                      height: 20px;
                      width: 20px;
                    }
                    .payment-logo__item-5 img{
                      height: 15px;
                      width: 50px;
                    }
                }

				@media (max-width: 768px) {
					.footer {
						font-size: 12px;
					}

					.links_item {
						font-size: 10px;
					}

					.catalog {
						padding: 5px 5px 5px 35px;
						width: 100px;
						background-size: 15px;
					}

					.price {
						padding: 5px 5px 5px 35px;
						width: 100px;
						background-size: 15px;
					}

					.languages a {
						padding: 5px;
						width: 35px;
					}
					
					.down {
					  flex-direction: column;
					  align-items: center;
					}
					
					.down .payment-logo {
					  margin-bottom: 20px;
					}
				}

				@media (max-width: 576px) {
					.links_item {
						width: 100%;
						align-items: center;
						flex-direction: row;
						justify-content: space-between;
						padding: 10px 0;
					}

					.links_item:nth-child(1) {
						font-size: 12px;
					}

					.catalogs,
					.languages {
						width: 100%;
						display: flex;
						flex-direction: row;
						justify-content: space-between;
					}

					.down {
						font-size: 10px;
					}

					.links_item:nth-child(2) {
						flex-direction: column;
						width: 50%;
						align-items: flex-start;
					}

					.links_item:nth-child(3) {
						flex-direction: column;
						width: 40%;
						align-items: flex-end;
						text-align: right;
					}
				}

				@media (max-width: 400px) {
					.links_item {
						padding: 5px 0;
					}

					.links_item:nth-child(1) {
						font-size: 10px;
					}
					
					.payment-logo__item {
					  margin: 0;
					}
				}
			`}</style>
        </footer>
    );
}
