import Head from "next/head"
import React from "react"
import Layout, { siteTitle } from "../components/layout"
import SearchForm from "../components/SearchForm"
import CatalogAndPrice from "../components/CatalogAndPrice"
import SliderBlock from "../components/SliderBlock"
import Description from "../components/Description"
import HeroGoods from "../components/HeroGoods"
import CATALOG_ITEMS from "../resources/categories"
import { useSelector, useDispatch } from "react-redux"
import Router from "next/router"
import {getSearch} from '../action/getSearch'

const useSearch = () => {
	const searchStr = useSelector((state) => state.search.searchStr);
	const dispatch = useDispatch();

	const updateSearchStr = (e) => {
		const value = e.target.value;
		dispatch({
			type: "UPDATE_SEARCH_STRING",
			payload: value,
		});
	};

	const resetSearchStr = (val) => {
		dispatch({
			type: "RESET_SEARCH_STRING",
			payload: val,
		});
	};

	const addSearchGoods = (goods) => {
		dispatch({
			type: "ADD_SEARCH_GOODS",
			payload: goods,
		});
	};

	const acChangeIsInit = (val) => {
		dispatch({
			type: "CHANGE_IS_INIT",
			payload: val,
		});
	};

	return {
		searchStr,
		updateSearchStr,
		resetSearchStr,
		addSearchGoods,
		acChangeIsInit,
	};
};

function Home() {
	const {
		searchStr,
		updateSearchStr,
		resetSearchStr,
		addSearchGoods,
		acChangeIsInit,
	} = useSearch();

	const onSubmitGoods = (str) => {
		getSearch(str).then((res) => {
			addSearchGoods(res);
			acChangeIsInit(true);
			resetSearchStr("");
			Router.push("/search");
		});
	};

	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className="hero">
				<div className="p-40">
					<div className="container">
						<div className="box">
							<div className="left">
								<div className="top_block">
									<SearchForm
										searchStr={searchStr}
										updateSearchStr={updateSearchStr}
										onSubmitGoods={onSubmitGoods}
									/>
									<CatalogAndPrice />
								</div>
								<SliderBlock />
							</div>
							<div className="center">
								<HeroGoods cards={CATALOG_ITEMS} />
							</div>
							<div className="right">
								<Description />
							</div>
						</div>
					</div>
				</div>
			</section>
			<style jsx>{`
				section {
					background-color: #596670;
				}

				@media (max-width: 576px) {
					.top_block {
						display: flex;
						justify-content: space-between;
					}
				}

				@media (max-width: 400px) {
				}
			`}</style>
		</Layout>
	);
}

export default Home;
