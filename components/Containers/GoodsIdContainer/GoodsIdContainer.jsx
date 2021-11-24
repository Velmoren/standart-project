import SettingsCard from "../../SettingsCard"
import ErrorMessage from "../../Errors/ErrorMessage"
import lscache from "lscache"
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getFilters, getSettingsGood, getFilterItems } from '../../../action/getSettingsGood'

const useCard = () => {
    const cart = useSelector((state) => state.cart);
    const isAuth = useSelector((state) => state.auth.isAuth);
    const goods = useSelector((state) => state.goods.goods);
    const filterValues = useSelector((state) => state.filters.filterValues);
    const dispatch = useDispatch();

    const addGoodsToCart = (arr) => {
        dispatch({
            type: "ADD_GOODS",
            payload: arr,
        });
    };

    const acAddCartItems = ({ item, pic1, newPack }) => {
        dispatch({
            type: "ADD_CART_ITEMS",
            payload: { item, pic1, newPack },
        });
    };

    return { isAuth, cart, goods, filterValues, addGoodsToCart, acAddCartItems };
};

export default function GoodsIdContainer({ ID, giveItemName }) {
    const {
        isAuth,
        cart,
        goods,
        filterValues,
        addGoodsToCart,
        acAddCartItems,
    } = useCard();

    const [isInitial, setIsInitial] = useState(false);
    const [pic1, setPic1] = useState([]);
    const [pic2, setPic2] = useState([]);
    const [pic3, setPic3] = useState([]);
    const [picOther, setPicOther] = useState([]);
    const [standart, setStandart] = useState({});
    const [analogs, setAnalogs] = useState({});
    const [type, setType] = useState();
    const [filters, setFilters] = useState([]);
    const [size, setSize] = useState(1);
    const [countPage, setCountPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isFilter, setIsFilter] = useState(false);
    const [notGoods, setNotGoods] = useState(false);

    useEffect(() => {
        if (ID) {
            setLoading(true);
            getFilters(ID)
                .then(data => {
                    setFilters([
                        data.Filters[0].mat,
                        data.Filters[1].cov,
                        data.Filters[2].form,
                        data.Filters[3].dimA,
                        data.Filters[4].dimB,
                        data.Filters[5].pack,
                    ]);
                })
                .catch((e) => {
                    console.error(e);
                    setError(true);
                });

            if (!isFilter) {
                getSettingsGood(ID, currentPage, countPage)
                    .then(data => {
                        // setPic1(
                        //     data.StdList.Files.Pictures.length !== 0
                        //         ? "http://pic.standart.by/" +
                        //         data.StdList.Files.Pictures[0].FilePath.substr(12)
                        //         : null
                        // );
                        setPicOther(data.StdList.Files.Other)
                        setPic1(data.StdList.Files.Pictures);
                        setPic2(data.StdList.Files.Schemes);
                        setPic3(data.StdList.Files.Tables);
                        setStandart(data.StdList.Properties);
                        addGoodsToCart(data.list);
                        setSize(Math.ceil(data.totalsize / countPage));
                        giveItemName(data.list[0].standartName);
                        setLoading(false);
                        setType(data.StdList.STANDARTID);
                    })
                    .catch((e) => {
                        console.error(e);
                        setError(true);
                    });
            }
        }
        setIsInitial(true);
    }, [ID, currentPage, countPage, isFilter]);

    useEffect(() => {
        setLoading(true);
        if (isFilter) {
            getFilterItems(
                type,
                filterValues.matValue,
                filterValues.covValue,
                filterValues.formValue,
                filterValues.dimAValue,
                filterValues.dimBValue,
                filterValues.dimCValue,
                currentPage,
                countPage
            )
                .then((data) => {
                    if (!data) {
                        setNotGoods(true);
                        return;
                    }
                    setNotGoods(false);
                    addGoodsToCart(data.list);
                    setSize(Math.ceil(data.totalsize / countPage));
                    setLoading(false);
                })
                .catch((e) => {
                    console.error(e);
                    setNotGoods(true);
                });
        }
    }, [isFilter, currentPage, countPage, filterValues]);

    const addCartItems = (id) => {
        acAddCartItems(id);
    };

    useEffect(() => {
        if (isInitial) {
            lscache.set("cart", cart);
        }
    }, [cart]);

    const incCurrentPage = () => {
        if (currentPage < size && currentPage >= 1) {
            setCurrentPage(currentPage + 1);
        }
    };
    const decCurrentPage = () => {
        if (currentPage <= size && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const changeCurrentPage = (num) => {
        setCurrentPage(num);
    };

    const content = error ? (
        <ErrorMessage />
    ) : (
        <SettingsCard
            goods={goods}
            addCartItems={addCartItems}
            loading={loading}
            size={size}
            setCountPage={setCountPage}
            currentPage={currentPage}
            incCurrentPage={incCurrentPage}
            decCurrentPage={decCurrentPage}
            changeCurrentPage={changeCurrentPage}
            filters={filters}
            isFilter={isFilter}
            setIsFilter={setIsFilter}
            notGoods={notGoods}
            pic1={pic1}
            pic2={pic2}
            pic3={pic3}
            picOther={picOther}
            standart={standart}
            isAuth={isAuth}
        />
    );

    return content;
}
