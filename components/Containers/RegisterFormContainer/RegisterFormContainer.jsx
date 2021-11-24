import RegisterForm from "../../RegisterForm";
import RCG from "react-captcha-generator";
import ModalMiniWrapper from "../../ModalMiniWrapper";
import Spinner from "../../Spinner";
import {useSelector, useDispatch} from "react-redux";
import {useState, useEffect} from "react";
import {newCustomer, checkLogin} from '../../../action/getAuth'

const useRegister = () => {
    const register = useSelector((state) => state.register);
    const typeRegister = useSelector((state) => state.register.typeRegister);
    const nameReg = useSelector((state) => state.register.name);
    const accNumberReg = useSelector((state) => state.register.accNumber);
    const fullNameReg = useSelector((state) => state.register.fullName);
    const bankNameReg = useSelector((state) => state.register.bankName);
    const unpReg = useSelector((state) => state.register.unp);
    const bicReg = useSelector((state) => state.register.bic);
    const okpoReg = useSelector((state) => state.register.okpo);
    const fioReg = useSelector((state) => state.register.fio);
    const certificateReg = useSelector((state) => state.register.certificate);
    const adresReg = useSelector((state) => state.register.adres);
    const deliveryReg = useSelector((state) => state.register.delivery);
    const phoneReg = useSelector((state) => state.register.phone);
    const pasportReg = useSelector((state) => state.register.pasport);
    const emailReg = useSelector((state) => state.register.email);
    const passReg = useSelector((state) => state.register.userPass);
    const passRepeatReg = useSelector((state) => state.register.userPassRepeat);
    const loginError = useSelector((state) => state.register.loginError);
    const passRepeatError = useSelector(
        (state) => state.register.passRepeatError
    );

    const dispatch = useDispatch();

    const acChangeTypeReg = (str) => {
        dispatch({
            type: "CHANGE_TYPE_REG",
            payload: str,
        });
    };

    const acChangeNameReg = (str) => {
        dispatch({
            type: "CHANGE_NAME_REG",
            payload: str,
        });
    };

    const acChangeAccNumberReg = (str) => {
        dispatch({
            type: "CHANGE_ACC_NUMBER_REG",
            payload: str,
        });
    };

    const acChangeFullNameReg = (str) => {
        dispatch({
            type: "CHANGE_FUUL_NAME_REG",
            payload: str,
        });
    };

    const acChangeBankNameReg = (str) => {
        dispatch({
            type: "CHANGE_BANK_NAME_REG",
            payload: str,
        });
    };

    const acChangeUnpReg = (str) => {
        dispatch({
            type: "CHANGE_UNP_REG",
            payload: str,
        });
    };

    const acChangeBicReg = (str) => {
        dispatch({
            type: "CHANGE_BIC_REG",
            payload: str,
        });
    };

    const acChangeOkpoReg = (str) => {
        dispatch({
            type: "CHANGE_OKPO_REG",
            payload: str,
        });
    };

    const acChangeFioReg = (str) => {
        dispatch({
            type: "CHANGE_FIO_REG",
            payload: str,
        });
    };

    const acChangeCertificateReg = (str) => {
        dispatch({
            type: "CHANGE_CERTIFICATE_REG",
            payload: str,
        });
    };

    const acChangeAdresReg = (str) => {
        dispatch({
            type: "CHANGE_ADRES_REG",
            payload: str,
        });
    };

    const acChangeDeliveryReg = (str) => {
        dispatch({
            type: "CHANGE_DELIVERY_REG",
            payload: str,
        });
    };

    const acChangePhoneReg = (str) => {
        dispatch({
            type: "CHANGE_PHONE_REG",
            payload: str,
        });
    };

    const acChangePasportReg = (str) => {
        dispatch({
            type: "CHANGE_PASPORT_REG",
            payload: str,
        });
    };

    const acChangeEmailReg = (str) => {
        dispatch({
            type: "CHANGE_EMAIL_REG",
            payload: str,
        });
    };

    const acChangePassReg = (str) => {
        dispatch({
            type: "CHANGE_PASSWORD_REG",
            payload: str,
        });
    };

    const acChangePassRepeatReg = (str) => {
        dispatch({
            type: "CHANGE_PASSWORD_REPEAT_REG",
            payload: str,
        });
    };

    const acChangeLoginError = (str) => {
        dispatch({
            type: "CHANGE_LOGIN_ERROR",
            payload: str,
        });
    };

    const acChangePassRepeatError = (str) => {
        dispatch({
            type: "CHANGE_PASSWORD_REPEAT_ERROR",
            payload: str,
        });
    };

    return {
        register,
        typeRegister,
        nameReg,
        accNumberReg,
        fullNameReg,
        bankNameReg,
        unpReg,
        bicReg,
        okpoReg,
        fioReg,
        certificateReg,
        adresReg,
        deliveryReg,
        phoneReg,
        pasportReg,
        emailReg,
        passReg,
        passRepeatReg,
        acChangeTypeReg,
        acChangeNameReg,
        acChangeAccNumberReg,
        acChangeFullNameReg,
        acChangeBankNameReg,
        acChangeUnpReg,
        acChangeBicReg,
        acChangeOkpoReg,
        acChangeFioReg,
        acChangeCertificateReg,
        acChangeAdresReg,
        acChangeDeliveryReg,
        acChangePhoneReg,
        acChangePasportReg,
        acChangeEmailReg,
        acChangePassReg,
        acChangePassRepeatReg,
        loginError,
        acChangeLoginError,
        passRepeatError,
        acChangePassRepeatError,
    };
};

