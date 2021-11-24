export default function TableGoods(props) {
	const { goods } = props;
	return (
		<div className="box">
			{goods.map((item) => {
				return <div key={item.id}>{item.standartName}</div>;
			})}
		</div>
	);
}
