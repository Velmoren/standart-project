import Link from "../Link";
import { useCookies } from "react-cookie";
import Router from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import MenuMobile from "./MenuMobile";
import MenuBlockGray from "./MenuBlockGray";

import { disablePageScroll, enablePageScroll } from "scroll-lock";

const useTotalPrice = () => {
	const count = useSelector((state) => state.cart.totalPrice);
	const cartItems = useSelector((state) => state.cart.cartItems);
	const auth = useSelector((state) => state.auth.isAuth);
	const userName = useSelector((state) => state.auth.userName);
	const isActiveMenu = useSelector((state) => state.menu.isActiveMenu);

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
		cartItems,
		auth,
		userName,
		acOnLogout,
		isActiveMenu,
		acChengeMenuActive,
	};
};

export default function Header() {
	const {
		count,
		cartItems,
		auth,
		userName,
		acOnLogout,
		isActiveMenu,
		acChengeMenuActive,
	} = useTotalPrice();

	const [cookies, setCookie, removeCookie] = useCookies(["auth"]);

	const onLogout = () => {
		acOnLogout();
		removeCookie("auth");
		Router.push("/");
	};

	return (
		<header className="header">
			<div className="container">
				<div className="box">
					<div className="logo">
						<Link href="/">
							<a className="logo_back">
								<img src="/image/logo.png" alt="logo" />
							</a>
						</Link>
					</div>
					<nav>
						<ul>
							<li>
								<Link activeClassName="active" href="/catalog">
									<a className="link">Каталог</a>
								</Link>
							</li>
							<li>
								<Link activeClassName="active" href="/news">
									<a className="link">новости</a>
								</Link>
							</li>
							<li>
								<Link activeClassName="active" href="/about">
									<a className="link">о компании</a>
								</Link>
							</li>
							<li>
								<Link activeClassName="active" href="/contacts">
									<a className="link">контакты</a>
								</Link>
							</li>
						</ul>
					</nav>
					<div className="logics">
						<div className="search">
							<Link activeClassName="active" href="/search">
								<a className="link"></a>
							</Link>
						</div>
						<div className="cart">
							<Link activeClassName="active" href="/cart">
								<a className="link">{count.toFixed(2)}</a>
							</Link>
						</div>
						{auth ? (
							<>
								<div className="personal_area">
									<Link activeClassName="active" href="/personal_area">
										<a className="link">
											<img src="/image/user.svg" alt="user" />
										</a>
									</Link>
								</div>
								<div className="logout">
									<a href="#" className="link" onClick={onLogout}>
										<img src="/image/logout.svg" alt="logout" />
									</a>
								</div>
							</>
						) : (
							<div className="login">
								<Link activeClassName="active" href="/login">
									<a className="link">вход для партнеров</a>
								</Link>
							</div>
						)}
					</div>
					<div className="cart-btn">
						<Link href="/cart">
							<a>
								<img src="/image/shopping-cart.svg" alt="shopping-cart" />
								<span>{cartItems.length}</span>
							</a>
						</Link>
					</div>
					<div className="phone">
						<a href="tel:+375 17 270-70-70">
							<img src="/image/phone_btn.svg" alt="phone_btn" />
						</a>
					</div>
					<div
						className="burger"
						onClick={() => {
							isActiveMenu
								? enablePageScroll(document.body)
								: disablePageScroll(document.body);

							acChengeMenuActive(!isActiveMenu);
						}}
					>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>

			<MenuMobile
				isActiveMenu={isActiveMenu}
				acChengeMenuActive={acChengeMenuActive}
			/>

			<style jsx>{`
				.container {
					z-index: 98;
				}
				.burger {
					display: none;
					flex-direction: column;
					justify-content: space-between;
					position: absolute;
					top: 10px;
					right: 10px;
					height: 25px;
				}

				.phone {
					display: none;
					width: 30px;
					position: absolute;
					top: 7px;
					right: 50px;
					z-index: 100;
				}

				.cart-btn {
					display: none;
					width: 30px;
					position: absolute;
					top: 7px;
					right: 100px;
					z-index: 100;
				}

				.cart-btn a {
					position: relative;
				}

				.cart-btn span {
					position: absolute;
					min-width: 15px;
					height: 15px;
					background-color: white;
					border-radius: 50%;
					top: -20px;
					right: -5px;
					color: #404c54;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.burger span {
					display: block;
					height: 4px;
					width: 30px;
					background-color: #404c54;
				}

				.active {
					color: #608d98;
					border-color: #608d98;
					background-color: #ebebeb;
				}
				.header {
					background: white;
					box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.2);
					position: fixed;
					top: 0;
					left: 0;
					right: 0;
					z-index: 99;
				}

				.box {
					display: flex;
					justify-content: space-between;
					align-items: center;
				}

				nav {
					display: flex;
					align-items: center;
				}

				nav > ul {
					display: flex;
				}

				nav > ul > li {
					list-style: none;
				}

				nav > ul > li > a {
					padding: 32px 15px 34px;
				}
				.log {
					display: flex;
				}

				.logo {
					display: flex;
					width: 20%;
				}

				.logo > a {
					padding: 30px 0;
				}

				.logics {
					display: flex;
				}

				.search {
					border-left: 1px solid #b8c9d6;
				}

				.search > a {
					width: 100%;
					height: 100%;
					background-image: url("/image/search_btn.png");
					background-repeat: no-repeat;
					background-position: center;
					padding: 30px 33px;
					display: block;
				}

				.cart {
					display: flex;
					justify-content: space-between;
					align-items: center;
					border-left: 1px solid #b8c9d6;
					border-right: 1px solid #b8c9d6;
				}

				.cart > a {
					max-height: 85px;
					text-align: center;
					min-width: 110px;
					padding: 34px 15px 32px 45px;
					background-image: url("/image/shopping-cart.png");
					background-repeat: no-repeat;
					background-position: 10px center;
				}

				.login {
					width: 195px;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					border-right: 1px solid #b8c9d6;
				}

				.login > a {
					width: 100%;
					padding: 34px 10px 32px 10px;
					max-height: 85px;
				}

				.personal_area a {
					display: flex;
					justify-content: center;
					align-items: center;
					padding: 21px 25px;
					border-right: 1px solid #b8c9d6;
				}

				.personal_area img {
					width: 40px;
				}

				.logout a {
					display: flex;
					justify-content: center;
					align-items: center;
					padding: 21px 30px;
					border-right: 1px solid #b8c9d6;
				}

				.logout img {
					width: 40px;
				}

				.user_name {
					border-top: 3px solid transparent;
					width: 100%;
					text-align: center;
					font-weight: bold;
					color: #404c54;
					cursor: pointer;
					text-decoration: none;
				}

				.link {
					border-top: 3px solid transparent;
					text-transform: uppercase;
					text-decoration: none;
					font-weight: bold;
					color: #404c54;
				}

				.link:hover {
					color: #608d98;
					border-color: #608d98;
					background-color: #ebebeb;
				}

				.active {
					color: #608d98;
					border-color: #608d98;
					background-color: #ebebeb;
				}

				@media (max-width: 1370px) {
					nav > ul {
						padding-left: 20px;
					}
				}

				@media (max-width: 1200px) {
					nav {
						font-size: 12px;
					}

					ul {
						padding: 0;
					}

					.logo a {
						padding: 25px 0;
					}

					.box > nav > ul > li > a {
						padding: 24px 10px 26px;
					}

					.logics {
						font-size: 12px;
					}

					.search a {
						padding: 25px 25px;
					}

					.cart a {
						min-width: 90px;
						padding: 25px 5px 25px 35px;
					}

					.login {
						width: 165px;
					}

					.login a {
						padding: 25px 10px 25px 10px;
					}

					.personal_area a {
						padding: 12px;
					}

					.logout a {
						padding: 12px;
					}
				}

				@media (max-width: 991px) {
					nav {
						font-size: 9px;
					}

					.box > nav > ul > li > a {
						padding: 15px 5px 18px;
					}

					.logo a {
						padding: 15px 0;
					}

					.search a {
						padding: 15px 20px;
						background-size: 25%;
					}

					.cart a {
						min-width: 55px;
						padding: 18px 5px 15px 25px;
						font-size: 9px;
						background-size: 25%;
					}

					.personal_area a {
						padding: 9px;
					}

					.personal_area img {
						width: 25px;
					}

					.logout a {
						padding: 9px;
					}

					.logout img {
						width: 25px;
					}

					.login {
						width: 120px;
						font-size: 9px;
					}

					.login a {
						padding: 18px 5px 15px 5px;
					}
				}

				@media (max-width: 768px) {
					.header {
						height: 46px;
						background-color: white;
					}
					.logo {
						width: 160px;
						position: absolute;
						top: 0;
						left: 15px;
						z-index: 1001;
					}

					nav {
						display: none;
					}

					.logics {
						display: none;
					}

					.burger {
						display: flex;
						z-index: 1001;
					}

					.phone {
						display: block;
					}

					.cart-btn {
						display: block;
					}

					.logo a {
						padding: 15px 0;
					}
				}

				@media (max-width: 400px) {
				}
			`}</style>
		</header>
	);
}
