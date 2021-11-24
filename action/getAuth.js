import axios from "axios";
import settings from '../services/settings'

export const loginUser = (login, pass) => {
    return axios.get(`${settings.BASE_URL}/api/auth/login?login=${login}&pass=${pass}`).then(res => res.data)
}

export const checkLogin = (email) => {
    return axios.get(`${settings.BASE_URL}/api/auth/checkLogin?email=${email}`).then(res => res.data)
}

export const newCustomer = (user) => {
    return axios.post(`${settings.BASE_URL}/api/auth/register`, {data: user}).then(res => res.data)
}