import MenuCategoriesItem from "./MenuCategoriesItem";
import CATALOG_ITEMS from "../../resources/categories";

export default function MenuCategories() {
	return (
		<div className="itemBox">
			<ul className="list">
				{CATALOG_ITEMS.map((item) => {
					const { id, url, label, path, border } = item;

					return (
						<MenuCategoriesItem
							key={id}
							itemImage={url}
							itemTextext={label}
							itemPath={path}
							itemBorder={border}
						/>
					);
				})}
			</ul>
			<style jsx>{`
				.itemBox {
					color: red;
					position: sticky;
					top: 155px;
					z-index: 100;
				}
				.list {
					display: flex;
					flex-direction: column;
					padding: 0;
					border: 1px solid #608d98;
					border-radius: 5px;
					margin: 0;
				}
				.list li:first-child {
					border-top-right-radius: 5px;
					border-top-left-radius: 5px;
				}
				.list li:first-child a {
					border-top-right-radius: 5px;
					border-top-left-radius: 5px;
				}
				.list li:last-child {
					border-bottom-right-radius: 5px;
					border-bottom-left-radius: 5px;
				}
				.list li:last-child a {
					border-bottom-right-radius: 5px;
					border-bottom-left-radius: 5px;
				}

				@media (max-width: 1200px) {
					.itemBox {
						top: 136px;
					}
				}

				@media (max-width: 991px) {
					.itemBox {
						top: 115px;
					}
				}
			`}</style>
		</div>
	);
}
