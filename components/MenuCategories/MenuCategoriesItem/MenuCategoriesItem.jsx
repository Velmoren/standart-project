// import Link from "next/link";
import Link from "../../Link";

export default function MenuCategoriesItem(props) {
	const { itemImage, itemTextext, itemPath } = props;

	return (
		<li className="item">
			<Link href={itemPath} activeClassName="active">
				<a>
					<span className="image"></span>
					<span className="text">{itemTextext}</span>
				</a>
			</Link>

			<style jsx>{`
				.image {
					background: url(${itemImage}) no-repeat center;
					width: 35px;
					min-width: 35px;
					height: 35px;
					margin-right: 10px;
				}
				.item {
					display: flex;
					list-style: none;
					border-bottom: 1px solid #608d98;
				}

				.item:first-child {
					border-top: none;
				}
				.item:last-child {
					border-bottom: none;
				}
				.item a {
					display: flex;
					width: 100%;
					justify-content: flex-start;
					align-items: center;
					padding: 5px 20px;
					text-decoration: none;
					color: #404c54;
				}
				.item a:hover {
					background-color: #ebebeb;
				}
				.item a:visited {
					color: #404c54;
				}

				.active {
					color: #608d98;
					background-color: #ebebeb;
				}
				.item a:first-child {
					border-top-left-radius: 5px;
					border-top-right-radius: 5px;
				}
				.item a:last-child {
					border-bottom-left-radius: 5px;
					border-bottom-right-radius: 5px;
				}

				@media (max-width: 1370px) {
					.image {
						width: 30px;
						height: 30px;
					}
					.text {
						font-size: 12px;
					}
				}

				@media (max-width: 1200px) {
					.item a {
						padding: 5px 5px;
					}

					.image {
						width: 25px;
						height: 25px;
					}

					.text {
						font-size: 11px;
					}
				}
			`}</style>
		</li>
	);
}
