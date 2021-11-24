import React, { Component } from "react";
import Slider from "react-slick";
import items from "../../resources/slideText";

export default class SliderBlock extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			autoplay: true,
			speed: 200,
			autoplaySpeed: 4000,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			customPaging: (i) => (
				<>
					<div
						className="slider_dot"
						onClick={() => {
							this.slider.slickGoTo(i);
						}}
					></div>
					<style jsx>{`
						.slider_dot {
							outline: none;
							width: 20px;
							height: 5px;
							margin: 0 2px;
							background-color: white;
							border-radius: 10px;
						}

						@media (max-width: 1200px) {
							.slider_dot {
								width: 15px;
								height: 5px;
							}
						}

						@media (max-width: 991px) {
							.slider_dot {
								width: 15px;
								height: 5px;
							}
						}

						@media (max-width: 400px) {
							.slider_dot {
								width: 15px;
								height: 5px;
							}
						}
					`}</style>
				</>
			),
		};

		return (
			<div className="slider_block">
				<Slider ref={(slider) => (this.slider = slider)} {...settings}>
					{items.map((item) => {
						return (
							<div className="slider_item" key={item.id}>
								<img src={item.url} alt={item.id} />
							</div>
						);
					})}
				</Slider>
				<style jsx>{`
					.slider_block {
						background: #608d98;
						border-radius: 5px;
						padding: 5px;
						font-size: 16px;
						box-shadow: 7px 7px 6px rgba(0, 0, 0, 0.17);
						color: white;
						min-height: 125px;
					}

					.slider_item {
						height: 100px;
						display: flex;
						flex-direction: column;
						outline: none;
					}

					@media (max-width: 1370px) {
						.slider_block {
							min-height: 100px;
						}

						.slider_item {
							height: 75px;
						}
					}

					@media (max-width: 1200px) {
						.slider_block {
							min-height: 80px;
							padding: 3px;
						}

						.slider_item {
							height: 60px;
						}
					}

					@media (max-width: 991px) {
						.slider_block {
							min-height: 70px;
						}

						.slider_item {
							height: 50px;
						}
					}

					@media (max-width: 576px) {
						.slider_block {
							min-height: 150px;
							padding: 10px;
							font-size: 14px;
						}

						.slider_item {
							height: 120px;
						}

						.slider_item img {
							width: 100%;
						}
					}

					@media (max-width: 400px) {
						.slider_block {
							min-height: 115px;
							padding: 10px;
							font-size: 12px;
						}

						.slider_item {
							height: 95px;
						}
					}
				`}</style>
			</div>
		);
	}
}
