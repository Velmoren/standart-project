import Head from "next/head"
import React from "react"
import BannerTop from "../../components/BannerTop"
import Layout, { siteTitle } from "../../components/layout"
import GoodsContent from "../../components/GoodsContent"
import {getWashers} from '../../action/getCategories'

Washers.getInitialProps = async () => {
	const washers = await getWashers()
	return {
		washers,
	};
};

function Washers(props) {
	const namePage = "washers";
	const path_spans = "Шайбы";
	const path_link = [
		{ label: "Главная", path: "/" },
		{ label: "Каталог", path: "/catalog" },
	];

	const { washers } = props;

	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className="otherBolts">
				<div className="banner_section">
					<div className="container">
						<BannerTop path_link={path_link} path_spans={path_spans} />
					</div>
				</div>

				<div className="about_section">
					<div className="container">
						<GoodsContent goods={washers} namePage={namePage} />
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default Washers;
