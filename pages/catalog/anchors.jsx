import Head from "next/head"
import React from "react"
import BannerTop from "../../components/BannerTop"
import GoodsContent from "../../components/GoodsContent"
import Layout, { siteTitle } from "../../components/layout"
import {getAnchors} from '../../action/getCategories'

Anchors.getInitialProps = async () => {
	const anchors = await getAnchors()
	return {
		anchors,
	};
};

function Anchors(props) {
	const namePage = "anchors";
	const path_spans = "Анкера";
	const path_link = [
		{ label: "Главная", path: "/" },
		{ label: "Каталог", path: "/catalog" },
	];

	const { anchors } = props;

	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className="anchors">
				<div className="banner_section">
					<div className="container">
						<BannerTop path_link={path_link} path_spans={path_spans} />
					</div>
				</div>

				<div className="about_section">
					<div className="container">
						<GoodsContent goods={anchors} namePage={namePage} />
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default Anchors;
