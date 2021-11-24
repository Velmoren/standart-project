import { disablePageScroll, enablePageScroll } from "scroll-lock";

export default function ModalWrapper(props) {
	const { children, setIsModal } = props;
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
			<div className="block" data-scroll-lock-scrollable>
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
					width: 1200px;
					height: 700px;
					background-color: white;
					position: relative;
					border: 4px solid #608d98;
					border-radius: 20px;
				}
				.content {
					padding: 30px;
					height: 100%;
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

				@media (max-width: 1370px) {
					.block {
						width: 1000px;
						height: 600px;
					}
				}

				@media (max-width: 1200px) {
					.block {
						width: 800px;
						height: 400px;
					}
				}

				@media (max-width: 991px) {
					.block {
						width: 700px;
						height: 300px;
					}
				}

				@media (max-width: 576px) {
					.block {
						width: 95vw;
						height: 80vh;
					}
				}
			`}</style>
		</div>
	);
}