export default function RegisterFormContainer({acChangeAuthPage}) {
    const {
        register,
        typeRegister,
        nameReg,
        accNumberReg,
        fullNameReg,
        bankNameReg,
        unpReg,
        bicReg,
        okpoReg,
        fioReg,
        certificateReg,
        adresReg,
        deliveryReg,
        phoneReg,
        pasportReg,
        emailReg,
        passReg,
        passRepeatReg,
        acChangeTypeReg,
        acChangeNameReg,
        acChangeAccNumberReg,
        acChangeFullNameReg,
        acChangeBankNameReg,
        acChangeUnpReg,
        acChangeBicReg,
        acChangeOkpoReg,
        acChangeFioReg,
        acChangeCertificateReg,
        acChangeAdresReg,
        acChangeDeliveryReg,
        acChangePhoneReg,
        acChangePasportReg,
        acChangeEmailReg,
        acChangePassReg,
        acChangePassRepeatReg,
        loginError,
        acChangeLoginError,
        passRepeatError,
        acChangePassRepeatError,
    } = useRegister();

    const [isModal, setIsModal] = useState(false);
    const [isLoad, setIsLoad] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isCapcha, setIsCapcha] = useState(false);
    const [textCapcha, setTextCapcha] = useState("");
    const [textInput, setTextInput] = useState("");
    const [thanksText, setThanksText] = useState(false);
    const [errorCapchaText, setErrorCapchaText] = useState(false);

    const onSubmitRega = (e) => {
        e.preventDefault();

        setIsError(false);
        setIsCapcha(false);
        setIsLoad(true);
        setIsModal(true);
        setThanksText(false);
        setErrorCapchaText(false);

        if (passReg !== passRepeatReg) {
            acChangePassRepeatError("Введеные пароли не совпадают");
            setIsError(true);
            setIsLoad(false);
            return;
        }

        checkLogin(emailReg).then((data) => {
            if (data.Status === "InUse") {
                acChangeLoginError("Данный логин уже используется");
                setIsError(true);
                setIsLoad(false);
            } else {
                acChangePassRepeatError("");
                acChangeLoginError("");
                setIsError(false);
                setIsCapcha(true);
                setIsLoad(false);
            }
        });
    };

    const capchaSubmit = () => {
        if (textCapcha === textInput) {
            setIsLoad(true);
            newCustomer({
                Login: emailReg,
                Password: passReg,
                Name: nameReg,
                FullName: fullNameReg,
                Type: typeRegister,
                Adress: adresReg,
                Phone: phoneReg,
                Email: "Вроде как логин и есть емэйл?оО",
                IsFilial: false,
                HeadClient_id:
                    "А не знаю я откуда такое взять, у нас даже если поле такое будет, откуда его будет клиент знать:)",
                OKPO: okpoReg,
                UNP: unpReg,
                BIC: bicReg,
                DeliveryAdress: deliveryReg,
                AccNumber: accNumberReg,
                DirectorName: "Такого поля пока нет",
                DirectorPosition: "Такого поля пока нет",
                DirectorBase: "Такого поля пока нет",
            })
                .then((data) => {
                    setIsCapcha(false);
                    setIsLoad(false);
                    setThanksText(true);
                    console.log(data)
                });
        } else {
            setIsCapcha(false);
            setErrorCapchaText(true);
        }
    };

    const changePassReg = (str) => {
        acChangePassReg(str);
        acChangePassRepeatError(null);
    };

    const changePassRepeatReg = (str) => {
        acChangePassRepeatReg(str);
        acChangePassRepeatError(null);
    };

    const capchaResult = (text) => {
        setTextCapcha(text);
    };

    return (
        <>
            <RegisterForm
                typeRegister={typeRegister}
                nameReg={nameReg}
                accNumberReg={accNumberReg}
                fullNameReg={fullNameReg}
                bankNameReg={bankNameReg}
                unpReg={unpReg}
                bicReg={bicReg}
                okpoReg={okpoReg}
                fioReg={fioReg}
                certificateReg={certificateReg}
                adresReg={adresReg}
                deliveryReg={deliveryReg}
                phoneReg={phoneReg}
                pasportReg={pasportReg}
                emailReg={emailReg}
                passReg={passReg}
                passRepeatReg={passRepeatReg}
                acChangeTypeReg={acChangeTypeReg}
                acChangeNameReg={acChangeNameReg}
                acChangeAccNumberReg={acChangeAccNumberReg}
                acChangeFullNameReg={acChangeFullNameReg}
                acChangeAuthPage={acChangeAuthPage}
                acChangeBankNameReg={acChangeBankNameReg}
                acChangeUnpReg={acChangeUnpReg}
                acChangeBicReg={acChangeBicReg}
                acChangeOkpoReg={acChangeOkpoReg}
                acChangeFioReg={acChangeFioReg}
                acChangeCertificateReg={acChangeCertificateReg}
                acChangeAdresReg={acChangeAdresReg}
                acChangeDeliveryReg={acChangeDeliveryReg}
                acChangePhoneReg={acChangePhoneReg}
                acChangePasportReg={acChangePasportReg}
                acChangeEmailReg={acChangeEmailReg}
                acChangePassReg={changePassReg}
                acChangePassRepeatReg={changePassRepeatReg}
                loginError={loginError}
                onSubmitRega={onSubmitRega}
                passRepeatError={passRepeatError}
            />
            {isModal ? (
                <ModalMiniWrapper setIsModal={setIsModal} height={300}>
                    {thanksText ? <h3>Благодарим за регистрацию!</h3> : null}

                    {errorCapchaText ? (
                        <>
                            <h3>Неверно введен код с картинки, повторите.</h3>
                            <button
                                className="form_buttons_send"
                                onClick={() => {
                                    setIsCapcha(true);
                                    setErrorCapchaText(false);
                                    setTextInput("");
                                }}
                            >
                                Повторить
                            </button>
                        </>
                    ) : null}

                    {isLoad ? <Spinner/> : null}

                    {isError ? (
                        <>
                            <h3>{loginError}</h3>
                            <h3>{passRepeatError}</h3>
                        </>
                    ) : null}

                    {isCapcha ? (
                        <div className="box">
                            <div className="capcha_img">
                                <RCG result={capchaResult}/>
                            </div>
                            <input
                                type="text"
                                value={textInput}
                                onChange={(e) => {
                                    setTextInput(e.target.value);
                                }}
                            />
                            <button className="form_buttons_send" onClick={capchaSubmit}>
                                Отправить
                            </button>
                        </div>
                    ) : null}

                    <style jsx>{`
						.box {
							display: flex;
							flex-direction: column;
							align-items: center;
							width: 200px;
						}

						.capcha_img {
						}

						input {
							border-radius: 5px;
							box-shadow: none;
							border: 1px solid #6e99a3;
							background: white;
							height: 35px;
							font-size: 14px;
							width: 100%;
							color: #404c54;
							margin-bottom: 10px;
							outline: none;
							padding: 0 10px;
						}

						.form_buttons_send {
							color: white;
							background: #608d98;
							border-radius: 5px;
							border: none;
							outline: none;
							box-shadow: none;
							text-transform: uppercase;
							font-weight: bold;
							padding: 13px 25px;
							font-size: 16px;
							cursor: pointer;
						}
					`}</style>
                </ModalMiniWrapper>
            ) : null}
        </>
    );
}
