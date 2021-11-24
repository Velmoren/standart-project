import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import Router from "next/router"
import {getSearch} from '../../../action/getSearch'

const useFilter = () => {
	const dispatch = useDispatch();

	const addFiltersValue = (arr) => {
		dispatch({
			type: "ADD_FILTERS_VALUE",
			payload: arr,
		});
	};

	return { addFiltersValue };
};

const useSearch = () => {
	const searchStr = useSelector((state) => state.search.searchStr);
	const dispatch = useDispatch();

	const updateSearchStr = (e) => {
		const value = e.target.value;
		dispatch({
			type: "UPDATE_SEARCH_STRING",
			payload: value,
		});
	};

	const resetSearchStr = (val) => {
		dispatch({
			type: "RESET_SEARCH_STRING",
			payload: val,
		});
	};

	const addSearchGoods = (goods) => {
		dispatch({
			type: "ADD_SEARCH_GOODS",
			payload: goods,
		});
	};
	return {
		searchStr,
		updateSearchStr,
		resetSearchStr,
		addSearchGoods,
	};
};

export default function FilterItems({
	filters,
	setIsFilter,
	changeCurrentPage,
}) {
	const { addFiltersValue } = useFilter();
	const {
		searchStr,
		updateSearchStr,
		resetSearchStr,
		addSearchGoods,
	} = useSearch();
	const [mat, cov, form, dimA, dimB, dimC] = filters;

	const [filterItems, setFilterItems] = useState({
		matValue: "",
		covValue: "",
		formValue: "",
		dimAValue: "",
		dimBValue: "",
		dimCValue: "",
	});
	const [init, setInit] = useState(false);

	const onChangePage = (event) => {
		event.preventDefault();
		if (searchStr !== "") {
			getSearch(searchStr).then((res) => {
				addSearchGoods(res);
				Router.push("/search");
				resetSearchStr("");
			});
		}
	};

	useEffect(() => {
		if (init) {
			addFiltersValue(filterItems);
			changeCurrentPage(1);
			setIsFilter(true);
			setInit(false);
		}
	}, [filterItems]);

	const onChangeDimA = (e) => {
		let val = e.target.value;

		e.target.selectedIndex === 0
			? setFilterItems({ ...filterItems, dimAValue: "" })
			: setFilterItems({ ...filterItems, dimAValue: val });
		setInit(true);
	};

	const onChangeDimB = (e) => {
		let val = e.target.value;
		e.target.selectedIndex === 0
			? setFilterItems({ ...filterItems, dimBValue: "" })
			: setFilterItems({ ...filterItems, dimBValue: val });
		setInit(true);
	};

	const onChangeDimC = (e) => {
		let val = e.target.value;
		e.target.selectedIndex === 0
			? setFilterItems({ ...filterItems, dimCValue: "" })
			: setFilterItems({ ...filterItems, dimCValue: val });
		setInit(true);
	};

	const onChangeMAt = (e) => {
		let val = e.target.value;
		e.target.selectedIndex === 0
			? setFilterItems({ ...filterItems, matValue: "" })
			: setFilterItems({ ...filterItems, matValue: val });
		setInit(true);
	};

	const onChangeCov = (e) => {
		let val = e.target.value;
		e.target.selectedIndex === 0
			? setFilterItems({ ...filterItems, covValue: "" })
			: setFilterItems({ ...filterItems, covValue: val });
		setInit(true);
	};

	const onChangeForm = (e) => {
		let val = e.target.value;
		e.target.selectedIndex === 0
			? setFilterItems({ ...filterItems, formValue: "" })
			: setFilterItems({ ...filterItems, formValue: val });
		setInit(true);
	};

	return (
		<div className="filter-box">
			<form action="" className="search_form" onSubmit={onChangePage}>
				<input
					placeholder={`DIN/ISO/PN/ГОСТ`}
					type="text"
					className="input"
					id="quicksearchform-query"
					value={searchStr}
					onChange={updateSearchStr}
				/>
				<button className="button" type="submit"></button>
			</form>
			<form className="filters">
				<div className="select">
					<select
						name="dimA"
						id="dimA"
						className="select"
						onChange={onChangeDimA}
					>
						{/* <option defaultValue="Диаметр" style={{ display: "none" }}>
							Диаметр (все)
						</option> */}
						<option className="std">Диаметр (все)</option>
						{dimA && dimA.length !== 0
							? dimA.map((item, index) => {
									if (item !== "") {
										return <option key={index}>{item}</option>;
									}
							  })
							: null}
					</select>
				</div>

				<div className="select">
					<select
						name="dimB"
						id="dimB"
						className="select"
						onChange={onChangeDimB}
					>
						{/* <option defaultValue="Длина" style={{ display: "none" }}>
							Длина (все)
						</option> */}
						<option className="std">Длина (все)</option>
						{dimB && dimB.length !== 0
							? dimB.map((item, index) => {
									if (item !== "") {
										return <option key={index}>{item}</option>;
									}
							  })
							: null}
					</select>
				</div>

				<div className="select">
					<select name="mat" id="mat" className="select" onChange={onChangeMAt}>
						{/* <option defaultValue="Материал" style={{ display: "none" }}>
							Материал (все)
						</option> */}
						<option className="std">Материал (все)</option>
						{mat && mat.length !== 0
							? mat.map((item, index) => {
									if (item !== "") {
										return <option key={index}>{item}</option>;
									}
							  })
							: null}
					</select>
				</div>

				<div className="select">
					<select name="cov" id="cov" className="select" onChange={onChangeCov}>
						{/* <option defaultValue="Покрытие" style={{ display: "none" }}>
							Покрытие (все)
						</option> */}
						<option className="std">Покрытие (все)</option>
						{cov && cov.length !== 0
							? cov.map((item, index) => {
									if (item !== "") {
										return <option key={index}>{item}</option>;
									}
							  })
							: null}
					</select>
				</div>
			</form>
			<style jsx>{`
				input {
					z-index: 82;
				}
				form {
					z-index: 82;
				}
				select {
					z-index: 82;
				}
				.filter-box {
					display: flex;
					justify-content: space-between;
					align-items: center;
					position: sticky;
					background-color: white;
					top: 141px;
					z-index: 82;
				}

				.button {
					position: absolute;
					right: 1px;
					top: 1px;
					border-radius: 5px;
					width: 37px;
					height: 37px;
					background-color: inherit;
					border: none;
					cursor: pointer;
					outline: none;
					background-image: url("/image/search.svg");
					background-repeat: no-repeat;
					background-position: center;
					background-size: 70%;
				}
				.button:hover {
					background-color: #ddd;
				}

				.input {
					width: 100%;
					height: 39px;
					padding: 10px;
					position: relative;
					border-radius: 5px;
					border: 1px solid #608d98;
					color: #608d98;
					font-size: 16px;
					outline: none;
				}

				.filters {
					display: flex;
					justify-content: space-between;
					padding: 15px 0;
					width: 70%;
				}

				.search_form {
					position: relative;
					width: 25%;
				}
				.select {
					position: relative;
				}

				select {
					width: 140px;
					padding: 10px;
					border-radius: 5px;
					border: 1px solid #608d98;
					outline: none;
					color: #608d98;
					appearance: none;
					cursor: pointer;
				}

				.select:after {
					content: "";
					display: block;
					border-style: solid;
					border-width: 6px 5px 0 5px;
					border-color: #608d98 transparent transparent transparent;
					pointer-events: none;
					position: absolute;
					top: 50%;
					right: 1rem;
					z-index: 82;
					margin-top: -3px;
				}

				option {
					cursor: pointer;
				}

				.filter_btn {
					border: 1px solid #608d98;
					background-color: white;
					color: white;
					border-radius: 5px;
					outline: none;
					cursor: pointer;
					width: 40px;
					background-image: url("/image/filter.svg");
					background-repeat: no-repeat;
					background-position: center;
					background-size: 70%;
				}

				.filter_btn:hover {
					background-color: #ebebeb;
				}

				@media (max-width: 1370px) {
					select {
						width: 120px;
						font-size: 12px;
					}

					.select:after {
						right: 0.5rem;
					}
				}

				@media (max-width: 1200px) {
					select {
						width: 95px;
						font-size: 10px;
						padding: 10px 5px;
					}

					.select:after {
						right: 0.3rem;
					}

					.input {
						font-size: 10px;
						height: 33px;
					}

					.input::placeholder {
						font-size: 10px;
					}

					.button {
						width: 31px;
						height: 31px;
					}

					.filter-box {
						top: 121px;
					}
				}

				@media (max-width: 991px) {
					.filter-box {
						top: 95px;
					}

					.filters {
						padding: 10px;
					}
				}

				@media (max-width: 768px) {
					.filter-box {
						top: 90px;
					}

					.filters {
						width: 73%;
						padding: 5px 0;
					}
				}

				@media (max-width: 576px) {
					.filters {
						flex-wrap: wrap;
					}

					.input {
						height: 23px;
						padding: 5px;
					}

					.input::placeholder {
						font-size: 6px;
					}

					.button {
						width: 15px;
						height: 21px;
					}

					.select:after {
						right: 0.2rem;
						border-width: 4px 3px 0 3px;
					}

					select {
						width: 60px;
						font-size: 6px;
						padding: 7px 2px;
					}

					.filter-box {
						top: 90px;
					}
				}

				@media (max-width: 400px) {
					.filter-box {
						flex-direction: column;
						top: 85px;
						padding-top: 5px;
					}

					.search_form {
						width: 100%;
					}

					.filters {
						width: 100%;
						padding: 5px 0;
					}

					.input {
						font-size: 8px;
					}

					.input::placeholder {
						font-size: 8px;
					}

					select {
						width: 70px;
						font-size: 8px;
						padding: 7px 2px;
					}
				}

				@media (max-height: 500px) {
					.filter-box {
						position: static;
						z-index: 0
					}
				}
			`}</style>
		</div>
	);
}
