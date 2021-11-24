import InputRadio from "../../Elements/InputRadio";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

const useTotalSum = () => {
    const total = useSelector((state) => state.cart.totalPrice);

    const acOnChengeComment = (str) => {
        dispatch({
            type: "CHENGE_COMMENT",
            payload: str,
        });
    };


    return {
        total
    };
};

export default function TotalSum(props) {

    const {minPrice} = props
    const {total} = useTotalSum()

    return (
        <div className="total-sum">
            <div className="alert-minimal-total">
                Минимальная сумма заказа {minPrice.OrderMinPrice} руб
            </div>
            <div className="total-sum-count">
                Общая сумма заказа: {total.toFixed(2)} руб
            </div>
            <style lang="scss" jsx>{`
	          .total-sum {
	            display: flex;
	            flex-direction: column;
	            align-items: flex-end;
	            padding: 30px 0;
	          }
	          
	          .alert-minimal-total {
	            font-size: 12px;
	          }
	          
	          .total-sum-count {
	            font-weight: 700;
	            font-size: 20px;
	          }
	          
	          @media (max-width: 1200px) {
	            .alert-minimal-total {
                   font-size: 10px;
                }
	          
	            .total-sum-count {
	              font-size: 16px;
	            }
	          }
	          
	          @media (max-width: 768px) {
	           .alert-minimal-total {
                   font-size: 10px;
                }
	          
	           .total-sum-count {
	              font-size: 14px;
	            }
	          }
			`}</style>
        </div>
    );
}