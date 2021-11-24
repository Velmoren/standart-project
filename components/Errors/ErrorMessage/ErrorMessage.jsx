const ErrorMessage = () => {
	return (
		<div className="box">
			<img src="/image/error_img.png" alt="error_img" />
			<style jsx>{`
				.box {
					width: 100%;
					border-radius: 5px;
					background-color: #608d98;
					display: flex;
					justify-content: center;
					padding: 25px 0;
				}
			`}</style>
		</div>
	);
};

export default ErrorMessage;
