import CatalogCard from "./CatalogCard";

export default function CatalogCards(props) {
	const { cards } = props;

	return (
		<div className="box">
			{cards.map((card) => {
				const { id, ...settings } = card;
				return <CatalogCard key={id} settings={settings} />;
			})}
			<style jsx>{`
				.box {
					display: flex;
					flex-wrap: wrap;
					justify-content: space-between;
				}

				@media (max-width: 400px) {
					.box {
						justify-content: center;
					}
				}
			`}</style>
		</div>
	);
}
