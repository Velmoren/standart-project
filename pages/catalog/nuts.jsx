import Head from "next/head"
import React from "react"
import BannerTop from "../../components/BannerTop"
import Layout, { siteTitle } from "../../components/layout"
import GoodsContent from "../../components/GoodsContent"
import {getNuts} from '../../action/getCategories'

Nuts.getInitialProps = async () => {
	const nuts = await getNuts()
	return {
		nuts,
	};
};

function Nuts(props) {
	const namePage = "nuts";
	const path_spans = "Гайки";
	const path_link = [
		{ label: "Главная", path: "/" },
		{ label: "Каталог", path: "/catalog" },
	];

	const { nuts } = props;

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
						<GoodsContent goods={nuts} namePage={namePage} />
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default Nuts;
