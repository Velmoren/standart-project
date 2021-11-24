import Router from "next/router";

export default function SearchTop(props) {
	const { searchStr, updateSearchStr, onSubmitGoods } = props;

	const onSubmitForm = (event) => {
		event.preventDefault();
		onSubmitGoods(searchStr);
		Router.push("/search");
	};

	return (
		<form className="form" action="" onSubmit={onSubmitForm}>
			<input
				className="input"
				type="text"
				placeholder={`DIN/ISO/PN/ГОСТ`}
				onChange={updateSearchStr}
				value={searchStr}
			/>
			<button className="button" type="submit"></button>
			<style jsx>{`
				.form {
					width: 100%;
					display: flex;
					justify-content: space-between;
					border: 1px solid #608d98;
					border-radius: 5px;
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
				.input::placeholder {
					color: #608d98;
				}

				@media (max-width: 400px) {
					.input {
						padding: 5px 15px;
						font-size: 14px;
					}

					.button {
						background-size: 60%;
					}
				}
			`}</style>
		</form>
	);
}
