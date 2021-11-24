import OrderInfo from "./OrderInfo";
import ReactTooltip from "react-tooltip";
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

export default function CustomerOrdersBlock(props) {
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

	const [cardInvoiceNum, setCardInvoiceNum] = useState("");

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
			<table className="table table_desctop">
				<thead className="table_thead">
					<tr>
						<th className="th th-1">Номер</th>
						<th className="th th-2">Дата</th>
						<th className="th th-4">Стоимость</th>
						<th className="th th-5">НДС</th>
						<th className="th th-6">ИТОГО</th>
						<th className="th th-7">Доставка</th>
						<th className="th th-8">Детали</th>
						<th className="th th-9">Печать</th>
						<th className="th th-10">Статус</th>
						<th className="th th-12">Дата отгрузки</th>
						<th className="th th-11">Оплата</th>
					</tr>
				</thead>
				<tbody>
					{!isLoading ? (
						<>
							{orders.map((order, index) => {
								return (
									<tr key={index}>
										<th className="th th-1">{order.Doc_Number}</th>
										<th className="th th-2">{order.Doc_Date}</th>
										<th className="th th-4">
											{order.Sum + " "}
											{order.Currency}
										</th>
										<th className="th th-5">
											{order.Sum_NDS + " "}
											{order.Currency}
										</th>
										<th className="th th-6">
											{order.Sum_total + " "}
											{order.Currency}
										</th>
										<th className="th th-7">{order.delivery}</th>
										<th className="th th-8">
											<>
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
												<ReactTooltip
													textColor="white"
													backgroundColor="#404c54"
													borderColor="black"
												/>
											</>
										</th>
										<th className="th th-9">
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
													<ReactTooltip
														textColor="white"
														backgroundColor="#404c54"
														borderColor="black"
													/>
												</>
											) : null}
										</th>
										<th className="th th-10">{order.Status}</th>
										<th className="th th-12">{order.LoadDate}</th>
										<th className="th th-11">
											{order.Status !== "Ожидается согласование" ? (
												order.Payment === "ЕРИП" ? (
													<>
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
														<ReactTooltip
															textColor="white"
															backgroundColor="#404c54"
															borderColor="black"
														/>
													</>
												) : (
													<>
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
														<ReactTooltip
															textColor="white"
															backgroundColor="#404c54"
															borderColor="black"
														/>
													</>
												)
											) : null}
										</th>
									</tr>
								);
							})}
						</>
					) : null}
				</tbody>
			</table>
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
				.table {
					border-collapse: collapse;
					width: 100%;
					margin-bottom: 10px;
				}

				.table_thead {
					background-color: #ebebeb;
				}

				.th {
					background-color: rgba(0, 0, 0, 0.05);
					height: 50px;
					font-size: 12px;
					border: 1px solid #dee2e6;
				}

				.searchLink {
					cursor: pointer;
				}

				.pdfLink {
					width: 40px;
					cursor: pointer;
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

				.th-1 {
					width: 8%;
				}
				.th-2 {
					width: 10%;
				}
				.th-3 {
					width: 10%;
				}
				.th-4 {
					width: 8%;
				}
				.th-5 {
					width: 8%;
				}
				.th-6 {
					width: 10%;
				}
				.th-7 {
					width: 14%;
				}
				.th-8 {
					width: 4%;
				}
				.th-9 {
					width: 4%;
				}
				.th-10 {
					width: 20%;
				}
				.th-11 {
					width: 4%;
				}
				.th-12 {
					width: 10%;
				}

				@media (max-width: 1200px) {
					.th {
						height: 40px;
						font-size: 10px;
					}

					.pdfLink {
						width: 35px;
					}

					.searchLink {
						width: 35px;
					}
				}

				@media (max-width: 991px) {
					.th {
						height: 40px;
						font-size: 8px;
					}

					.pdfLink {
						width: 30px;
					}

					.searchLink {
						width: 30px;
					}
				}
			`}</style>
		</>
	);
}
