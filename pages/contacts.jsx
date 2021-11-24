import Head from "next/head";
import React from "react";
import BannerTop from "../components/BannerTop";
import MenuCategories from "../components/MenuCategories";
import Contacts from "../components/Contacts";
import Layout, { siteTitle } from "../components/layout";
import MapBlock from "../components/MapBlock";

export default function ContactsPage() {
	const path_spans = "Контакты";
	const path_link = [{ label: "Главная", path: "/" }];

	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className="contacts">
				<div className="banner_section">
					<div className="container">
						<BannerTop path_link={path_link} path_spans={path_spans} />
					</div>
				</div>
				<div className="about">
					<div className="container">
						<div className="box">
							<div className="left">
								<MenuCategories />
							</div>

							<div className="centerAndDolie">
								<MapBlock />
							</div>
						</div>
					</div>
				</div>
			</section>
			<style jsx>{`
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
		</Layout>
	);
}
