import Link from "next/link";

export default function BannerTop(props) {
	const { path_spans, path_link } = props;

	return (
		<div className="box">
			<div className="path">
				{path_link.map((link, index) => {
					return (
						<React.Fragment key={index}>
							<Link href={link.path}>
								<a>{link.label}</a>
							</Link>
							<span className="arrow"> » </span>
						</React.Fragment>
					);
				})}
				{/* <span>{path_spans}</span> */}
			</div>
			<div className="title">
				<h3>{path_spans}</h3>
			</div>
			<style jsx>{`
				.box {
					display: flex;
					flex-direction: column;
					align-items: flex-start;
				}

				.title {
					height: 34px;
				}

				.title h3 {
					margin-top: 15px;
					margin-bottom: 5px;
				}

				.path {
					font-size: 14px;
				}

				a {
					color: #404c54;
					text-decoration: underline;
				}

				span {
					color: #404c54;
				}

				.arrow {
					color: #404c54;
				}

				@media (max-width: 1200px) {
					.title h3 {
						margin-top: 5px;
					}
				}

				@media (max-width: 991px) {
				}

				@media (max-width: 768px) {
					.path {
						font-size: 11px;
					}

					.title {
						height: 25px;
					}
					.title h3 {
						font-size: 14px;
					}
				}

				@media (max-width: 400px) {
					.path {
						font-size: 8px;
					}

					.title h3 {
						font-size: 10px;
					}
				}
			`}</style>
		</div>
	);
}
