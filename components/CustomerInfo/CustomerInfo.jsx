import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomerInfoBlock from "./CustomerInfoBlock";
import lscache from "lscache";
import CustomerOrdersBlock from "./CustomerOrdersBlock";
import CustomerOrdersBlockMobile from "./CustomerOrdersBlockMobile";
import CustomerEqualizations from "./CustomerEqualizations";
import CustomerEqualizationsMobile from "./CustomerEqualizationsMobile";
import InputDate from "../Elements/InputDate";
import CustomerPayments from "./CustomerPayments";
import CustomerPaymentsMobile from "./CustomerPaymentsMobile";

const useAuth = () => {
	const userId = useSelector((state) => state.auth.userId);
	const isAuth = useSelector((state) => state.auth.isAuth);
	const customer = useSelector((state) => state.customer);
	const startData = useSelector((state) => state.customer.startData);
	const endData = useSelector((state) => state.customer.endData);
	const tabs = useSelector((state) => state.customer.tabs);
	const customerInfo = useSelector((state) => state.customer.customerInfo);
	const orders = useSelector((state) => state.customer.orders);
	const equalization = useSelector((state) => state.customer.equalization);
	const payments = useSelector((state) => state.customer.payments);
	const headerOrg = useSelector((state) => state.customer.headerOrg);
	const size = useSelector((state) => state.customer.size);
	const currentPage = useSelector((state) => state.customer.currentPage);
	const countPage = useSelector((state) => state.customer.countPage);

	const dispatch = useDispatch();
	const acChangeTabs = (str) => {
		dispatch({
			type: "CHANGE_TABS",
			payload: str,
		});
	};

	const acChangeCustomerInfo = (obj) => {
		dispatch({
			type: "CHANGE_CUSTOMER_INFO",
			payload: obj,
		});
	};

	const acChangeOrders = (obj) => {
		dispatch({
			type: "CHANGE_ORDERS",
			payload: obj,
		});
	};

	const acChangeEqualization = (obj) => {
		dispatch({
			type: "CHANGE_EQUALIZATION",
			payload: obj,
		});
	};

	const acChangePayments = (obj) => {
		dispatch({
			type: "CHANGE_PAYMENTS",
			payload: obj,
		});
	};

	const acChangeHeaderOrg = (obj) => {
		dispatch({
			type: "CHANGE_HEADER_ORG",
			payload: obj,
		});
	};

	const acChangeSize = (obj) => {
		dispatch({
			type: "CHANGE_SIZE",
			payload: obj,
		});
	};

	const acChangeCurrentPage = (obj) => {
		dispatch({
			type: "CHANGE_CURRENT_PAGE",
			payload: obj,
		});
	};

	const acChangeCountPage = (obj) => {
		dispatch({
			type: "CHANGE_COUNT_PAGE",
			payload: obj,
		});
	};

	const acChangeStartData = (str) => {
		dispatch({
			type: "CHANGE_START_DATA",
			payload: str,
		});
	};

	const acChangeEndData = (str) => {
		dispatch({
			type: "CHANGE_END_DATA",
			payload: str,
		});
	};

	return {
		userId,
		isAuth,
		customer,
		tabs,
		customerInfo,
		orders,
		equalization,
		payments,
		headerOrg,
		size,
		currentPage,
		countPage,
		startData,
		endData,
		acChangeTabs,
		acChangeCustomerInfo,
		acChangeOrders,
		acChangeEqualization,
		acChangePayments,
		acChangeHeaderOrg,
		acChangeSize,
		acChangeCurrentPage,
		acChangeCountPage,
		acChangeStartData,
		acChangeEndData,
	};
};

