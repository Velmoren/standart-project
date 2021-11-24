export default function SearchTop(props) {
	const { searchStr, updateSearchStr, onSubmitGoods } = props;

	const onChangePage = (event) => {
		event.preventDefault();
		if (searchStr !== "") {
			onSubmitGoods(searchStr);
		}
	};

	return (
		<form className="form" action="" onSubmit={onChangePage}>
			<input
				placeholder={`DIN/ISO/PN/ГОСТ`}
				type="text"
				className="input"
				id="quicksearchform-query"
				value={searchStr}
				onChange={updateSearchStr}
			/>
			<button className="button" type="submit" />
			<style jsx>{`
				.form {
					width: 100%;
					display: flex;
					justify-content: space-between;
					border: 1px solid #608d98;
					border-radius: 5px;
					position: sticky;
					top: 155px;
					background-color: white;
					z-index: 98;
				}

				.button {
					border-radius: 5px;
					width: 40px;
					background-color: inherit;
					border: none;
					cursor: pointer;
					outline: none;
					background-image: url("/image/search_btn.png");
					background-repeat: no-repeat;
					background-position: center;
				}
				.button:hover {
					background-color: #ddd;
				}

				.input {
					width: 100%;
					padding: 13px 25px;
					position: relative;
					border-radius: 5px;
					border: none;
					color: #608d98;
					font-size: 16px;
					outline: none;
				}

				@media (max-width: 1200px) {
					.form {
						top: 136px;
					}

					.input {
						padding: 5px 15px;
						font-size: 14px;
					}
				}

				@media (max-width: 991px) {
					.form {
						top: 100px;
					}
				}
				@media (max-width: 400px) {
					.form {
						top: 85px;
					}
				}
			`}</style>
		</form>
	);
}
