import Head from "next/head"
import React from "react"
import BannerTop from "../../components/BannerTop"
import Layout, { siteTitle } from "../../components/layout"
import GoodsContent from "../../components/GoodsContent"
import {getOtherWares} from '../../action/getCategories'

OtherWares.getInitialProps = async () => {
	const otherWares = await getOtherWares()
	return {
		otherWares,
	};
};

function OtherWares(props) {
	const namePage = "others_wares";
	const path_spans = "Прочие изделия";
	const path_link = [
		{ label: "Главная", path: "/" },
		{ label: "Каталог", path: "/catalog" },
	];

	const { otherWares } = props;

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
						<GoodsContent goods={otherWares} namePage={namePage} />
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default OtherWares;
