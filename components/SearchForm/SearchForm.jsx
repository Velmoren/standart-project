export default function SearchForm(props) {
	const { searchStr, updateSearchStr, onSubmitGoods } = props;

	const onChangePage = (event) => {
		event.preventDefault();
		if (searchStr !== "") {
			onSubmitGoods(searchStr);
		}
	};

	return (
		<form className="form" onSubmit={onChangePage}>
			<span className="title">выберите стандарт</span>
			<label className="subtitle" htmlFor="quicksearchform-query">
				DIN / ISO / ГОСТ <span className="red_text">*</span>
			</label>
			<input
				type="text"
				className="input"
				id="quicksearchform-query"
				value={searchStr}
				onChange={updateSearchStr}
			/>
			<button type="submit" className="button">
				найти в каталоге
			</button>
			<style jsx>{`
				.form {
					display: flex;
					flex-direction: column;
					margin-bottom: 45px;
				}

				.title {
					text-transform: uppercase;
					font-size: 20px;
					font-weight: bold;
					margin-bottom: 15px;
					color: white;
					margin-top: 10px;
				}

				.subtitle {
					margin-bottom: 5px;
					color: white;
				}

				.input {
					background: #677580;
					border-radius: 5px;
					box-shadow: none !important;
					border: 1px solid #677580;
					height: 40px;
					font-size: 14px;
					text-indent: 15px;
					padding: 0;
					width: 100%;
					outline: none;
					margin-bottom: 30px;
					color: white;
				}
				.input:hover {
					border: 1px solid #404c54;
				}

				.button {
					display: block;
					margin: 0;
					height: 45px;

					text-align: center;
					text-transform: uppercase;
					font-weight: bold;
					line-height: 20px;
					font-size: 14px;
					color: white;

					text-decoration: none;
					border: none;
					border-radius: 5px;
					background: #404c54;
					outline: none;
					box-shadow: none;
					cursor: pointer;
				}
				.button:hover {
					background: #38444c;
				}

				@media (max-width: 1370px) {
					.form {
						margin-bottom: 65px;
					}
					.title {
						font-size: 16px;
					}

					.subtitle {
						font-size: 12px;
					}

					.input {
						font-size: 12px;
						height: 35px;
						margin-bottom: 20px;
					}

					.button {
						height: 35px;
						font-size: 12px;
					}
				}

				@media (max-width: 1200px) {
					.form {
						margin-bottom: 25px;
					}
					.title {
						font-size: 12px;
						margin-bottom: 10px;
					}

					.subtitle {
						font-size: 10px;
					}

					.input {
						font-size: 10px;
						height: 30px;
						margin-bottom: 15px;
					}

					.button {
						height: 30px;
						font-size: 10px;
					}
				}

				@media (max-width: 991px) {
					.form {
						margin-bottom: 20px;
					}
					.title {
						margin-top: 5px;
						font-size: 11px;
					}

					.subtitle {
						font-size: 8px;
					}

					.input {
						font-size: 8px;
						height: 20px;
						margin-bottom: 10px;
					}

					.button {
						height: 20px;
						font-size: 8px;
					}
				}

				@media (max-width: 576px) {
					.form {
						width: 65%;
					}

					.title {
						font-size: 14px;
					}

					.subtitle {
						font-size: 10px;
					}

					.input {
						font-size: 10px;
						height: 30px;
					}

					.button {
						height: 30px;
						font-size: 10px;
					}
				}

				@media (max-width: 400px) {
					.form {
						width: 60%;
					}
					.title {
						font-size: 12px;
					}

					.subtitle {
						font-size: 8px;
					}

					.input {
						font-size: 8px;
						height: 20px;
					}

					.button {
						height: 20px;
						font-size: 8px;
					}
				}
			`}</style>
		</form>
	);
}
