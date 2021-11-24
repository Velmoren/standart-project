import {useState, useEffect} from "react"
import SliderImage from "../../Elements/SliderImage";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

export default function SettingsImages(props) {
	const { pic1, pic2, pic3, standart, onChengeImage, picOther } = props;
	const [isModal, setIsModal] = useState(false);

	return (
		<div className="images">
			<div className="images_item">
				<div className="images_img">
					{
						pic1.length === 0 ? (
							<img src={"/image/gear.png"} alt="pic1" />
							) : (
								pic1.map((pictures, index) => {
									const name = pictures.Name
									const path = "http://pic.standart.by/" + pictures.FilePath.substr(12)

									if(index === 0) {
										return (
											<img
												key={index}
												src={path}
												alt={name}
												onClick={() => {
													disablePageScroll(document.body);
													onChengeImage(path);
												}}
											/>
										)
									}
								})
							)
					}
				</div>
			</div>
			<div className="images_item">
				<div className="images_img">
					{
						pic2.length === 0 ? (
							<img src={"/image/gear.png"} alt="pic1" />
						) : (
							pic2.map((pictures, index) => {
								const name = pictures.Name
								const path = "http://pic.standart.by/" + pictures.FilePath.substr(12)

								if(index === 0) {
									return (
										<img
											key={index}
											src={path}
											alt={name}
											onClick={() => {
												disablePageScroll(document.body);
												onChengeImage(path);
											}}
										/>
									)
								}
							})
						)
					}
				</div>
			</div>
			<div className="images_item">
				<div className="images_img">
					{
						pic3.length === 0 ? (
							<img src={"/image/gear.png"} alt="pic1" />
						) : (
							pic3.map((pictures, index) => {
								const name = pictures.Name
								const path = "http://pic.standart.by/" + pictures.FilePath.substr(12)

								if(index === 0) {
									return (
										<img
											key={index}
											src={path}
											alt={name}
											onClick={() => {
												disablePageScroll(document.body);
												setIsModal(true)
											}}
										/>
									)
								}
							})
						)
					}
				</div>
			</div>
			<div className="images_item">
				<div className="images_img item_std">
					<ul className="list">
						<li>
							<span className="list_name">{standart.TYPE}:</span>
							<span className="list_value">{standart.VALUE}</span>
						</li>
						{standart.ANALOG
							? standart.ANALOG.map((item, index) => {
									return (
										<li key={index}>
											<span className="list_name">{item.TYPE}: </span>
											<span className="list_value">{item.VALUE}</span>
										</li>
									);
							  })
							: null}
					</ul>
				</div>
			</div>
			{
				isModal ? <SliderImage array={pic3} picOther={picOther} setIsModal={setIsModal}/> : null
			}

			<style jsx>{`
				.images {
					display: flex;
					justify-content: space-between;
				}

				.images_item {
					width: 210px;
					height: 120px;
					border: 1px solid #b8c9d6;
					border-radius: 5px;
					padding: 5px;
				}

				.images_img {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 200px;
					height: 110px;
				}

				.images_img img {
					max-width: 100%;
					max-height: 100%;
					cursor: pointer;
				}

				.list {
					margin: 5px auto;
					list-style: none;
					padding: 0;
					padding-left: 0;
				}

				.list li {
					display: flex;
					position: relative;
					margin-bottom: 5px;
				}

				.list li:after {
					content: "";
					display: block;
					width: 100%;
					height: 1px;
					background-color: #b8c9d6;
					position: absolute;
					bottom: 0;
				}

				.list_name {
					font-weight: bold;
					min-width: 80px;
					font-size: 12px;
				}

				.list_value {
					font-size: 12px;
				}

				.item_std {
					justify-content: center;
					align-items: center;
				}

				@media (max-width: 1370px) {
					.images_item {
						width: 180px;
						height: 100px;
					}

					.images_img {
						width: 170px;
						height: 90px;
					}

					.list_name {
						font-size: 11px;
						min-width: 60px;
					}

					.list_value {
						font-size: 11px;
					}
				}

				@media (max-width: 1200px) {
					.list_name {
						font-size: 16px;
					}

					.list_value {
						font-size: 16px;
					}

					.images_item {
						width: 140px;
						height: 80px;
						padding: 5px;
					}

					.images_img {
						width: 130px;
						height: 70px;
					}

					.list_name {
						font-size: 8px;
						min-width: 45px;
					}

					.list_value {
						font-size: 8px;
					}
				}

				@media (max-width: 991px) {
					.list_name {
						font-size: 8px;
						min-width: 35px;
					}

					.list_value {
						font-size: 8px;
					}
				}

				@media (max-width: 768px) {
					.images_item {
						width: 130px;
					}

					.images_img {
						width: 120px;
					}
				}

				@media (max-width: 576px) {
					.images {
						flex-wrap: wrap;
					}

					.images_item {
						width: 90px;
						height: 55px;
						padding: 3px;
					}

					.images_img {
						width: 80px;
						height: 45px;
					}

					.list {
						padding: 2px;
						margin: 0;
					}

					.list li {
						margin-bottom: 3px;
					}

					.list_name {
						font-size: 6px;
						min-width: 30px;
					}

					.list_value {
						font-size: 6px;
					}
				}

				@media (max-width: 400px) {
					.images_item {
						width: 70px;
						height: 50px;
						padding: 3px;
					}

					.images_img {
						width: 60px;
						height: 40px;
					}

					.list {
						padding: 0;
						margin: 0;
					}

					.list_name {
						font-size: 8px;
						min-width: 20px;
					}

					.list_value {
						font-size: 8px;
					}
				}
			`}</style>
		</div>
	);
}
