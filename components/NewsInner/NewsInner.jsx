export default function NewsInner(props) {
	const { newsItem } = props;
	
	return (
		<div className="box">
			<img className="image" src={newsItem.image} alt={newsItem.sliceComment} />
			<h2 className="subtitle">{newsItem.sliceComment}</h2>
			<p className="long_subtitle">{newsItem.comment}</p>
			<style jsx>{`
				.box {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.subtitle {
					font-weight: normal;
					font-size: 24px;
					font-style: italic;
					color: #608d98;
					margin-bottom: 20px;
					line-height: 32px;
				}

				.long_subtitle {
					font-size: 16px;
					line-height: 28px;
				}
			`}</style>
		</div>
	);
}
