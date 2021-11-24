import Link from "next/link";

export default function CartItem(props) {
    const {
        isAuth,
        cartItem,
        onClear,
        onChangeCount,
        acOnIncCount,
        acOnDecCount,
    } = props;

    const {
        dimA,
        dimB,
        TYPE,
        VALUE,
        image,
        total,
        status,
        barcode,
        standartName,
        priceForHundred,
        mat,
        cov,
        quantity,
        weight,
        NDS,
        nds_summ,
        priceForHundredAndNDS,
    } = cartItem;

    const imagePath = "http://pic.standart.by/" + image[0].FilePath.substr(12)

    return (
        <div className="body">
            <div className="image">
                <img src={imagePath ? imagePath : "/image/prod_img.jpg"} alt=""/>
            </div>

            <div className="text_box">
                <div className="description">
                    <h1 className="description_title">
                        {standartName + ","}
                        {mat ? ` ${mat},` : null}
                        {cov ? ` ${cov},` : null}
                        {TYPE ? ` ${TYPE}${VALUE},` : null}
                        {dimA ? ` ${dimA} ` : null}
                        {dimB ? `X ${dimB}` : null}
                    </h1>
                </div>

                <div className="weight">
                    <span>{weight}</span>
                </div>

                <div className="price">
                    <span>{priceForHundred} руб</span>
                </div>

                <div className="nds">
                    <span>{NDS}%</span>
                </div>

                <div className="nds_summ">
                    <span>{nds_summ.toFixed(3)}</span>
                </div>

                <div className="price_and_nds">
                    <span>{priceForHundredAndNDS.toFixed(2)}</span>
                </div>

                {isAuth ? (
                    <div className="status">
                        <div
                            style={{
                                backgroundColor: status === "В наличии" ? "#608d98" : "white",
                            }}
                        />
                        <span>{status}</span>
                    </div>
                ) : null}

                <div className="decrement">
                    <img
                        src="/image/minus.png"
                        alt="minus"
                        onClick={() => {
                            acOnDecCount(barcode);
                        }}
                    />
                </div>
                <div className="input">
                    <input
                        type="text"
                        value={quantity}
                        onChange={(event) => {
                            onChangeCount(event.target.value, barcode);
                        }}
                        onBlur={(event) => {
                            if (event.target.value <= 0) {
                                if (confirm("Вы хотите удалить элемент из корзины?")) {
                                    onClear(barcode);
                                } else {
                                    onChangeCount(1, barcode);
                                }
                            }
                        }}
                    />
                </div>
                <div className="increment">
                    <img
                        src="/image/plus.png"
                        alt="plus"
                        onClick={() => {
                            acOnIncCount(barcode);
                        }}
                    />
                </div>

                <div className="final_price">{total.toFixed(2)} руб</div>
                <div className="clear">
                    <img
                        src="/image/close.png"
                        alt="close"
                        onClick={() => onClear(barcode)}
                    />
                </div>
            </div>
            <style jsx>{`
				.image {
					width: 7%;
					display: flex;
					justify-content: center;
					align-items: center;
					cursor: pointer;
					background-color: white;
				}

				.text_box {
					width: 93%;
					display: flex;
					flex-wrap: wrap;
				}

				.description {
					width: 30%;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					padding: 10px 5px;
					padding-left: 10px;
				}

				.description_title {
					text-transform: uppercase;
					color: #608d98;
					text-decoration: none;
					font-weight: bold;
					position: relative;
					font-size: 14px;
					margin: 0;
				}

				.price_and_nds {
					width: ${isAuth ? "7%" : "9%"};
					display: flex;
					justify-content: center;
					align-items: center;
					padding: 10px 0;
					font-size: 14px;
					font-weight: bold;
					color: #404c54;
				}

				.nds {
					width: 9%;
					display: flex;
					justify-content: center;
					align-items: center;
					padding: 10px 0;
					font-size: 14px;
					font-weight: bold;
					color: #404c54;
				}

				.nds_summ {
					width: ${isAuth ? "10%" : "12%"};
					display: flex;
					justify-content: center;
					align-items: center;
					padding: 10px 0;
					font-size: 14px;
					font-weight: bold;
					color: #404c54;
				}

				.price {
					width: ${isAuth ? "10%" : "14%"};
					padding: 10px 10px;
					display: flex;
					justify-content: center;
					align-items: center;
					padding: 10px 0;
					font-size: 14px;
					font-weight: bold;
					color: #404c54;
				}

				.weight {
					width: 4%;
					padding: 10px 10px;
					display: flex;
					justify-content: center;
					align-items: center;
					padding: 10px 0;
					font-size: 14px;
					font-weight: bold;
					color: #404c54;
				}

				.status {
					width: 8%;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 14px;
					font-weight: bold;
					color: #404c54;
				}

				.status div {
					border-radius: 50%;
					width: 10px;
					height: 10px;
					margin-right: 3px;
					border: 2px solid #608d98;
				}

				.increment,
				.decrement {
					width: 2%;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.increment img,
				.decrement img {
					width: 18px;
					cursor: pointer;
				}

				.input {
					width: 7%;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.input input {
					width: 100%;
					border: 1px solid #608d98;
					border-radius: 5px;
					padding: 3px 10px;
					text-align: center;
					font-size: 14px;
					font-weight: bold;
					color: #404c54;
				}

				.final_price {
					width: 9%;
					display: flex;
					justify-content: center;
					align-items: center;
					padding: 10px 0;
					font-size: 14px;
					font-weight: bold;
					color: #404c54;
				}

				.clear {
					width: 2%;
					display: flex;
					justify-content: center;
					align-items: center;
				}
				.clear img {
					cursor: pointer;
				}

				.body {
					display: flex;
					min-height: 50px;
					margin: 5px 0;
					border: 1px solid #608d98;
				}

				@media (max-width: 1370px) {
					.description_title {
						font-size: 12px;
					}

					.description_settings_item {
						font-size: 12px;
					}

					.price {
						font-size: 12px;
					}

					.price_and_nds {
						font-size: 12px;
					}

					.settings {
						font-size: 12px;
					}

					.increment img,
					.decrement img,
					.clear img {
						width: 16px;
					}

					.pack {
						font-size: 12px;
					}

					.input input {
						font-size: 12px;
					}

					.final_price {
						font-size: 12px;
					}
					
					.nds {
						font-size: 12px;
					}
					
					.nds_summ {
						font-size: 12px;
					}

					.status,
					.weight {
						font-size: 13px;
					}
				}

				@media (max-width: 1200px) {
					.description_title {
						font-size: 12px;
					}

					.description_settings_item {
						font-size: 10px;
					}

					.price {
						font-size: 12px;
					}

					.increment img,
					.decrement img,
					.clear img {
						width: 14px;
					}

					.pack {
						font-size: 12px;
					}

					.status,
					.weight {
						font-size: 10px;
					}

					.input input {
						font-size: 12px;
						padding: 3px 5px;
					}

					.final_price {
						font-size: 12px;
					}
				}

				@media (max-width: 991px) {
					.body {
						min-height: 45px;
					}

					.description_title {
						font-size: 9px;
					}

					.description_settings_item {
						font-size: 9px;
					}

					.price_and_nds {
						font-size: 9px;
					}

					.settings {
						font-size: 9px;
					}

					.increment img,
					.decrement img,
					.clear img {
						width: 12px;
					}

					.price {
						font-size: 9px;
					}

					.pack {
						font-size: 9px;
					}
					
					.nds {
						font-size: 9px;
					}
					
					.nds_summ {
						font-size: 9px;
					}

					.status,
					.weight {
						font-size: 7px;
					}

					.input input {
						font-size: 9px;
						padding: 3px 5px;
					}

					.final_price {
						font-size: 9px;
					}
				}
				@media (max-width: 768px) {
					.body {
						min-height: 40px;
					}

                    .nds,
                    .nds_summ,
					.description_title,
					.price_and_nds,
					.settings,
					.price,
					.pack,
					.final_price {
						font-size: 7px;
					}

					.status {
						font-size: 5px;
					}

					.input input {
						font-size: 7px;
						padding: 3px;
					}

					.increment img,
					.decrement img,
					.clear img {
						width: 8px;
					}
				}

				@media (max-width: 576px) {
					.body {
						margin: 2px 0;
						position: relative;
					}
					.image {
						display: none;
						width: 10%;
						align-items: flex-start;
					}

					.text_box {
						width: 100%;
					}

					.description {
						width: 100%;
						padding: 5px 5px;
						padding-right: 20px;
					}
					.description_title {
						font-size: 8px;
						text-align: center;
					}

					.price_and_nds,
					.nds_summ,
					.price,
					.nds,
					.weight {
						width: 20%;
					}

					.status {
						width: 30%;
						order: 3;
						font-size: 8px;
						text-transform: uppercase;
						font-weight: bold;
					}
					
                    .nds,
                    .nds_summ,
					.price_and_nds,
					.settings,
					.price,
					.pack,
					.final_price {
						padding: 5px 0;
						font-size: 8px;
					}

					.input {
						width: 11%;
					}

					.increment,
					.decrement {
						width: 4%;
					}

					.input {
						order: 5;
					}

					.increment {
						order: 6;
					}

					.decrement {
						order: 4;
					}

					.clear {
						position: absolute;
						right: 5px;
						top: 5px;
						height: 10px;
					}

					.final_price {
						width: 40%;
						order: 3;
					}

					.increment img,
					.decrement img,
					.clear img {
						width: 10px;
					}
				}
				@media (max-width: 400px) {
					.status {
						font-size: 7px;
					}
				}
			`}</style>
        </div>
    );
}
