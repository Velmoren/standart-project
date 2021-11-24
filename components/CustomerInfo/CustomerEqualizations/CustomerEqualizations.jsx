import { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import EqualizationsInfoInfo from "./EqualizationsInfo";
import ModalWrapper from "../../ModalWrapper";
import ModalMiniWrapper from "../../ModalMiniWrapper";
import PagePagination from "../../PagePagination/PagePagination";
import PageSelectCountPage from "../../PageSelectCountPage";
import Spinner from "../../Spinner";
import SpinnerMini from "../../SpinnerMini";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import {getCustomerEqualizations, getOrderInvoice} from '../../../action/getCustomer'

export default function CustomerEqualizations(props) {
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
			<table className="table">
				<thead className="table_thead">
					<tr>
						<th className="th th-1">Номер</th>
						<th className="th th-2">Дата</th>
						<th className="th th-3">Договор</th>
						<th className="th th-3">Номер БСО</th>
						<th className="th th-4">Стоимость</th>
						<th className="th th-5">НДС</th>
						<th className="th th-6">ИТОГО</th>
						<th className="th th-8">Детали</th>
						<th className="th th-9">Печать</th>
						<th className="th th-7">Доставка</th>
					</tr>
				</thead>
				<tbody>
					{!isLoading ? (
						<>
							{equalization.map((order, index) => {
								return (
									<tr key={index}>
										<th className="th th-1">{order.Doc_Number}</th>
										<th className="th th-2">{order.Doc_Date}</th>
										<th className="th th-3">{order.Contract}</th>
										<th className="th th-3">
											{order.TypeBSO} {order.SeriaBSO} {order.NumBSO}
										</th>
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
										<th className="th th-8">
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
											<ReactTooltip
												textColor="white"
												backgroundColor="#404c54"
												borderColor="black"
											/>
										</th>
										<th className="th th-9">
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
										</th>
										<th className="th th-7">{order.delivery}</th>
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
					padding: 0 5px;
					border: 1px solid #dee2e6;
				}

				.searchLink {
					cursor: pointer;
				}

				.pdfLink {
					width: 25px;
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
					width: 15%;
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
					width: 20%;
				}
				.th-8 {
					width: 5%;
				}
				.th-9 {
					width: 5%;
				}

				@media (max-width: 1200px) {
					.th {
						height: 40px;
						font-size: 10px;
					}

					.th img {
						width: 20px;
					}
				}

				@media (max-width: 991px) {
					.th {
						height: 40px;
						font-size: 8px;
					}

					.th img {
						width: 15px;
					}
				}
			`}</style>
		</>
	);
}
