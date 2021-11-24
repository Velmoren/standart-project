export default function MessageCartEmpty() {
	return (
		<div className="sticky">
			<h3>Корзина пуста</h3>
			<style jsx>{`
				h3 {
					padding: 100px 0;
					text-align: center;
					text-transform: uppercase;
					color: #608d98;
				}

				.sticky {
					position: sticky;
					top: 250px;
				}
			`}</style>
		</div>
	);
}
