import NEWS_DATA from "../resources/news";
import { sliceNumbers, sliceGosts } from "./halpers";
import { incAc, addToCartAc } from "./actionsRedux";
import axios from 'axios'

const getNewsWhithId = (id) => {
	return new Promise((resolve, reject) => {
		const newsIndex = NEWS_DATA.findIndex((news) => news.id === id);
		const newsItem = NEWS_DATA[newsIndex];

		return resolve(newsItem);
	});
};

const getNews = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(NEWS_DATA), 50);
	});
};



export {
	NEWS_DATA,
	getNewsWhithId,
	getNews,
	incAc,
	addToCartAc,
	sliceNumbers,
	sliceGosts
};
