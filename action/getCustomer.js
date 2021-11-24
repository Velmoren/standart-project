import axios from "axios";
import settings from '../services/settings'

export const getCustomerInfo = (id) => {
    return axios.get(`${settings.BASE_URL}/api/customer/info?id=${id}`).then(res => res.data)
}

export const getCustomerOrders = (id, currentPage, countPage, startData, endData) => {
    return axios.get(`${settings.BASE_URL}/api/customer/orders?id=${id}&offset=${currentPage}&count=${countPage}&startData=${startData}&endData=${endData}`)
        .then(res => res.data)
}

export const getCustomerOrderInfo = (id) => {
    return axios.get(`${settings.BASE_URL}/api/customer/orderInfo?id=${id}`)
        .then(res => res.data)
}

export const getOrderInvoice = (downloadId) => {
    return axios.get(`${settings.BASE_URL}/api/customer/orderInvoice?id=${downloadId}`)
        .then(res => res.data)
}

export const getCustomerEqualizations = (id, currentPage, countPage, startData, endData) => {
    return axios.get(`${settings.BASE_URL}/api/customer/equalizations?id=${id}&offset=${currentPage}&count=${countPage}&startData=${startData}&endData=${endData}`)
        .then(res => res.data)
}

export const getCustomerEqualizationInfo = (id) => {
    return axios.get(`${settings.BASE_URL}/api/customer/equalizationInfo?id=${id}`)
        .then(res => res.data)
}

export const getCustomerPayments = (id, currentPage, countPage, startData, endData) => {
    return axios.get(`${settings.BASE_URL}/api/customer/payments?id=${id}&offset=${currentPage}&count=${countPage}&startData=${startData}&endData=${endData}`)
        .then(res => res.data)
}

