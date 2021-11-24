import Head from "next/head"
import React from "react"
import BannerTop from "../../components/BannerTop"
import Layout, { siteTitle } from "../../components/layout"
import GoodsContent from "../../components/GoodsContent"
import {getElements} from '../../action/getCategories'

Elements.getInitialProps = async () => {
	const elements = await getElements()
	return {
		elements,
	};
};

function Elements(props) {
	const namePage = "elements";
	const path_spans = "Элементы крепления и фиксации";
	const path_link = [
		{ label: "Главная", path: "/" },
		{ label: "Каталог", path: "/catalog" },
	];

	const { elements } = props;

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
						<GoodsContent goods={elements} namePage={namePage} />
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default Elements;
