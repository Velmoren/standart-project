import GoodsList from "../../GoodsList";
import Router from "next/router";
import {useSelector, useDispatch} from "react-redux";
import SearchGoods from "../../SearchGoods";
import {getSearch} from "../../../action/getSearch";

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

export default function GoodsListContainer({goods, namePage}) {
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
            resetSearchStr("");
            acChangeIsInit(true);
            Router.push("/search");
        });
        // boltServices.getSearchItems(str).then((res) => {
        // 	addSearchGoods(res);
        // 	resetSearchStr("");
        // 	acChangeIsInit(true);
        // 	Router.push("/search");
        // });
    };

    return (
        <>
            <SearchGoods
                searchStr={searchStr}
                updateSearchStr={updateSearchStr}
                onSubmitGoods={onSubmitGoods}
            />
            <GoodsList goods={goods} namePage={namePage}/>
        </>
    );
}
