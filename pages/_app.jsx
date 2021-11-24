import "../styles/global.css";
import "../styles/datapicker.css";
import "../styles/sliderBlock.css";
import "../styles/map.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"

import { Provider } from "react-redux";
import store from "../store";
import lscache from "lscache";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import Router from "next/router";
import auth from "../reducers/auth";

// const useAuth = () => {
// 	const auth = useSelector((state) => state.auth);
//
// 	const dispatch = useDispatch();
//
// 	const acUpdateIsAuth = (obj) => {
// 		dispatch({
// 			type: "UPDATE_IS_AUTH",
// 			payload: obj,
// 		});
// 	};
//
// 	return { auth, acUpdateIsAuth };
// };

const App = ({ Component, pageProps }) => {
	const [isInitial, setIsInitial] = useState(false);
	const [cookies, setCookie] = useCookies();

	useEffect(() => {
		if (!isInitial) {
			if (lscache.get("search")) {
				store.dispatch({
					type: "UPDATE_IS_SEARCH",
					payload: lscache.get("search"),
				});
			}

			if (cookies.auth) {

				store.dispatch({
					type: "UPDATE_IS_AUTH_FROM_COOKIE",
					payload: cookies.auth,
				});

				// store.dispatch({
				// 	type: "UPDATE_IS_LOGIN",
				// 	payload: cookies.auth.isAuth,
				// });
			}

			if (lscache.get("cart")) {
				store.dispatch({
					type: "UPDATE_IS_CART",
					payload: lscache.get("cart"),
				});
			}

			if (lscache.get("customer")) {
				store.dispatch({
					type: "UPDATE_IS_CUSTOMER",
					payload: lscache.get("customer"),
				});
			}

			if (lscache.get("news")) {
				store.dispatch({
					type: "UPDATE_NEWS",
					payload: lscache.get("news"),
				});
			}
		}
		setIsInitial(true);
	}, []);

	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
};

export default App;
