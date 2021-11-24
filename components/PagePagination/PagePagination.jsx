export default function PagePagination(props) {
	const {
		count = 1,
		currentPage,
		incCurrentPage,
		decCurrentPage,
		changeCurrentPage,
	} = props;

	const arrPagination = [];
	for (let i = 1; i <= count; i++) {
		arrPagination.push(i);
	}

	return (
		<div className="box">
			<ul className="list">
				<li className="list_item">
					<a
						href="#"
						onClick={(e) => {
							e.preventDefault();
							decCurrentPage();
						}}
					>
						«
					</a>
				</li>
				{arrPagination.map((item, index) => {
					if (currentPage === 1 && item <= currentPage + 2) {
						return (
							<li className="list_item" key={index}>
								<a
									href=""
									style={{
										backgroundColor: item === currentPage ? "#ebebeb" : "white",
									}}
									onClick={(e) => {
										e.preventDefault();
										changeCurrentPage(item);
									}}
								>
									{item}
								</a>
							</li>
						);
					} else if (currentPage === count && item >= currentPage - 2) {
						return (
							<li className="list_item" key={index}>
								<a
									href=""
									style={{
										backgroundColor: item === currentPage ? "#ebebeb" : "white",
									}}
									onClick={(e) => {
										e.preventDefault();
										changeCurrentPage(item);
									}}
								>
									{item}
								</a>
							</li>
						);
					} else if (
						currentPage !== 1 &&
						item <= currentPage + 1 &&
						item >= currentPage - 1
					) {
						return (
							<li className="list_item" key={index}>
								<a
									href=""
									style={{
										backgroundColor: item === currentPage ? "#ebebeb" : "white",
									}}
									onClick={(e) => {
										e.preventDefault();
										changeCurrentPage(item);
									}}
								>
									{item}
								</a>
							</li>
						);
					} else {
						return null;
					}
				})}
				<li className="list_item">
					<a
						href="#"
						onClick={(e) => {
							e.preventDefault();
							incCurrentPage();
						}}
					>
						»
					</a>
				</li>
			</ul>
			<style jsx>{`
				.box {
					display: flex;
					justify-content: flex-end;
				}

				.list {
					display: flex;
					align-self: flex-end;
				}

				.list_item {
					list-style: none;
					border: 1px solid #ddd;
					border-left: none;
				}
				.list_item:first-child {
					border-left: 1px solid #ddd;
					border-top-left-radius: 5px;
					border-bottom-left-radius: 5px;
				}
				.list_item:last-child {
					border-top-right-radius: 5px;
					border-bottom-right-radius: 5px;
				}
				.list_item a {
					position: relative;
					text-decoration: none;
					font-size: 14px;
					padding: 10px 15px;
					display: block;
					color: #608d98;
				}
				.list_item a:hover {
					background-color: #ebebeb;
				}

				@media (max-width: 1200px) {
					.list_item a {
						font-size: 12px;
						padding: 8px 12px;
					}
				}

				@media (max-width: 576px) {
					.list_item a {
						font-size: 10px;
						padding: 5px 8px;
					}
				}
			`}</style>
		</div>
	);
}
