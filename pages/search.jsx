import Head from "next/head";
import React from "react";
import Layout, { siteTitle } from "../components/layout";
import BannerTop from "../components/BannerTop";
import Contacts from "../components/Contacts";
import MenuCategories from "../components/MenuCategories";
import MessageNotFound from "../components/Elements/MessageNotFound";
import GoodsList from "../components/GoodsList";
import Spinner from "../components/Spinner";
import SearchContainer from "../components/Containers/SearchContainer";
import { useState, useEffect } from "react";

function Search(props) {
	const path_spans = "О компании";
	const path_link = [{ label: "Главная", path: "/" }];

	const [arrGoods, setArrGoods] = useState();
	const [loading, setLoading] = useState(true);

	const onGiveGoods = (goods) => {
		setLoading(true);
		setArrGoods(goods);
		setLoading(false);
	};

	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section>
				<div className="banner_section">
					<div className="container">
						<BannerTop path_link={path_link} path_spans={path_spans} />
					</div>
				</div>
				<div className="about_section" onClick={props.incAc}>
					<div className="container">
						<div className="box">
							<div className="left">
								<MenuCategories />
							</div>
							<div className="centerAndDolie searchBox">
								<SearchContainer onGiveGoods={onGiveGoods} />
								{loading ? (
									<Spinner />
								) : arrGoods.length !== 0 ? (
									<GoodsList key={arrGoods.STANDARTID} goods={arrGoods} />
								) : (
									<MessageNotFound />
								)}
							</div>
						</div>
					</div>
				</div>
				<style jsx>{`
					.searchBox {
						display: flex;
						flex-direction: column;
						align-items: center;
					}

					@media (max-width: 991px) {
						.left {
							display: none;
						}

						.centerAndDolie {
							width: 100%;
							padding-left: 0;
							padding-right: 0;
						}
					}
				`}</style>
			</section>
		</Layout>
	);
}

export default Search;
