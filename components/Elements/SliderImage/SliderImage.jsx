import {enablePageScroll} from "scroll-lock";
import React from "react";
import {Carousel} from "react-responsive-carousel"


export default function SliderImage(props) {
    const {setIsModal, array, picOther} = props;
    console.log(picOther);
    const newPicOther = picOther.filter(item => item.Type === '')

    const newArr = [...array, ...newPicOther].map(item => {
        return "http://pic.standart.by/" + item.FilePath.substr(12)
    })

    return (
        <div
            className="underlay"
            onClick={(e) => {
                if (!e.target.closest(".block")) {
                    // setIsModal(false);
                    // enablePageScroll(document.body);
                }
            }}
        >
            <div
                className="close"
                onClick={() => {
                    enablePageScroll(document.body);
                    setIsModal(false);
                }}
            />
            <div className="content">
                <Carousel showArrows={true} showIndicators={false} axis={'vertical'} dynamicHeight={true}>
                    {
                        newArr.map((img, idx) => {
                            return (
                                <div key={idx}>
                                    <img src={img} alt={idx}/>
                                </div>
                            )
                        })
                    }
                </Carousel>

            </div>
            <style jsx>{`
				.underlay {
					position: fixed;
					top: 0;
					right: 0;
					bottom: 0;
					left: 0;
					display: flex;
					justify-content: center;
					align-items: center;
					background-color: rgba(0, 0, 0, 0.5);
					z-index: 1000;
					overflow-y: scroll;
				}
				.content {
					padding: 30px;
					width: 80%;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.close {
					position: absolute;
					width: 25px;
					height: 25px;
					top: 30px;
					right: 30px;
					background-image: url("/image/close_w.png");
					background-repeat: no-repeat;
					cursor: pointer;
				}

			`}</style>
        </div>
    );
}
