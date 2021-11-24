import LogInForm from "../../LogInForm";
import Router from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import {loginUser} from '../../../action/getAuth'

const useAuth = () => {
	const auth = useSelector((state) => state.auth);
	const userName = useSelector((state) => state.auth.userName);
	const userPassword = useSelector((state) => state.auth.userPassword);
	const isRemember = useSelector((state) => state.auth.isRemember);
	const userNameError = useSelector((state) => state.auth.userNameError);
	const userPasswordError = useSelector(
		(state) => state.auth.userPasswordError
	);
	const dispatch = useDispatch();

	const acUpdateUserName = (e) => {
		const value = e.target.value;
		dispatch({
			type: "CHANGE_USER_NAME",
			payload: value,
		});
	};

	const acUpdateUserPassword = (e) => {
		const value = e.target.value;
		dispatch({
			type: "CHANGE_USER_PASSWORD",
			payload: value,
		});
	};

	const updateIsAuth = (isLogin) => {
		dispatch({
			type: "UPDATE_IS_LOGIN",
			payload: isLogin,
		});
		Router.push("/");
	};

	const acUpdateUserNameError = (str) => {
		dispatch({
			type: "CHANGE_USER_NAME_ERROR",
			payload: str,
		});
	};

	const acUpdateUserPasswordError = (str) => {
		dispatch({
			type: "CHANGE_USER_PASSWORD_ERROR",
			payload: str,
		});
	};

	const acUpdateUserId = (id) => {
		dispatch({
			type: "CHANGE_USER_ID",
			payload: id,
		});
	};

	const acUpdateRemember = (val) => {
		dispatch({
			type: "CHANGE_REMEMBER",
			payload: val,
		});
	};

	return {
		userName,
		acUpdateUserName,
		userPassword,
		isRemember,
		acUpdateUserPassword,
		updateIsAuth,
		acUpdateUserNameError,
		acUpdateUserPasswordError,
		userNameError,
		userPasswordError,
		auth,
		acUpdateUserId,
		acUpdateRemember,
	};
};

export default function LoginFormContainer({ acChangeAuthPage }) {
	const {
		userName,
		acUpdateUserName,
		userPassword,
		isRemember,
		acUpdateUserPassword,
		updateIsAuth,
		acUpdateUserNameError,
		acUpdateUserPasswordError,
		userNameError,
		userPasswordError,
		auth,
		acUpdateUserId,
		acUpdateRemember,
	} = useAuth();

	const [isInitial, setIsInitial] = useState(false);
	const [cookies, setCookie] = useCookies(["auth"]);

	useEffect(() => {
		if (isInitial) {
			// isRemember ? lscache.set("auth", auth) : lscache.set("auth", auth, 60);
			console.log(auth)
			// isRemember
			// 	? setCookie("auth", auth, { path: "/", maxAge: 604800 })
			// 	: setCookie("auth", auth, { path: "/", maxAge: 3600 });
		}
	}, [auth]);

	const updateRemember = (e) => {
		e.target.checked ? acUpdateRemember(true) : acUpdateRemember(false);
	};

	const authIsOk = async (id) => {
		updateIsAuth(true);
		acUpdateUserId(id);

		isRemember
			? setCookie("auth", {id, isAuth: true}, { path: "/", maxAge: 604800 })
			: setCookie("auth", {id, isAuth: true}, { path: "/", maxAge: 3600 });
	};

	const updateUserName = (str) => {
		acUpdateUserName(str);
		setIsInitial(true);
	};

	const updateUserPassword = (str) => {
		acUpdateUserPassword(str);
		setIsInitial(true);
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		if (!userName) {
			acUpdateUserNameError("Введите имя пользователя");
			return;
		}
		if (!userPassword) {
			acUpdateUserPasswordError("Введите пароль");
			return;
		}

		await loginUser(userName, userPassword).then((data) => {
				data.Access
					? authIsOk(data.Client_id)
					: data.Status === "NotFound"
					? acUpdateUserNameError("Данного имени пользователя не существует")
					: data.Status === "WrongPass"
					? acUpdateUserPasswordError("Введен неверный пароль")
					: null;
				});
	};

	return (
		<LogInForm
			userName={userName}
			updateUserName={updateUserName}
			userPassword={userPassword}
			updateUserPassword={updateUserPassword}
			onSubmit={onSubmit}
			userNameError={userNameError}
			userPasswordError={userPasswordError}
			acChangeAuthPage={acChangeAuthPage}
			updateRemember={updateRemember}
		/>
	);
}
