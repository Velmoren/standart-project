import Link from "next/link";

export default function HeroGoodsItem(props) {
	const { settings } = props;
	const { path, url, label } = settings;

	return (
		<>
			<Link href={path}>
				<div className="card">
					<span>{label}</span>
					<img src={url} alt={label} />
				</div>
			</Link>
			<style jsx>{`
				.card {
					width: 145px;
					height: 130px;
					border: 2px solid #608d98;
					padding: 10px;
					margin: 10px;
					border-radius: 20px;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					cursor: pointer;
				}
				.card:hover {
					opacity: 0.7;
				}

				.card span {
					text-transform: uppercase;
					font-weight: bold;
					font-size: 12px;
					color: white;
				}

				.card img {
					max-width: 60px;
					align-self: flex-end;
				}

				@media (max-width: 1370px) {
					.card {
						width: 135px;
						height: 125px;
					}

					.card span {
						font-size: 11px;
					}
				}

				@media (max-width: 1200px) {
					.card {
						width: 110px;
						height: 110px;
						margin: 5px;
						padding: 10px;
						border-radius: 15px;
					}

					.card span {
						font-size: 9px;
					}

					.card img {
						width: 50px;
					}
				}
				@media (max-width: 991px) {
					.card {
						width: 100px;
						height: 100px;
						border: 1px solid #608d98;
					}

					.card span {
						font-size: 8px;
					}

					.card img {
						width: 45px;
					}
				}

				@media (max-width: 576px) {
					.card {
						width: 110px;
						height: 110px;
						border: 1px solid #608d98;
					}

					.card span {
						font-size: 9px;
					}

					.card img {
						width: 50px;
					}
				}

				@media (max-width: 400px) {
					.card {
						margin: 5px;
						width: 85px;
						height: 85px;
						padding: 8px;
					}

					.card span {
						font-size: 7px;
					}

					.card img {
						width: 35px;
					}
				}
			`}</style>
		</>
	);
}