export default function CustomerInfo() {
	const {
		isAuth,
		userId,
		customer,
		tabs,
		customerInfo,
		orders,
		equalization,
		payments,
		headerOrg,
		size,
		currentPage,
		countPage,
		startData,
		endData,
		acChangeTabs,
		acChangeCustomerInfo,
		acChangeOrders,
		acChangeEqualization,
		acChangePayments,
		acChangeHeaderOrg,
		acChangeSize,
		acChangeCurrentPage,
		acChangeCountPage,
		acChangeStartData,
		acChangeEndData,
	} = useAuth();

	const [isInitial, setIsInitial] = useState(false);

	const changeTabs = (str) => {
		acChangeTabs(str);
		acChangeCurrentPage(1);
		acChangeCountPage(10);
		acChangeStartData("");
		acChangeEndData("");
	};

	const incCurrentPage = () => {
		if (currentPage < size && currentPage >= 1) {
			acChangeCurrentPage(currentPage + 1);
		}
	};
	const decCurrentPage = () => {
		if (currentPage <= size && currentPage > 1) {
			acChangeCurrentPage(currentPage - 1);
		}
	};

	const changeCurrentPage = (num) => {
		acChangeCurrentPage(num);
	};

	useEffect(() => {
		setIsInitial(true);
	}, []);

	useEffect(() => {
		if (isInitial) {
			lscache.set("customer", customer);
		}
	}, [customer]);

	return (
		<div className="box">
			<div className="controls">
				<div className="tabs">
					<div
						className={`tab ${tabs === "orders" ? "active" : null}`}
						onClick={() => {
							changeTabs("orders");
						}}
					>
						Заказы
					</div>
					<div
						className={`tab ${tabs === "equalizations" ? "active" : null}`}
						onClick={() => {
							changeTabs("equalizations");
						}}
					>
						Отгрузки
					</div>
					<div
						className={`tab ${tabs === "payments" ? "active" : null}`}
						onClick={() => {
							changeTabs("payments");
						}}
					>
						Платежи
					</div>
					<div
						className={`tab ${tabs === "info" ? "active" : null}`}
						onClick={() => {
							changeTabs("info");
						}}
					>
						Информация
					</div>
				</div>

				{tabs === "orders" ||
				tabs === "equalizations" ||
				tabs === "payments" ? (
					<InputDate
						startData={startData}
						endData={endData}
						acChangeStartData={acChangeStartData}
						acChangeEndData={acChangeEndData}
						acChangeCurrentPage={acChangeCurrentPage}
					/>
				) : null}
			</div>
			<div className="information">
				<div className="content desktop-content">
					{tabs === "info" ? (
						<CustomerInfoBlock
							userId={userId}
							customerInfo={customerInfo}
							headerOrg={headerOrg}
							acChangeCustomerInfo={acChangeCustomerInfo}
							acChangeHeaderOrg={acChangeHeaderOrg}
						/>
					) : tabs === "orders" ? (
						<CustomerOrdersBlock
							userId={userId}
							orders={orders}
							acChangeOrders={acChangeOrders}
							size={size}
							acChangeSize={acChangeSize}
							countPage={countPage}
							acChangeCountPage={acChangeCountPage}
							currentPage={currentPage}
							incCurrentPage={incCurrentPage}
							decCurrentPage={decCurrentPage}
							changeCurrentPage={changeCurrentPage}
							startData={startData}
							endData={endData}
						/>
					) : tabs === "equalizations" ? (
						<CustomerEqualizations
							userId={userId}
							equalization={equalization}
							acChangeEqualization={acChangeEqualization}
							size={size}
							acChangeSize={acChangeSize}
							countPage={countPage}
							acChangeCountPage={acChangeCountPage}
							currentPage={currentPage}
							incCurrentPage={incCurrentPage}
							decCurrentPage={decCurrentPage}
							changeCurrentPage={changeCurrentPage}
							startData={startData}
							endData={endData}
						/>
					) : tabs === "payments" ? (
						<CustomerPayments
							userId={userId}
							payments={payments}
							acChangePayments={acChangePayments}
							size={size}
							acChangeSize={acChangeSize}
							countPage={countPage}
							acChangeCountPage={acChangeCountPage}
							currentPage={currentPage}
							incCurrentPage={incCurrentPage}
							decCurrentPage={decCurrentPage}
							changeCurrentPage={changeCurrentPage}
							startData={startData}
							endData={endData}
						/>
					) : null}
				</div>

				<div className="content mobile-content">
					{tabs === "info" ? (
						<CustomerInfoBlock
							userId={userId}
							customerInfo={customerInfo}
							headerOrg={headerOrg}
							acChangeCustomerInfo={acChangeCustomerInfo}
							acChangeHeaderOrg={acChangeHeaderOrg}
						/>
					) : tabs === "orders" ? (
						<CustomerOrdersBlockMobile
							userId={userId}
							orders={orders}
							acChangeOrders={acChangeOrders}
							size={size}
							acChangeSize={acChangeSize}
							countPage={countPage}
							acChangeCountPage={acChangeCountPage}
							currentPage={currentPage}
							incCurrentPage={incCurrentPage}
							decCurrentPage={decCurrentPage}
							changeCurrentPage={changeCurrentPage}
							startData={startData}
							endData={endData}
						/>
					) : tabs === "equalizations" ? (
						<CustomerEqualizationsMobile
							userId={userId}
							equalization={equalization}
							acChangeEqualization={acChangeEqualization}
							size={size}
							acChangeSize={acChangeSize}
							countPage={countPage}
							acChangeCountPage={acChangeCountPage}
							currentPage={currentPage}
							incCurrentPage={incCurrentPage}
							decCurrentPage={decCurrentPage}
							changeCurrentPage={changeCurrentPage}
							startData={startData}
							endData={endData}
						/>
					) : tabs === "payments" ? (
						<CustomerPaymentsMobile
							userId={userId}
							payments={payments}
							acChangePayments={acChangePayments}
							size={size}
							acChangeSize={acChangeSize}
							countPage={countPage}
							acChangeCountPage={acChangeCountPage}
							currentPage={currentPage}
							incCurrentPage={incCurrentPage}
							decCurrentPage={decCurrentPage}
							changeCurrentPage={changeCurrentPage}
							startData={startData}
							endData={endData}
						/>
					) : null}
				</div>
			</div>

			<style jsx>{`
				.mobile-content {
					display: none;
				}

				.desktop-content {
					display: flex;
				}

				.box {
					display: flex;
					flex-direction: column;
					hight: 100%;
				}

				.content {
					flex-direction: column;
					justify-content: space-between;
					min-height: 660px;
					padding: 15px 0;
				}

				.controls {
					display: flex;
					justify-content: space-between;
				}

				.tabs {
					display: flex;
				}

				.tab {
					padding: 10px 15px;
					cursor: pointer;
					background-color: white;
					color: #608d98;
					text-transform: uppercase;
					font-size: 10px;
					border: 1px solid #608d98;
					border-right: none;
				}

				.tab:last-child {
					border-right: 1px solid #608d98;
				}

				.tab.active {
					background-color: #ebebeb;
				}

				@media (max-width: 1200px) {
					.tab {
						font-size: 10px;
						padding: 7px 10px;
					}

					.content {
						min-height: 540px;
					}
				}

				@media (max-width: 768px) {
					.tab {
						font-size: 8px;
						padding: 5px 5px;
					}

					.content {
						min-height: 540px;
					}
				}

				@media (max-width: 576px) {
					.desktop-content {
						display: none;
					}
					.mobile-content {
						display: block;
					}

					.controls {
						flex-direction: column;
						align-items: center;
					}

					.tabs {
						margin-bottom: 5px;
					}
				}
			`}</style>
		</div>
	);
}
