import Link from "next/link";
import InputCheckbox from "../Elements/InputCheckbox";

export default function LogInForm(props) {
	const {
		userName,
		updateUserName,
		userPassword,
		updateUserPassword,
		onSubmit,
		userNameError,
		userPasswordError,
		acChangeAuthPage,
		updateRemember,
	} = props;

	return (
		<div className="box">
			<form className="form" onSubmit={onSubmit}>
				<h2 className="form_title">Вход для партнеров</h2>
				<div className="form_control">
					<div className="form_control_wrap">
						<label htmlFor="LogInFormEmail">Логин или E-mail</label>
						<div className="forgotYourPass">
							<a
								href="#"
								onClick={() => {
									acChangeAuthPage("register");
								}}
							>
								Зарегистрироваться?
							</a>
						</div>
					</div>
					<input
						type="text"
						id="LogInFormEmail"
						value={userName}
						onChange={updateUserName}
					/>
					{userNameError ? (
						<span className="errorMessage">{userNameError}</span>
					) : null}
				</div>

				<div className="form_control">
					<div className="form_control_wrap">
						<label htmlFor="LogInFormPassword">Пароль</label>
						<div className="forgotYourPass">
							<Link href="/">
								<a>Забыли пароль?</a>
							</Link>
						</div>
					</div>
					<input
						type="password"
						id="LogInFormPassword"
						value={userPassword}
						onChange={updateUserPassword}
					/>
					{userPasswordError ? (
						<span className="errorMessage">{userPasswordError}</span>
					) : null}
				</div>

				<div className="form_buttons">
					<div className="form_buttons_check">
						<InputCheckbox
							id={`LogInFormCheck`}
							label={`Запомнить меня`}
							name={`ok`}
							updateRemember={updateRemember}
						/>
					</div>
					<button className="form_buttons_send">вход</button>
				</div>
			</form>
			<style jsx>{`
				.errorMessage {
					color: red;
				}
				.box {
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.form {
					width: 420px;
					padding: 40px;
					background: #ebebeb;
					border-radius: 5px;
				}

				.form_title {
					font-size: 24px;
					font-weight: bold;
				}
				.form_control {
					display: flex;
					flex-direction: column;
				}
				.form_control label {
					font-size: 14px;
					font-weight: bold;
				}
				.form_control input {
					border-radius: 5px;
					box-shadow: none;
					border: 1px solid #6e99a3;
					background: white;
					height: 40px;
					font-size: 14px;
					width: 100%;
					color: #608d98;
					margin-bottom: 10px;
					outline: none;
					padding: 0 10px;
				}
				.form_control_wrap {
					display: flex;
					justify-content: space-between;
					align-items: center;
				}
				.form_control_wrap a {
					text-decoration: none;
					color: #608d98;
				}
				.form_buttons {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-top: 20px;
				}

				.form_buttons_check input {
					display: none;
				}
				.form_buttons_check label {
					position: relative;
					padding-left: 25px;
					color: #608d98;
				}
				.form_buttons_check label:before {
					content: "";
					display: block;
					position: absolute;
					width: 13px;
					height: 13px;
					background: white;
					border: 1px solid #608d98;
					border-radius: 3px;
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
				.form_buttons_send:hover {
					background: #6d9aa5;
				}

				@media (max-width: 1200px) {
					.form {
						width: 350px;
						padding: 35px;
					}

					.form_title {
						font-size: 20px;
					}

					.form_control label {
						font-size: 12px;
					}

					.form_control input {
						height: 35px;
						font-size: 12px;
					}

					.form_control_wrap a {
						font-size: 12px;
					}

					.form_buttons_send {
						font-size: 14px;
						padding: 10px 20px;
					}
				}

				@media (max-width: 991px) {
					.form {
						width: 270px;
						padding: 30px;
					}

					.form_title {
						font-size: 16px;
					}
					.form_control label {
						font-size: 10px;
					}

					.form_control input {
						height: 25px;
						font-size: 10px;
						margin-bottom: 5px;
					}

					.form_control_wrap a {
						font-size: 10px;
					}

					.form_buttons_send {
						font-size: 12px;
						padding: 8px 16px;
					}
				}
			`}</style>
		</div>
	);
}
