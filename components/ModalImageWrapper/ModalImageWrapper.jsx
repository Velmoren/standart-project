import {disablePageScroll, enablePageScroll} from "scroll-lock";

export default function ModalImageWrapper(props) {
    const {children, setIsModal} = props;

    return (
        <div
            className="underlay"
            onClick={(e) => {
                if (!e.target.closest(".block")) {
                    setIsModal(false);
                    enablePageScroll(document.body);
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
            <div className="content">{children}</div>
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
