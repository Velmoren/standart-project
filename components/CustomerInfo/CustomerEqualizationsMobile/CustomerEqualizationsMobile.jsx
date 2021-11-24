import { useState, useEffect } from "react";
import EqualizationsInfoInfo from "./EqualizationsInfo";
import ModalWrapper from "../../ModalWrapper";
import ModalMiniWrapper from "../../ModalMiniWrapper";
import PagePagination from "../../PagePagination/PagePagination";
import PageSelectCountPage from "../../PageSelectCountPage";
import Spinner from "../../Spinner";
import SpinnerMini from "../../SpinnerMini";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import {getCustomerEqualizations, getOrderInvoice} from '../../../action/getCustomer'

export default function CustomerEqualizationsMobile(props) {
	const {
		userId,
		equalization,
		acChangeEqualization,
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
	const [id, setId] = useState("");

	const [isMiniLoading, setIsMiniLoading] = useState(false);
	const [isDownload, setIsDownload] = useState(false);
	const [downloadId, setDownloadId] = useState("");
	const [urlPdf, setUrlPdf] = useState("");

	useEffect(() => {
		setIsLoading(true);
		if (userId !== "") {
			getCustomerEqualizations(userId, currentPage, countPage, startData, endData).then((data) => {
				acChangeEqualization(data.Documents);
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

	return (
		<>
			{equalization.map((order, index) => {
				return (
					<div className="order_box" key={index}>
						<div className="number_order row_item">
							<span className="description_text">Номер</span>
							<span className="order_text">{order.Doc_Number}</span>
						</div>

						<div className="contract_order row_item">
							<span className="description_text">Договор</span>
							<span className="order_text">{order.Contract}</span>
						</div>

						<div className="date_order row_item">
							<span className="description_text">Дата</span>
							<span className="order_text">{order.Doc_Date}</span>
						</div>

						<div className="bso_order row_item">
							<span className="description_text">Номер БСО</span>
							<span className="order_text">
								{order.TypeBSO} {order.SeriaBSO} {order.NumBSO}
							</span>
						</div>

						<div className="none_order row_item">
							<span className="description_text"></span>
							<span className="order_text"></span>
						</div>

						<div className="delivery_order row_item">
							<span className="description_text">Доставка</span>
							<span className="order_text">{order.delivery}</span>
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
									setId(order.Doc_id);
									setIsModal(true);
								}}
								className="searchLink"
								src="/image/search_btn.png"
								alt="search_btn"
								data-tip="Информация о заказе"
							/>
						</div>

						<div className="pdf_order row_item">
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
					<EqualizationsInfoInfo id={id} />
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

				.contract_order {
					width: 33%;
				}

				.delivery_order {
					width: 33%;
				}

				.bso_order {
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
