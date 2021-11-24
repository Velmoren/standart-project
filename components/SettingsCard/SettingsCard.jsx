import PagePagination from "../PagePagination";
import PageSelectCountPage from "../PageSelectCountPage";
import SettingsCardItem from "./SettingsCardItem";
import FilterItems from "./FilterItems";
import Spinner from "../Spinner";
import SettingsImages from "./SettingsImages";
import MessageNotFound from "../Elements/MessageNotFound";
import ModalImageWrapper from "../ModalImageWrapper";
import { useState, useEffect } from "react";
import SettingsCardMobile from "./SettingsCardMobile";
import SettingsCardDesctop from "./SettingsCardDesctop";

export default function SettingsCard(props) {
	const {
		isAuth,
		goods,
		addCartItems,
		size,
		setCountPage,
		currentPage,
		incCurrentPage,
		decCurrentPage,
		changeCurrentPage,
		loading,
		filters,
		isFilter,
		setIsFilter,
		notGoods,
		pic1,
		pic2,
		pic3,
		standart,
		picOther
	} = props;

	const [isModalImage, setIsModalImage] = useState(false);
	const [clickedImage, setClickedImage] = useState(null);

	const onChengeImage = (elem) => {
		setClickedImage(elem);
		setIsModalImage(true);
	};

	return (
		<div className="container_settings">
			<SettingsImages
				picOther={picOther}
				pic1={pic1}
				pic2={pic2}
				pic3={pic3}
				standart={standart}
				onChengeImage={onChengeImage}
			/>
			<FilterItems
				filters={filters}
				isFilter={isFilter}
				setIsFilter={setIsFilter}
				changeCurrentPage={changeCurrentPage}
			/>
			<div className="box_settings">
				<h3>Размерные характеристики</h3>
				<div className="table_box">
					<div className="table_container">
						<SettingsCardDesctop
							goods={goods}
							addCartItems={addCartItems}
							isAuth={isAuth}
							pic1={pic1}
							loading={loading}
							notGoods={notGoods}
						/>

						{!loading && !notGoods ? (
							<SettingsCardMobile
								goods={goods}
								addCartItems={addCartItems}
								isAuth={isAuth}
								pic1={pic1}
							/>
						) : null}

						{loading && !notGoods ? <Spinner /> : null}
						{notGoods ? <MessageNotFound /> : null}
					</div>
				</div>
			</div>

			<div className="buttons_tab">
				<PageSelectCountPage
					setCountPage={setCountPage}
					changeCurrentPage={changeCurrentPage}
				/>
				<PagePagination
					count={size}
					currentPage={currentPage}
					incCurrentPage={incCurrentPage}
					decCurrentPage={decCurrentPage}
					changeCurrentPage={changeCurrentPage}
				/>
			</div>

			{isModalImage ? (
				<ModalImageWrapper setIsModal={setIsModalImage}>
					<img src={clickedImage} alt="pic" />
				</ModalImageWrapper>
			) : null}

			<style jsx>{`
				.stycky_mobile {
					display: none;
					width: 100%;
				}
				.container_settings {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
				}

				.box_settings {
					height: 100%;
				}

				.table_box {
					height: 100%;
				}

				.table_container {
					display: flex;
					flex-direction: column;
					align-items: center;
					min-height: 550px;
					height: 100%;
					position: relative;
				}

				.buttons_tab {
					display: flex;
					justify-content: space-between;
					align-items: center;
				}

				@media (max-width: 1200px) {
					.th {
						font-size: 7px;
						font-family: Calibri;
						padding: 5px 2px;
					}

					.table_container {
						min-height: 450px;
					}
				}

				@media (max-width: 991px) {
					.table_sticky {
						top: 145px;
					}

					.table_container {
						min-height: 450px;
					}
				}

				@media (max-width: 768px) {
					.table_sticky {
						top: 130px;
					}
				}

				@media (max-width: 576px) {
					.table_desctop {
						display: none;
					}

					.stycky_mobile {
						display: block;
					}

					.table_container {
						min-height: 410px;
					}
				}

				@media (max-width: 400px) {
					.th {
						font-size: 5px;
					}

					.table_sticky {
						top: 125px;
					}

					.box_settings h3 {
						font-size: 12px;
						margin: 5px 0;
					}
				}
			`}</style>
		</div>
	);
}
