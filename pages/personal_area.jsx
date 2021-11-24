import Head from "next/head";
import React from "react";
import BannerTop from "../components/BannerTop";
import CustomerInfo from "../components/CustomerInfo";
import Layout, { siteTitle } from "../components/layout";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Router from "next/router";
import { useCookies } from "react-cookie";

const useAuth = () => {
	const auth = useSelector((state) => state.auth);

	return {
		auth,
	};
};

export default function PersonalArea() {
	const path_spans = "Личный кабинет";
	const path_link = [{ label: "Главная", path: "/" }];

	const {auth} = useAuth()
	const [cookies, setCookie, removeCookie] = useCookies(["auth"]);

	useEffect(() => {

		if(!cookies.auth) {
			Router.push("/");
		}
	})

	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className="porsonal_area">
				<div className="banner_section">
					<div className="container">
						<BannerTop path_link={path_link} path_spans={path_spans} />
					</div>
				</div>
				<div className="container">
					<div className="customer-info">
						<CustomerInfo />
					</div>
				</div>
			</section>
		</Layout>
	);
}
