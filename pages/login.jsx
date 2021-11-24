import Head from "next/head";
import React from "react";
import Layout, { siteTitle } from "../components/layout";
import LoginFormContainer from "../components/Containers/LoginFormContainer";
import RegisterFormContainer from "../components/Containers/RegisterFormContainer";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const useAuth = () => {
	const page = useSelector((state) => state.auth.page);

	const dispatch = useDispatch();

	const acChangeAuthPage = (str) => {
		dispatch({
			type: "CHANGE_AUTH_PAGE",
			payload: str,
		});
	};

	return { page, acChangeAuthPage };
};

export default function Regas() {
	const { page, acChangeAuthPage } = useAuth();

	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className="login_section">
				<div className="container">
					<div className="wrapper">
						{page === "login" ? (
							<LoginFormContainer acChangeAuthPage={acChangeAuthPage} />
						) : page === "register" ? (
							<RegisterFormContainer acChangeAuthPage={acChangeAuthPage} />
						) : null}
					</div>
				</div>
			</section>
		</Layout>
	);
}
