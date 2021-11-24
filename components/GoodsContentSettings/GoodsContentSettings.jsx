import GoodsIdContainer from "../Containers/GoodsIdContainer";
import MenuCategories from "../MenuCategories";
import ErrorBoundry from "../Errors/ErrorBoundry";

export default function GoodsContentSettings(props) {
	const { ID, giveItemName, idType } = props;
	return (
		<div className="box">
			<div className="left">
				<MenuCategories />
			</div>
			<div className="centerAndDolie">
				<ErrorBoundry>
					<GoodsIdContainer
						ID={ID}
						giveItemName={giveItemName}
						idType={idType}
					/>
				</ErrorBoundry>
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
