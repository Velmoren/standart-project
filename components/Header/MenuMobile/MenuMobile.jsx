import Link from "../../Link";
import Router from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { useCookies } from "react-cookie";

import { disablePageScroll, enablePageScroll } from "scroll-lock";

const useTotalPrice = () => {
	const count = useSelector((state) => state.cart.totalPrice);
	const auth = useSelector((state) => state.auth.isAuth);
	const userName = useSelector((state) => state.auth.userName);

	const dispatch = useDispatch();

	const acOnLogout = () => {
		dispatch({
			type: "IS_LOGOUT",
			payload: undefined,
		});
	};

	const acChengeMenuActive = (val) => {
		dispatch({
			type: "CHENGE_MENU_ACTIVE",
			payload: val,
		});
	};

	return {
		count,
		auth,
		userName,
		acOnLogout,
	};
};

export default function MenuMobile({ isActiveMenu, acChengeMenuActive }) {
	const { count, auth, userName, acOnLogout } = useTotalPrice();
	const [cookies, setCookie, removeCookie] = useCookies(["auth"]);

	const onLogout = () => {
		acOnLogout();
		removeCookie("auth");
		Router.push("/");
	};

	return (
		<div className={`menu_mobile ${isActiveMenu ? `active` : ""}`}>
			<div className="content">
				<ul>
					<li>
						<Link activeClassName="active" href="/catalog">
							<a
								onClick={() => {
									enablePageScroll(document.body);
									acChengeMenuActive(!isActiveMenu);
								}}
							>
								Каталог
							</a>
						</Link>
					</li>
					<li>
						<Link activeClassName="active" href="/news">
							<a
								onClick={() => {
									enablePageScroll(document.body);
									acChengeMenuActive(!isActiveMenu);
								}}
							>
								Новости
							</a>
						</Link>
					</li>
					<li>
						<Link activeClassName="active" href="/about">
							<a
								onClick={() => {
									enablePageScroll(document.body);
									acChengeMenuActive(!isActiveMenu);
								}}
							>
								O компании
							</a>
						</Link>
					</li>
					<li>
						<Link activeClassName="active" href="/contacts">
							<a
								onClick={() => {
									enablePageScroll(document.body);
									acChengeMenuActive(!isActiveMenu);
								}}
							>
								Контакты
							</a>
						</Link>
					</li>
				</ul>
			</div>

			<div className="bottom_btns">
				<div className="cart_btn">
					<div className="cart_logo">
						<Link activeClassName="active" href="/cart">
							<a
								className="link"
								onClick={() => {
									enablePageScroll(document.body);
									acChengeMenuActive(!isActiveMenu);
								}}
							>
								{count.toFixed(2)}
							</a>
						</Link>
					</div>
				</div>
				{auth ? (
					<div className="personal_area_btns">
						<div className="personal_area">
							<Link activeClassName="active" href="/personal_area">
								<a
									className="link"
									onClick={() => {
										enablePageScroll(document.body);
										acChengeMenuActive(!isActiveMenu);
									}}
								></a>
							</Link>
						</div>
						<div className="logout">
							<a
								href="#"
								className="link"
								onClick={onLogout}
								onClick={() => {
									enablePageScroll(document.body);
									acChengeMenuActive(!isActiveMenu);
								}}
							></a>
						</div>
					</div>
				) : (
					<div className="personal_area_btn">
						<Link activeClassName="active" href="/login">
							<a
								onClick={() => {
									enablePageScroll(document.body);
									acChengeMenuActive(!isActiveMenu);
								}}
							>
								Вход для партнеров
							</a>
						</Link>
					</div>
				)}
			</div>
			<style jsx>{`
				.menu_mobile {
					display: none;
					height: 100%;
					flex-direction: column;
					justify-content: space-between;
				}

				ul {
					display: flex;
					flex-direction: column;
					list-style: none;
					padding: 0;
				}

				li {
					width: 100%;
				}

				li a {
					width: 100%;
					height: 30px;
					display: flex;
					justify-content: center;
					align-items: center;
					text-transform: uppercase;
					font-weight: bold;
					color: #404c54;
					text-decoration: none;
					font-size: 16px;
				}

				li a.active {
					color: #608d98;
					border-right: 4px solid #608d98;
					padding-left: 4px;
					background-color: #ebebeb;
				}

				.personal_area_btns {
					display: flex;
					justify-content: space-between;
					height: 40px;
					width: 100%;
				}

				.personal_area {
					width: 49%;
					border: 1px solid #608d98;
					margin: 1px;
				}

				.personal_area a {
					height: 100%;
					display: flex;
					justify-content: center;
					background-image: url("/image/user.svg");
					background-repeat: no-repeat;
					background-position: center;
					background-size: 30%;
				}

				.logout {
					width: 49%;
					border: 1px solid #608d98;
					margin: 1px;
				}

				.logout a {
					height: 100%;
					display: flex;
					justify-content: center;
					background-image: url("/image/logout.svg");
					background-repeat: no-repeat;
					background-position: center;
					background-size: 30%;
				}

				.personal_area_btn {
					border: 1px solid #608d98;
					margin: 1px;
				}

				.personal_area_btn a {
					width: 100%;
					height: 30px;
					display: flex;
					justify-content: center;
					align-items: center;
					text-transform: uppercase;
					font-weight: bold;
					color: #404c54;
					text-decoration: none;
					font-size: 16px;
				}

				.cart_btn {
					height: 40px;
					display: flex;
					justify-content: space-between;
				}

				.cart_logo {
					display: flex;
					width: 100%;
					justify-content: space-between;
					align-items: center;
				}

				.cart_logo > a {
					text-align: center;
					width: 100%;
					height: 100%;
					padding: 10px 30px;
					background-image: url("/image/cart.png");
					background-repeat: no-repeat;
					background-position: 10px center;
					border: 1px solid #608d98;
					margin: 1px;
					font-weight: bold;
					color: #404c54;
					text-decoration: none;
					font-size: 14px;
				}

				.bottom_btns {
					padding-bottom: 20px;
				}

				@media (max-width: 1370px) {
				}

				@media (max-width: 1200px) {
				}

				@media (max-width: 991px) {
				}

				@media (max-width: 768px) {
					.menu_mobile {
						display: flex;
						position: fixed;
						top: 0;
						right: 0;
						bottom: 0;
						width: 220px;
						background-color: white;
						z-index: 99;
						transform: translateX(100%);
						transition: all 0.5s;
					}

					.content {
						padding: 50px 0 10px;
					}

					.menu_mobile.active {
						transform: translateX(0);
						transition: all 0.5s;
					}
				}

				@media (max-width: 400px) {
					.menu_mobile {
						width: 180px;
					}

					li a {
						font-size: 14px;
					}

					.personal_area_btn a {
						font-size: 12px;
					}
				}
			`}</style>
		</div>
	);
}
