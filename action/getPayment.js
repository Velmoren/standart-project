import axios from "axios";
import settings from "../services/settings";

export const getEripPayment = (num, sum, cur, info) => {
    return axios.post(`${settings.BASE_URL}/api/payments/erip`, {num, sum, cur, info}).then(res => res.data)
}

export const getCardPayment = (num, sum, cur, info) => {
    return axios.post(`${settings.BASE_URL}/api/payments/card`, {num, sum, cur, info}).then(res => res.data)
}