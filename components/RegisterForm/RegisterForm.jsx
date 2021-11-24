import Link from "next/link";
import InputCheckbox from "../Elements/InputCheckbox";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function RegisterForm(props) {
	const {
		acChangeAuthPage,
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
		onSubmitRega,
		passRepeatError,
	} = props;

	return (
		<div className="box">
			<form className="form" onSubmit={onSubmitRega}>
				<h2 className="form_title">
					<span>Регистрация</span>
					<a
						href="#"
						onClick={() => {
							acChangeAuthPage("login");
						}}
					>
						Вход
					</a>
				</h2>
				<div className="type_rega">
					<div className="type_rega_item">
						<input
							type="radio"
							id="rad1"
							checked={typeRegister === "Юридическое лицо"}
							name="type_rega"
							onChange={() => {
								acChangeTypeReg("Юридическое лицо");
							}}
							required
						/>
						<label htmlFor="rad1">Юридическое лицо</label>
					</div>
					<div className="type_rega_item">
						<input
							type="radio"
							id="rad2"
							checked={typeRegister === "Индивидуальный предпрениматель"}
							name="type_rega"
							onChange={() => {
								acChangeTypeReg("Индивидуальный предпрениматель");
							}}
							required
						/>
						<label htmlFor="rad2">Индивидуальный предпрениматель</label>
					</div>
					<div className="type_rega_item">
						<input
							type="radio"
							id="rad3"
							checked={typeRegister === "Физическое лицо"}
							name="type_rega"
							onChange={() => {
								acChangeTypeReg("Физическое лицо");
							}}
							required
						/>
						<label htmlFor="rad3">Физическое лицо</label>
					</div>
				</div>
				<div className="main_block">
					{typeRegister === "Юридическое лицо" ? (
						<>
							<div className="form_control">
								<label htmlFor="rega1">Наименование</label>
								<input
									type="text"
									id="rega1"
									placeholder="ООО Тест"
									name="name"
									value={nameReg}
									onChange={(e) => {
										acChangeNameReg(e.target.value);
									}}
									required
								/>
								{/* {userPasswordError ? (
							<span className="errorMessage">{userPasswordError}</span>
						) : null} */}
							</div>

							<div className="form_control">
								<label htmlFor="rega2">Рассчетный счет</label>
								<input
									type="text"
									id="rega2"
									placeholder="OLMPBYXXXXXX"
									value={accNumberReg}
									onChange={(e) => {
										acChangeAccNumberReg(e.target.value);
									}}
									required
								/>
								{/* {userPasswordError ? (
							<span className="errorMessage">{userPasswordError}</span>
						) : null} */}
							</div>

							<div className="form_control">
								<label htmlFor="rega3">Полное наименование</label>
								<input
									type="text"
									id="rega3"
									placeholder="Общество с ограниченной ответственностью Тест"
									value={fullNameReg}
									onChange={(e) => {
										acChangeFullNameReg(e.target.value);
									}}
									required
								/>
								{/* {userPasswordError ? (
							<span className="errorMessage">{userPasswordError}</span>
						) : null} */}
							</div>

							<div className="form_control">
								<label htmlFor="rega4">Наименование банка</label>
								<input
									type="text"
									id="rega4"
									placeholder="АСБ Беларусбанк"
									value={bankNameReg}
									onChange={(e) => {
										acChangeBankNameReg(e.target.value);
									}}
									required
								/>
								{/* {userPasswordError ? (
							<span className="errorMessage">{userPasswordError}</span>
						) : null} */}
							</div>

							<div className="form_control">
								<label htmlFor="rega5">УНП</label>
								<input
									type="text"
									id="rega5"
									placeholder="123456789"
									value={unpReg}
									onChange={(e) => {
										acChangeUnpReg(e.target.value);
									}}
									required
								/>
								{/* {userPasswordError ? (
							<span className="errorMessage">{userPasswordError}</span>
						) : null} */}
							</div>

							<div className="form_control">
								<label htmlFor="rega6">Код банка</label>
								<input
									type="text"
									id="rega6"
									placeholder="OLMPBY2X"
									value={bicReg}
									onChange={(e) => {
										acChangeBicReg(e.target.value);
									}}
									required
								/>
								{/* {userPasswordError ? (
							<span className="errorMessage">{userPasswordError}</span>
						) : null} */}
							</div>

							<div className="form_control">
								<label htmlFor="rega7">ОКПО</label>
								<input
									type="text"
									id="rega7"
									placeholder="123456789"
									value={okpoReg}
									onChange={(e) => {
										acChangeOkpoReg(e.target.value);
									}}
									required
								/>
								{/* {userPasswordError ? (
							<span className="errorMessage">{userPasswordError}</span>
						) : null} */}
							</div>
						</>
					) : typeRegister === "Индивидуальный предпрениматель" ? (
						<>
							<div className="form_control">
								<label htmlFor="rega10">Наименование</label>
								<input
									type="text"
									id="rega10"
									name="name"
									placeholder="ООО Тест"
									required
									value={nameReg}
									onChange={(e) => {
										acChangeNameReg(e.target.value);
									}}
								/>
								{/* {userPasswordError ? (
							<span className="errorMessage">{userPasswordError}</span>
						) : null} */}
							</div>

							<div className="form_control">
								<label htmlFor="rega11">Рассчетный счет</label>
								<input
									type="text"
									id="rega11"
									placeholder="OLMPBYXXXXXX"
									required
									value={accNumberReg}
									onChange={(e) => {
										acChangeAccNumberReg(e.target.value);
									}}
								/>
								{/* {userPasswordError ? (
							<span className="errorMessage">{userPasswordError}</span>
						) : null} */}
							</div>

							<div className="form_control">
								<label htmlFor="rega12">Фамилия Имя Отчество</label>
								<input
									type="text"
									id="rega12"
									placeholder="Иванов Иван Иванович"
									required
									value={fioReg}
									onChange={(e) => {
										acChangeFioReg(e.target.value);
									}}
								/>
								{/* {userPasswordError ? (
							<span className="errorMessage">{userPasswordError}</span>
						) : null} */}
							</div>

							<div className="form_control">
								<label htmlFor="rega13">Наименование банка</label>
								<input
									type="text"
									id="rega13"
									placeholder="АСБ Беларусбанк"
									required
									value={bankNameReg}
									onChange={(e) => {
										acChangeBankNameReg(e.target.value);
									}}
								/>
								{/* {userPasswordError ? (
							<span className="errorMessage">{userPasswordError}</span>
						) : null} */}
							</div>

							<div className="form_control">
								<label htmlFor="rega14">УНП</label>
								<input
									type="text"
									id="rega14"
									placeholder="123456789"
									required
									value={unpReg}
									onChange={(e) => {
										acChangeUnpReg(e.target.value);
									}}
								/>
								{/* {userPasswordError ? (
							<span className="errorMessage">{userPasswordError}</span>
						) : null} */}
							</div>

							<div className="form_control">
								<label htmlFor="rega15">Код банка</label>
								<input
									type="text"
									id="rega15"
									placeholder="OLMPBY2X"
									required
									value={bicReg}
									onChange={(e) => {
										acChangeBicReg(e.target.value);
									}}
								/>
								{/* {userPasswordError ? (
							<span className="errorMessage">{userPasswordError}</span>
						) : null} */}
							</div>

							<div className="form_control">
								<label htmlFor="rega16">Свидетельство о регистрации</label>
								<input
									type="text"
									id="rega16"
									placeholder="Свидетельство о регистрации №1 от 01.01.2020"
									required
									value={certificateReg}
									onChange={(e) => {
										acChangeCertificateReg(e.target.value);
									}}
								/>
								{/* {userPasswordError ? (
							<span className="errorMessage">{userPasswordError}</span>
						) : null} */}
							</div>

							<div className="form_control">
								<label htmlFor="rega17">Адрес</label>
								<input
									type="text"
									id="rega17"
									placeholder="222001 г.Минск, ул. Красная 4-1"
									required
									value={adresReg}
									onChange={(e) => {
										acChangeAdresReg(e.target.value);
									}}
								/>
								{/* {userPasswordError ? (
							<span className="errorMessage">{userPasswordError}</span>
						) : null} */}
							</div>

							<div className="form_control">
								<label htmlFor="rega18">Адрес доставки</label>
								<input
									type="text"
									id="rega18"
									placeholder="222001 г.Минск, ул. Красная 4-1"
									required
									value={deliveryReg}
									onChange={(e) => {
										acChangeDeliveryReg(e.target.value);
									}}
								/>
								{/* {userPasswordError ? (
							<span className="errorMessage">{userPasswordError}</span>
						) : null} */}
							</div>

							<div className="form_control">
								<label htmlFor="rega19">Телефон</label>
								<input
									type="phone"
									id="rega19"
									placeholder="+375291234567"
									required
									value={phoneReg}
									onChange={(e) => {
										acChangePhoneReg(e.target.value);
									}}
								/>
								{/* {userPasswordError ? (
							<span className="errorMessage">{userPasswordError}</span>
						) : null} */}
							</div>
						</>
					) : (
						<>
							<div className="form_control">
								<label htmlFor="rega20">Фамилия Имя Отчество</label>
								<input
									type="text"
									id="rega20"
									name="FIO"
									placeholder="Иванов Иван Иванович"
									required
									value={fioReg}
									onChange={(e) => {
										acChangeFioReg(e.target.value);
									}}
								/>
								{/* {userPasswordError ? (
							<span className="errorMessage">{userPasswordError}</span>
						) : null} */}
							</div>

							<div className="form_control">
								<label htmlFor="rega21">Адрес</label>
								<input
									type="text"
									id="rega21"
									placeholder="222001 г.Минск, ул. Красная 4-1"
									required
									value={adresReg}
									onChange={(e) => {
										acChangeAdresReg(e.target.value);
									}}
								/>
								{/* {userPasswordError ? (
							<span className="errorMessage">{userPasswordError}</span>
						) : null} */}
							</div>

							<div className="form_control">
								<label htmlFor="rega22">Серия и номер паспорта</label>
								<input
									type="text"
									id="rega22"
									placeholder="МС123456789"
									required
									value={pasportReg}
									onChange={(e) => {
										acChangePasportReg(e.target.value);
									}}
								/>
								{/* {userPasswordError ? (
							<span className="errorMessage">{userPasswordError}</span>
						) : null} */}
							</div>

							<div className="form_control">
								<label htmlFor="rega23">Адрес доставки</label>
								<input
									type="text"
									id="rega23"
									placeholder="222001 г.Минск, ул. Красная 4-1"
									required
									value={deliveryReg}
									onChange={(e) => {
										acChangeDeliveryReg(e.target.value);
									}}
								/>
								{/* {userPasswordError ? (
							<span className="errorMessage">{userPasswordError}</span>
						) : null} */}
							</div>

							<div className="form_control">
								<label htmlFor="rega24">Телефон</label>
								<input
									type="phone"
									id="rega24"
									placeholder="+375291234567"
									required
									value={phoneReg}
									onChange={(e) => {
										acChangePhoneReg(e.target.value);
									}}
								/>
								{/* {userPasswordError ? (
							<span className="errorMessage">{userPasswordError}</span>
						) : null} */}
							</div>
						</>
					)}
				</div>

				<div className="sub_block">
					<div className="form_control">
						<label htmlFor="email">Адрес электронной почты</label>
						<input
							type="email"
							id="email"
							placeholder="info@standart.by"
							value={emailReg}
							onChange={(e) => {
								acChangeEmailReg(e.target.value);
							}}
							required
						/>
						{loginError ? (
							<span className="errorMessage">{loginError}</span>
						) : null}
					</div>
					<div className="pass_block">
						<div className="form_control">
							<label htmlFor="pass">Пароль</label>
							<input
								type="password"
								id="pass"
								placeholder="********"
								value={passReg}
								onChange={(e) => {
									acChangePassReg(e.target.value);
								}}
								required
							/>
							{/* {userPasswordError ? (
							<span className="errorMessage">{userPasswordError}</span>
						) : null} */}
						</div>
						<div className="form_control">
							<label htmlFor="pass2">Повторите пароль</label>
							<input
								type="password"
								id="pass2"
								placeholder="********"
								value={passRepeatReg}
								onChange={(e) => {
									acChangePassRepeatReg(e.target.value);
								}}
								required
							/>
							{passRepeatError ? (
								<span className="errorMessage">{passRepeatError}</span>
							) : null}
						</div>
					</div>
				</div>
				<div className="btn_block">
					<button className="form_buttons_send">Зарегистрироваться</button>
				</div>
			</form>

			<style jsx>{`
				.box {
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.form {
					width: 840px;
					padding: 20px;
					background: #ebebeb;
					border-radius: 5px;
					margin: 20px 0;
				}

				.form_title {
					font-size: 24px;
					font-weight: bold;
					margin-top: 0;
					display: flex;
					justify-content: space-between;
				}
				.form_title a {
					text-decoration: none;
					color: #608d98;
					font-size: 18px;
				}
				.type_rega {
					display: flex;
					justify-content: space-between;
				}
				.type_rega label {
					cursor: pointer;
				}
				.type_rega input {
					margin-left: 0;
				}
				.main_block {
					display: flex;
					flex-wrap: wrap;
					justify-content: space-between;
					padding: 20px 0;
				}
				.sub_block {
					display: flex;
					flex-wrap: wrap;
					justify-content: space-between;
					padding: 30px 0;
				}
				.btn_block {
					display: flex;
					justify-content: center;
				}
				.form_control {
					display: flex;
					flex-direction: column;
				}
				.form_control label {
					font-size: 14px;
					font-weight: bold;
					margin-bottom: 5px;
				}
				.form_control input {
					border-radius: 5px;
					box-shadow: none;
					border: 1px solid #6e99a3;
					background: white;
					height: 35px;
					font-size: 14px;
					width: 350px;
					color: #404c54;
					margin-bottom: 10px;
					outline: none;
					padding: 0 10px;
				}

				.form_control input::placeholder {
					color: #9eb9ca;
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

				@media (max-width: 1200px) {
					.form {
						width: 700px;
						padding: 15px;
					}

					.form_title {
						font-size: 20px;
					}

					.form_title a {
						font-size: 16px;
					}

					.type_rega label {
						font-size: 12px;
					}

					.type_rega input {
						width: 11px;
						height: 11px;
					}

					.form_control label {
						font-size: 12px;
						margin-bottom: 2px;
					}

					.form_control input {
						height: 30px;
						font-size: 12px;
						width: 310px;
						margin-bottom: 5px;
					}

					.form_buttons_send {
						font-size: 14px;
						padding: 10px 20px;
					}

					.main_block {
						padding: 15px 0;
					}

					.sub_block {
						padding: 15px 0;
					}
				}

				@media (max-width: 991px) {
					.form {
						width: 550px;
						padding: 10px;
					}

					.form_title {
						font-size: 20px;
					}

					.form_title a {
						font-size: 14px;
					}

					.type_rega label {
						font-size: 10px;
					}

					.type_rega input {
						width: 9px;
						height: 9px;
					}

					.form_control label {
						font-size: 10px;
						margin-bottom: 2px;
					}

					.form_control input {
						height: 30px;
						font-size: 10px;
						width: 250px;
						margin-bottom: 5px;
					}

					.form_buttons_send {
						font-size: 12px;
						padding: 8px 16px;
					}

					.main_block {
						padding: 10px 0;
					}

					.sub_block {
						padding: 10px 0;
					}
				}

				@media (max-width: 576px) {
					.form {
						width: 310px;
						display: flex;
						flex-direction: column;
						justify-content: center;
						padding: 10px 30px;
					}
					.type_rega {
						flex-direction: column;
					}
					.main_block {
						flex-direction: column;
					}
					.sub_block {
						flex-direction: column;
					}
				}

				@media (max-width: 400px) {
					.form {
						width: 280px;
						display: flex;
						flex-direction: column;
						justify-content: center;
						padding: 10px 20px;
					}

					.form_title {
						font-size: 16px;
					}

					.form_control input {
						width: 240px;
					}
				}
			`}</style>
		</div>
	);
}
