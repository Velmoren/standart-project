import Head from "next/head";
import React from "react";
import BannerTop from "../../components/BannerTop";
import NewsInner from "../../components/NewsInner";
import VerticalNews from "../../components/VerticalNews";
import Layout, { siteTitle } from "../../components/layout";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

const useNews = () => {
	const newsArray = useSelector((state) => state.news.news);

	return { newsArray };
};

NewsPage.getInitialProps = async ({ query }) => {
	const id = query.id;
	return { id };
};

export default function NewsPage(props) {
	let { id } = props;
	const { newsArray } = useNews();
	const router = useRouter();
	if (!id) {
		id = router.query.id;
	}

	const newsRedItem = newsArray.find((item) => {
		return item.id === +id;
	});

	const path_spans = newsRedItem ? newsRedItem.name : "";
	const path_link = [
		{ label: "Главная", path: "/" },
		{ label: "Новости", path: "/news" },
	];
	const date = newsRedItem ? newsRedItem.dateEnd : null;

	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section>
				<div className="banner_section">
					<div className="container">
						<BannerTop path_link={path_link} path_spans={path_spans}>
							{<h2 className="banner_data">{date}</h2>}
						</BannerTop>
					</div>
				</div>

				<div className="news-item">
					<div className="container">
						<div className="box">
							<div className="centerAndDolie">
								<NewsInner newsItem={newsRedItem ? newsRedItem : []} />
							</div>
							<div className="right">
								<VerticalNews news={newsArray ? newsArray : []} />
							</div>
						</div>
					</div>
				</div>

				<style jsx>{`
					section {
						background-color: white;
					}

					.right {
						padding: 0;
						width: 25%;
					}
					@media (max-width: 991px) {
						.right {
							display: none;
						}

						.centerAndDolie {
							width: 100%;
						}
					}
				`}</style>
			</section>
		</Layout>
	);
}
