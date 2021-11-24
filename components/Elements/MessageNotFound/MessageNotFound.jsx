export default function MessageNotFound() {
	return (
		<div className="sticky">
			<h3>Данный товар отсутствует</h3>
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
