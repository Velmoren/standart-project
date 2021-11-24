export default function InputCheckbox(props) {
	const { id, label, name, updateRemember } = props;
	return (
		<div className={` form`}>
			<input type="checkbox" name={name} id={id} onChange={updateRemember} />
			<label htmlFor={id}>{label}</label>
			<style jsx>{`
				input {
					display: none;
				}

				label {
					position: relative;
					padding-left: 25px;
					color: #608d98;
					cursor: pointer;
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
				input[type="checkbox"]:checked + label:before {
					content: url("/image/check.png");
					display: block;
					font-size: 13px;
					text-align: center;
					line-height: 13px;
				}

				@media (max-width: 991px) {
					label {
						font-size: 10px;
						padding-left: 16px;
					}

					label:before {
						width: 10px;
						height: 10px;
						top: -1px;
					}

					input[type="checkbox"]:checked + label:before {
						font-size: 8px;
					}
				}
			`}</style>
		</div>
	);
}
