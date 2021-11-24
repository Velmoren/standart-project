import { disablePageScroll, enablePageScroll } from "scroll-lock";

export default function ModalMiniWrapper(props) {
	const { children, setIsModal, height = 200 } = props;
	return (
		<div
			className="underlay"
			onClick={(e) => {
				if (!e.target.closest(".block")) {
					setIsModal(false);
					enablePageScroll(document.body);
				}
			}}
		>
			<div className="block">
				<div
					className="close"
					onClick={() => {
						enablePageScroll(document.body);
						setIsModal(false);
					}}
				></div>
				<div className="content">{children}</div>
			</div>
			<style jsx>{`
				.underlay {
					position: fixed;
					top: 0;
					right: 0;
					bottom: 0;
					left: 0;
					display: flex;
					justify-content: center;
					align-items: center;
					background-color: rgba(0, 0, 0, 0.5);
					z-index: 1000;
				}

				.block {
					width: 500px;
					height: ${height}px;
					background-color: white;
					position: relative;
					border: 4px solid #608d98;
					border-radius: 20px;
				}
				.content {
					padding: 30px;
					height: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;
					text-align: center;
				}

				.close {
					position: absolute;
					width: 20px;
					height: 20px;
					top: 7px;
					right: 7px;
					background-image: url("/image/close.png");
					background-repeat: no-repeat;
					cursor: pointer;
				}

				@media (max-width: 576px) {
					.block {
						width: 95vw;
					}
				}
			`}</style>
		</div>
	);
}
