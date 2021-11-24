import axios from "axios";
import settings from '../services/settings'

export const newCartOrder = (order) => {
    return axios.post(`${settings.BASE_URL}/api/cart/addOrder`, {data: order}).then(res => res.data)
}

export const getOrderMinPrice = () => {
    return axios.get(`${settings.BASE_URL}/api/cart/minTotalPrice`).then(res => res.data)
}
