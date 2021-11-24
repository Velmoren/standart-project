import Link from "next/link";

export default function CatalogCard(props) {
	const { settings } = props;
	const { url, label, path } = settings;

	return (
		<div className="box">
			<Link href={path}>
				<a>
					<span className="image"></span>
					<span className="title">{label}</span>
				</a>
			</Link>
			<style jsx>{`
				.image {
					background-image: url("${url}");
					background-size: 60%;
					background-repeat: no-repeat;
					background-position: center;
					display: inline-block;
					height: 100px;
					width: 100px;
					background-color: #608d98;
					border-top-left-radius: 5px;
					border-bottom-left-radius: 5px;
				}
				.box {
					display: flex;
					width: 425px;
					margin-bottom: 30px;
					background-color: #ebebeb;
					border-radius: 5px;
				}
				.box:hover {
					opacity: 0.8;
				}
				.box a {
					display: flex;
					justify-content: space-between;
					align-items: center;
					width: 100%;
					text-decoration: none;
				}

				.title {
					width: 325px;
					padding: 25px;
					font-weight: bold;
					font-size: 16px;
					text-transform: uppercase;
					color: #404c54;
				}

				@media (max-width: 1370px) {
					.box {
						width: 380px;
					}

					.title {
						width: 300px;
					}
				}

				@media (max-width: 1200px) {
					.box {
						width: 300px;
						height: 80px;
					}

					.title {
						width: 220px;
						padding: 15px;
						font-size: 14px;
					}

					.image {
						height: 80px;
						width: 80px;
					}
				}

				@media (max-width: 991px) {
					.box {
						width: 240px;
						height: 50px;
					}

					.title {
						width: 190px;
						padding: 10px;
						font-size: 12px;
					}

					.image {
						height: 50px;
						width: 50px;
					}
				}

				@media (max-width: 768px) {
					.box {
						width: 250px;
					}

					.title {
						width: 200px;
						padding: 6px 12px;
						font-size: 10px;
					}

					.image {
						width: 50px;
						height: 50px;
					}
				}

				@media (max-width: 576px) {
					.box {
						width: 180px;
						height: 40px;
						margin-bottom: 20px;
					}

					.title {
						width: 140px;
						padding: 2px 10px;
						font-size: 9px;
					}

					.image {
						width: 40px;
						height: 40px;
					}
				}

				@media (max-width: 400px) {
					.box {
						margin-bottom: 10px;
						width: 250px;
						height: 50px;
					}

					.title {
						width: 200px;
						padding: 2px 10px;
						font-size: 12px;
					}

					.image {
						width: 50px;
						height: 50px;
					}
				}
			`}</style>
		</div>
	);
}
