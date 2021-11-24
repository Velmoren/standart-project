import NewsItemText from "./NewsItemText";

export default function NewsItems({ news }) {
	return (
		<>
			{news.map((item) => {
				const { id, image, name } = item;

				return (
					<div className="box" key={id}>
						<div className="content">
							<img className="img" src={image} alt={name} />
							<NewsItemText item={item} />
						</div>
					</div>
				);
			})}
			<style jsx>{`
				.box {
					display: flex;
					justify-content: center;
					margin-bottom: 30px;
				}

				.content {
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					width: 310px;
					height: 340px;
				}

				.img {
					border-radius: 5px;
				}

				@media (max-width: 1200px) {
					.content {
						width: 280px;
						height: 340px;
					}
				}

				@media (max-width: 991px) {
					.content {
						width: 230px;
						height: 280px;
					}
				}

				@media (max-width: 576px) {
					.content {
						width: 170px;
						height: 240px;
					}
				}

				@media (max-width: 400px) {
					.content {
						align-items: center;
						width: 300px;
						height: 300px;
					}
				}
			`}</style>
		</>
	);
}
