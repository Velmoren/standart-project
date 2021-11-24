import HeroGoodsItem from "./HeroGoodsItem";

export default function HeroGoods(props) {
	const { cards } = props;
	return (
		<div className="box">
			{cards.map((card) => {
				const { id, ...settings } = card;
				return <HeroGoodsItem key={id} settings={settings} />;
			})}
			<style jsx>{`
				.box {
					width: 90%;
					margin: 0 auto;
					display: flex;
					flex-wrap: wrap;
					justify-content: space-between;
				}

				@media (max-width: 1370px) {
					.box {
						width: 100%;
					}
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
