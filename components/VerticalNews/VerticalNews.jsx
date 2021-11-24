import Link from "next/link";
import NewsItemText from "../NewsItems/NewsItemText";

export default function VerticalNews(props) {
	const latestNews = props.news.slice(0, 3);

	return (
		<div className="box">
			<h2 className="title">Последние новости</h2>
			{latestNews.map((item) => {
				return <NewsItemText item={item} key={item.id} />;
			})}
			<Link href="/news">
				<a className="button">все новости</a>
			</Link>
			<style jsx>{`
				.box {
					display: flex;
					flex-direction: column;
					padding: 0 30px;
				}

				.title {
					font-size: 14px;
					text-transform: uppercase;
					color: #404c54;
				}

				.button {
					margin-top: 20px;
					width: 100%;
					height: 50px;
					line-height: 50px;
					border-radius: 5px;
					text-align: center;
					text-decoration: none;
					text-transform: uppercase;
					background-color: #608d98;
					color: white;
				}

				@media (max-width: 1370px) {
					.box {
						padding: 0 10px;
					}
				}

				@media (max-width: 1200px) {
					.title {
						font-size: 14px;
					}
				}
			`}</style>
		</div>
	);
}
