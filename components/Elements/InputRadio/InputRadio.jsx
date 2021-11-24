export default function InputRadio(props) {
	const { id, label, name, onChange, checked } = props;
	return (
		<div className="input_item">
			<input
				type="radio"
				name={name}
				id={id}
				onChange={onChange}
				defaultChecked={checked}
			/>
			<label htmlFor={id}>{label}</label>
			<style jsx>{`
				.input_item {
					margin-bottom: 10px;
				}
				input {
					display: none;
				}

				label {
					position: relative;
					padding-left: 25px;
					color: #608d98;
					cursor: pointer;
					font-size: 16px;
				}
				label:before {
					content: "";
					display: block;
					position: absolute;
					width: 13px;
					height: 13px;
					background: white;
					border: 1px solid #608d98;
					border-radius: 3px;
				}
				input[type="radio"]:checked + label:before {
					content: url("/image/check.png");
					display: block;
					font-size: 13px;
					text-align: center;
					line-height: 13px;
				}

				@media (max-width: 1200px) {
					label {
						font-size: 12px;
					}
				}

				@media (max-width: 991px) {
					label {
						font-size: 10px;
					}
				}

				@media (max-width: 768px) {
					label {
						font-size: 8px;
						padding-left: 15px;
					}

					label:before {
						width: 8px;
						height: 8px;
						top: 0;
					}

					input[type="radio"]:checked + label:before {
						font-size: 8px;
						line-height: 8px;
					}
				}

				@media (max-width: 768px) {
					label {
						font-size: 8px;
						padding-left: 15px;
					}

					label:before {
						width: 8px;
						height: 8px;
						top: 0;
					}

					input[type="radio"]:checked + label:before {
						font-size: 8px;
						line-height: 8px;
					}
				}

				@media (max-width: 576px) {
					.input_item {
						display: inline-block;
						margin-right: 10px;
					}
					label {
						font-size: 10px;
						padding-left: 15px;
					}

					label:before {
						width: 8px;
						height: 8px;
						top: 0;
					}

					input[type="radio"]:checked + label:before {
						font-size: 8px;
						line-height: 8px;
					}
				}
			`}</style>
		</div>
	);
}
