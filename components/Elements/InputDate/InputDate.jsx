import DatePicker from "react-datepicker";
import ru from "date-fns/locale/ru";
import { useState, useEffect } from "react";

export default function InputDate(props) {
	const { acChangeStartData, acChangeEndData, acChangeCurrentPage } = props;
	const [startDate, setStartDate] = useState(new Date());
	const [endedDate, setEndedDate] = useState(new Date());

	const onResetFilter = () => {
		const newDate = new Date();

		setStartDate(new Date());
		setEndedDate(new Date());

		acChangeStartData("");

		acChangeEndData(
			`${newDate.getFullYear()}${
				newDate.getMonth() + 1 < 10
					? "0" + (newDate.getMonth() + 1)
					: newDate.getMonth() + 1
			}${newDate.getDate() < 10 ? "0" + newDate.getDate() : newDate.getDate()}`
		);
	};

	const onChangeStartData = (newDate) => {
		acChangeStartData(newDate);
		acChangeCurrentPage(1);
	};

	const onChangeEndData = (newDate) => {
		acChangeEndData(newDate);
		acChangeCurrentPage(1);
	};

	return (
		<div className="filters">
			<DatePicker
				locale={ru}
				dateFormat="dd/MM/yyyy"
				selected={startDate}
				onChange={(date) => {
					const newDate = `${date.getFullYear()}${
						date.getMonth() + 1 < 10
							? "0" + (date.getMonth() + 1)
							: date.getMonth() + 1
					}${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`;
					onChangeStartData(newDate);
					setStartDate(date);
				}}
			/>

			<DatePicker
				locale={ru}
				dateFormat="dd/MM/yyyy"
				selected={endedDate}
				onChange={(date) => {
					const newDate = `${date.getFullYear()}${
						date.getMonth() + 1 < 10
							? "0" + (date.getMonth() + 1)
							: date.getMonth() + 1
					}${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`;
					onChangeEndData(newDate);
					setEndedDate(date);
				}}
			/>

			<button className="resetBtn" onClick={onResetFilter}>
				Сбросить
			</button>

			<style jsx>{`
				.filters {
					position: relative;
					display: flex;
				}

				.resetBtn {
					margin-left: 20px;
					outline: none;
					border: none;
					cursor: pointer;
					text-transform: uppercase;
					border-radius: 5px;
					padding: 9px 15px;
					background-color: #608d98;
					color: white;
					font-weight: bold;
				}

				@media (max-width: 1200px) {
					.resetBtn {
						font-size: 10px;
						padding: 5px 10px;
					}
				}

				@media (max-width: 768px) {
					.resetBtn {
						font-size: 8px;
						padding: 5px 5px;
					}
				}

				@media (max-width: 576px) {
					.resetBtn {
						margin-left: 5px;
					}
				}
			`}</style>
		</div>
	);
}
