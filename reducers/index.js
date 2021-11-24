import { combineReducers } from "redux";
import cart from "./cart";
import search from "./search";
import goods from "./goods";
import auth from "./auth";
import filters from "./filters";
import register from "./register";
import info from "./info";
import customer from "./customer";
import menu from "./menu";
import news from "./news";

const reducer = combineReducers({
	cart,
	search,
	goods,
	auth,
	filters,
	register,
	info,
	customer,
	menu,
	news,
});

export default reducer;
