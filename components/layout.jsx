import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { useSelector, useDispatch } from "react-redux";
import MenuBlockGray from "./Header/MenuBlockGray";

export const siteTitle = "Стандарт";

const useMobileMenu = () => {
	const isActiveMenu = useSelector((state) => state.menu.isActiveMenu);

	const dispatch = useDispatch();

	const acChengeMenuActive = (val) => {
		dispatch({
			type: "CHENGE_MENU_ACTIVE",
			payload: val,
		});
	};

	return {
		isActiveMenu,
		acChengeMenuActive,
	};
};

function Layout(props) {
	const { children } = props;
	const { isActiveMenu, acChengeMenuActive } = useMobileMenu();

	return (
		<div className="layout">
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="stylesheet"
					type="text/css"
					charSet="UTF-8"
					href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
				/>
				<link
					rel="stylesheet"
					type="text/css"
					href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
				/>
				<meta
					name="viewport"
					content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
				/>
				<meta name="description" content="Стандарт" />
				<meta property="og:url" content="http://site.standart.by/" />
				<meta
					itemProp="image"
					content="http://site.standart.by/image/LogoBolts.jpg"
				></meta>
				{/* /LogoBolts.jpg */}
				{/* <meta
					property="og:image"
					content={`https://og-image.now.sh/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/> */}
				<meta
					property="og:image"
					content={`http://site.standart.by/image/LogoBolts.jpg`}
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<Header />
			<main className="main_section">{children}</main>
			<Footer />

			<MenuBlockGray
				isActiveMenu={isActiveMenu}
				acChengeMenuActive={acChengeMenuActive}
			/>

			<style jsx>{`
				.main_section {
					padding-top: 85px;
					height: 100%;
				}

				@media (max-width: 1200px) {
					.main_section {
						padding-top: 66px;
					}
				}

				@media (max-width: 991px) {
					.main_section {
						padding-top: 45px;
					}
				}
			`}</style>
		</div>
	);
}

export default Layout;
