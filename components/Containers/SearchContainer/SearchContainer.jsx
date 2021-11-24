import SearchTop from "../../SearchTop"
import lscache from "lscache"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import {getSearch} from '../../../action/getSearch'

const useSearch = () => {
	const search = useSelector((state) => state.search);
	const isInit = useSelector((state) => state.search.isInit);
	const searchStr = useSelector((state) => state.search.searchStr);
	const goods = useSelector((state) => state.search.goods);
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
		search,
		isInit,
		searchStr,
		goods,
		updateSearchStr,
		resetSearchStr,
		addSearchGoods,
		acChangeIsInit,
	};
};

export default function SearchContainer(props) {
	const { onGiveGoods } = props;

	const {
		search,
		isInit,
		searchStr,
		goods,
		updateSearchStr,
		resetSearchStr,
		addSearchGoods,
		acChangeIsInit,
	} = useSearch();

	const onSubmitGoods = (str) => {
		getSearch(str).then((res) => {
			addSearchGoods(res);
			resetSearchStr("");
			acChangeIsInit(true);
		});
	};

	useEffect(() => {
		onGiveGoods(goods);
	}, [goods]);

	useEffect(() => {
		if (isInit) {
			lscache.set("search", search);
			acChangeIsInit(false);
		}
	}, [search]);

	return (
		<div className="container_box">
			<SearchTop
				searchStr={searchStr}
				updateSearchStr={updateSearchStr}
				addSearchGoods={addSearchGoods}
				onSubmitGoods={onSubmitGoods}
			/>
			<style jsx>{`
				.container_box {
					width: 100%;
					position: sticky;
					top: 85px;
					z-index: 98;
					background-color: white;
				}
			`}</style>
		</div>
	);
}
