export default function PageSelectCountPage({
	setCountPage,
	changeCurrentPage,
}) {
	const onChangeSelect = (e) => {
		setCountPage(+e.target.value);
		changeCurrentPage(1);
	};
	return (
		<div className="box_select">
			<select name="selectPage" id="selectPage" onChange={onChangeSelect}>
				<option value="10">10</option>
				<option value="20">20</option>
				<option value="30">30</option>
				<option value="50">50</option>
				<option value="100">100</option>
			</select>
			<style jsx>{`
				.box_select {
					display: flex;
					justify-content: flex-start;
					position: relative;
				}

				select {
					width: 70px;
					padding: 10px;
					border-radius: 5px;
					border: 1px solid #608d98;
					outline: none;
					color: #608d98;
					appearance: none;
					cursor: pointer;
				}

				.box_select:after {
					content: "";
					display: block;
					border-style: solid;
					border-width: 6px 5px 0 5px;
					border-color: #608d98 transparent transparent transparent;
					pointer-events: none;
					position: absolute;
					top: 50%;
					right: 1rem;
					z-index: 1;
					margin-top: -3px;
				}

				option {
					cursor: pointer;
				}

				@media (max-width: 1200px) {
					select {
						font-size: 12px;
						padding: 8px 12px;
						width: 60px;
					}

					.box_select:after {
						right: 0.8rem;
					}
				}

				@media (max-width: 576px) {
					select {
						font-size: 10px;
						padding: 5px 8px;
						width: 40px;
					}

					.box_select:after {
						right: 0.3rem;
						border-width: 5px 4px 0 4px;
					}
				}
			`}</style>
		</div>
	);
}
