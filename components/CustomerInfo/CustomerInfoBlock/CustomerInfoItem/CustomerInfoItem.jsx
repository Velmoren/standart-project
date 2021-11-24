export default function CustomerInfoItem({ label, name }) {
	return (
		<tr className="item">
			<th className="label">{label} </th>
			<th className="name">
				{typeof name === "boolean"
					? name === true
						? "Организация"
						: "Филиал"
					: name}
			</th>
			<style jsx>{`
				.label {
					background-color: #ebebeb;
				}

				.name {
					background-color: rgba(0, 0, 0, 0.05);
				}

				th {
					text-align: left;
					height: 40px;
					font-size: 12px;
					border: 1px solid #dee2e6;
					padding-left: 10px;
				}

				@media (max-width: 576px) {
					th {
						height: 30px;
						font-size: 10px;
						padding-left: 5px;
					}
				}

				@media (max-width: 400px) {
					th {
						height: 25px;
						font-size: 8px;
						padding-left: 5px;
					}
				}
			`}</style>
		</tr>
	);
}
