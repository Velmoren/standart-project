import GoodsListContainer from "../Containers/GoodsListContainer";
import MenuCategories from "../MenuCategories";

export default function GoodsContent(props) {
	const { goods, namePage } = props;

	return (
		<div className="box">
			<div className="left">
				<MenuCategories />
			</div>
			<div className="centerAndDolie">
				<GoodsListContainer goods={goods} namePage={namePage} />
			</div>
			<style jsx>{`
				.box {
					padding-bottom: 20px;
				}

				@media (max-width: 991px) {
					.left {
						display: none;
					}

					.centerAndDolie {
						width: 100%;
						padding-left: 0;
						padding-right: 0;
					}
				}
			`}</style>
		</div>
	);
}
