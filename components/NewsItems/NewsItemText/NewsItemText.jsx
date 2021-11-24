import Link from "next/link";

export default function NewsItemText({ item }) {
	const { id, dateEnd, name, sliceComment } = item;
	
	return (
		<div className="box">
			<span className="date">{dateEnd}</span>
			<Link href="/news/[id]" as={`/news/${id}`}>
				<a className="title">{name}</a>
			</Link>
			<p className="subtitle">{sliceComment}</p>
			<style jsx>{`
				.box {
					display: flex;
					flex-direction: column;
					height: 160px;
					border-bottom: 1px solid #608d98;
				}

				.date {
					color: #608d98;
					font-size: 13px;
					margin-top: 10px;
				}

				.title {
					font-size: 20px;
					font-weight: bold;
					color: #608d98;
					margin-top: 10px;
					margin-bottom: 10px;
				}

				.subtitle {
					margin: 0;
					font-size: 14px;
					line-height: 21px;
				}

				@media (max-width: 1200px) {
					.box {
						height: 180px;
					}
				}

				@media (max-width: 991px) {
					.box {
						height: 145px;
					}

					.title {
						font-size: 16px;
					}

					.subtitle {
						margin: 0;
						font-size: 11px;
						line-height: 16px;
					}
				}

				@media (max-width: 576px) {
					.box {
						height: 145px;
					}

					.title {
						font-size: 12px;
					}

					.subtitle {
						font-size: 9px;
						line-height: 14px;
					}
				}

				@media (max-width: 400px) {
					.box {
						height: 140px;
						align-items: center;
					}

					.title {
						font-size: 16px;
					}

					.subtitle {
						font-size: 14px;
						line-height: 16px;
					}
				}
			`}</style>
		</div>
	);
}
