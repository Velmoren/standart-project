import { enablePageScroll } from "scroll-lock";

export default function MenuBlockGray({ isActiveMenu, acChengeMenuActive }) {
	return (
		<div
			className={`${isActiveMenu ? `active` : ""}`}
			onClick={() => {
				enablePageScroll(document.body);
				acChengeMenuActive(!isActiveMenu);
			}}
		>
			<style jsx>{`
				.active {
					display: block;
					position: fixed;
					top: 0;
					right: 0;
					bottom: 0;
					left: 0;
					background-color: rgba(0, 0, 0, 0.5);
					z-index: 97;
				}
			`}</style>
		</div>
	);
}
