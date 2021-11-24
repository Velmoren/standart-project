import OrderInfo from "./OrderInfo";
import ModalWrapper from "../../ModalWrapper";
import { useState, useEffect } from "react";
import Spinner from "../../Spinner";
import SpinnerMini from "../../SpinnerMini";
import PagePagination from "../../PagePagination/PagePagination";
import PageSelectCountPage from "../../PageSelectCountPage";
import ModalMiniWrapper from "../../ModalMiniWrapper/ModalMiniWrapper";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import {getCustomerOrders, getOrderInvoice} from '../../../action/getCustomer'
import {getEripPayment, getCardPayment} from '../../../action/getPayment'

export default function CustomerOrdersBlockMobile(props) {
	const {
		userId,
		orders,
		acChangeOrders,
		size,
		acChangeSize,
		countPage,
		acChangeCountPage,
		currentPage,
		incCurrentPage,
		decCurrentPage,
		changeCurrentPage,
		startData,
		endData,
	} = props;

	const [isLoading, setIsLoading] = useState(false);
	const [isModal, setIsModal] = useState(false);
	const [orderId, setOrderId] = useState("");

	const [isMiniLoading, setIsMiniLoading] = useState(false);
	const [isDownload, setIsDownload] = useState(false);
	const [downloadId, setDownloadId] = useState("");
	const [urlPdf, setUrlPdf] = useState("");

	const [eripLink, setEripLink] = useState("");
	const [modalEripLink, setModalEripLink] = useState(false);
	const [modalEripLoading, setModalEripLoading] = useState(false);

	const [cardLink, setCardLink] = useState("");
	const [modalCardLink, setModalCardLink] = useState(false);
	const [modalCardLoading, setModalCardLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		if (userId !== "") {
			getCustomerOrders(userId, currentPage, countPage, startData, endData).then((data) => {
				acChangeOrders(data.Documents);
				setIsLoading(false);
				acChangeSize(Math.ceil(data.totalsize / countPage));
			})
		}
	}, [userId, currentPage, countPage, startData, endData]);

	useEffect(() => {
		setIsMiniLoading(true);
		if (isDownload) {
			getOrderInvoice(downloadId).then((res) => {
				setUrlPdf(res === 0 ? "" : res)
				setIsMiniLoading(false);
			})
		}
	}, [isDownload]);

	const getErip = (num, sum, cur, info) => {
		setModalEripLink(true);
		setModalEripLoading(true);

		getEripPayment(num, sum, cur, info).then((data) => {
			setEripLink(data.InvoiceUrl);
			setModalEripLoading(false);
		})
	};

	const getCardPay = (num, sum, cur, info) => {
		setModalCardLink(true);
		setModalCardLoading(true);

		getCardPayment(num, sum, cur, info).then((data) => {
			setCardLink(data.FormUrl);
			setModalCardLoading(false);
		})
	};

	return (
		<>
			{orders.map((order, index) => {
				return (
					<div className="order_box" key={index}>
						<div className="number_order row_item">
							<span className="description_text">Номер</span>
							<span className="order_text">{order.Doc_Number}</span>
						</div>

						<div className="date_order row_item">
							<span className="description_text">Дата</span>
							<span className="order_text">{order.Doc_Date}</span>
						</div>

						<div className="load_order row_item">
							<span className="description_text">Дата отгрузки</span>
							<span className="order_text">{order.LoadDate}</span>
						</div>

						<div className="delivery_order row_item">
							<span className="description_text">Доставка</span>
							<span className="order_text">{order.delivery}</span>
						</div>

						<div className="none_order row_item">
							<span className="description_text"></span>
							<span className="order_text"></span>
						</div>

						<div className="status_order row_item">
							<span className="description_text">Статус</span>
							<span className="order_text">{order.Status}</span>
						</div>

						<div className="price_order row_item">
							<span className="description_text">Стоимость</span>
							<span className="order_text">{order.Sum} руб.</span>
						</div>

						<div className="nds_order row_item">
							<span className="description_text">НДС</span>
							<span className="order_text">{order.Sum_NDS} руб.</span>
						</div>

						<div className="total_order row_item">
							<span className="description_text">Итого</span>
							<span className="order_text">{order.Sum_total} руб.</span>
						</div>

						<div className="detail_order row_item">
							<img
								onClick={() => {
									disablePageScroll(document.body);
									setOrderId(order.Doc_id);
									setIsModal(true);
								}}
								className="searchLink"
								src="/image/search_btn.png"
								alt="search_btn"
								data-tip="Информация о заказе"
							/>
						</div>

						<div className="pdf_order row_item">
							{order.Status === "Готов к обеспечению" ? (
								<>
									<img
										className="pdfLink"
										src="/image/pdf.svg"
										alt="pdf"
										data-tip="Счет на оплату"
										onClick={() => {
											disablePageScroll(document.body);
											setDownloadId(order.Doc_id);
											setIsDownload(true);
										}}
									/>
								</>
							) : null}
						</div>

						<div className="payment_order row_item">
							{order.Status !== "Ожидается согласование" ? (
								order.Payment === "ЕРИП" ? (
									<img
										className="pdfLink"
										src="/image/erip.jpg"
										alt="pdf"
										data-tip={order.Payment}
										data-border-color="#404c54"
										onClick={() => {
											getErip(
												order.Doc_Number,
												order.Sum_total,
												order.Currency_id,
												"оплата по ЕРИП"
											);
										}}
									/>
								) : (
									<img
										className="pdfLink"
										src="/image/credit-cards.svg"
										alt="pdf"
										data-tip={order.Payment}
										data-border-color="#404c54"
										onClick={() => {
											getCardPay(
												order.Doc_Number,
												order.Sum_total,
												order.Currency_id,
												"оплата по карте"
											);
										}}
									/>
								)
							) : null}
						</div>
					</div>
				);
			})}

			{isLoading ? <Spinner /> : null}

			<div className="buttons_tab">
				<PageSelectCountPage
					setCountPage={acChangeCountPage}
					changeCurrentPage={changeCurrentPage}
				/>
				<PagePagination
					count={size}
					currentPage={currentPage}
					incCurrentPage={incCurrentPage}
					decCurrentPage={decCurrentPage}
					changeCurrentPage={changeCurrentPage}
				/>
			</div>

			{isModal ? (
				<ModalWrapper setIsModal={setIsModal}>
					<OrderInfo id={orderId} />
				</ModalWrapper>
			) : null}

			{isDownload ? (
				<ModalMiniWrapper setIsModal={setIsDownload}>
					{isMiniLoading ? (
						<SpinnerMini />
					) : urlPdf === "" ? (
						<span className="MessText">Файл отсутствует</span>
					) : (
						<a className="MessText" target="_blank" href={urlPdf}>
							Ссылка на скачивание файла
						</a>
					)}
				</ModalMiniWrapper>
			) : null}

			{modalEripLink ? (
				<ModalMiniWrapper setIsModal={setModalEripLink}>
					{modalEripLoading ? (
						<SpinnerMini />
					) : (
						<a className="MessText" href={eripLink} target="_blank">
							Ссылка на платеж системой ЕРИП
						</a>
					)}
				</ModalMiniWrapper>
			) : null}

			{modalCardLink ? (
				<ModalMiniWrapper setIsModal={setModalCardLink}>
					{modalCardLoading ? (
						<SpinnerMini />
					) : (
						<a className="MessText" href={cardLink} target="_blank">
							Ссылка на оплату пластиковой картой
						</a>
					)}
				</ModalMiniWrapper>
			) : null}

			<style jsx>{`
				.order_box {
					width: 100%;
					border: 1px solid #404c54;
					margin-bottom: 10px;
					padding: 5px;
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;
				}

				.row_item {
					display: flex;
					flex-direction: column;
					align-items: center;
					margin-bottom: 5px;
				}

				.number_order {
					width: 33%;
				}

				.date_order {
					width: 33%;
				}

				.load_order {
					width: 33%;
				}

				.delivery_order {
					width: 33%;
				}

				.status_order {
					width: 33%;
				}

				.none_order {
					width: 33%;
				}

				.price_order {
					width: 33%;
				}

				.nds_order {
					width: 33%;
				}

				.total_order {
					width: 33%;
				}

				.detail_order {
					width: 33%;
				}

				.pdf_order {
					width: 33%;
				}

				.payment_order {
					width: 33%;
				}

				.description_text {
					font-size: 8px;
				}

				.order_text {
					font-size: 10px;
				}

				.searchLink {
					width: 30px;
				}

				.pdfLink {
					width: 30px;
				}

				.MessText {
					font-size: 20px;
					color: #404c54;
					text-decoration: none;
				}

				.buttons_tab {
					display: flex;
					justify-content: space-between;
					align-items: center;
				}

				@media (max-width: 400px) {
					.delivery_order {
						width: 35%;
					}

					.status_order {
						width: 35%;
					}

					.none_order {
						width: 30%;
					}

					.description_text {
						font-size: 6px;
					}

					.order_text {
						font-size: 8px;
					}

					.searchLink {
						width: 20px;
					}

					.pdfLink {
						width: 20px;
					}
				}
			`}</style>
		</>
	);
}
