import Head from "next/head";
import BannerTop from "../../../components/BannerTop";
import Layout, { siteTitle } from "../../../components/layout";
import { useState } from "react";
import { useRouter } from "next/router";
import { sliceNumbers } from "../../../action/halpers";
import GoodsContentSettings from "../../../components/GoodsContentSettings";

ElementsId.getInitialProps = async ({ query }) => {
	const ID = query.id;
	return { ID };
};

function ElementsId(props) {
	let { ID } = props;
	const router = useRouter();

	if (!ID) {
		ID = router.query.id;
	}

	const [itemName, setItemName] = useState("");
	const idType = "145ad2fc-394b-11e9-9fa8-00155d0e072e";
	const path_link = [
		{ label: "Главная", path: "/" },
		{ label: "Каталог", path: "/catalog" },
		{ label: "Элементы крепления и фиксации", path: "/catalog/elements" },
	];
	const path_spans = itemName;

	const giveItemName = (str) => {
		setItemName(sliceNumbers(str));
	};

	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section>
				<div className="banner_section">
					<div className="container">
						<BannerTop path_link={path_link} path_spans={path_spans}>
							{<h2 className="banner_data"></h2>}
						</BannerTop>
					</div>
				</div>

				<div className="screws-item">
					<div className="container">
						<GoodsContentSettings
							ID={ID}
							giveItemName={giveItemName}
							idType={idType}
						/>
					</div>
				</div>

				<style jsx>{`
					section {
						background-color: white;
					}
				`}</style>
			</section>
		</Layout>
	);
}

export default ElementsId;
