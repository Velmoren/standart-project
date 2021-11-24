import Head from "next/head";
import React from "react";
import BannerTop from "../../components/BannerTop";
import Layout, { siteTitle } from "../../components/layout";
import GoodsContent from "../../components/GoodsContent";
import {getBolts} from '../../action/getCategories'

Bolts.getInitialProps = async () => {
	const bolts = await getBolts()
	return {
		bolts,
	};
};

function Bolts(props) {
	const namePage = "bolts";
	const path_spans = "Болты с шестигранной головкой";
	const path_link = [
		{ label: "Главная", path: "/" },
		{ label: "Каталог", path: "/catalog" },
	];

	const { bolts } = props;

	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className="bolts">
				<div className="banner_section">
					<div className="container">
						<BannerTop path_link={path_link} path_spans={path_spans} />
					</div>
				</div>

				<div className="about_section">
					<div className="container">
						<GoodsContent goods={bolts} namePage={namePage} />
					</div>
				</div>
				<style jsx>{`
					.sticky {
						position: sticky;
						top: 155px;
					}
				`}</style>
			</section>
		</Layout>
	);
}

export default Bolts;
