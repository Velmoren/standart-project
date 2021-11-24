import axios from "axios";
import settings from '../services/settings'

export const getOrganization = () => {
    return axios.get(`${settings.BASE_URL}/api/organization/organization`).then(res => res.data)
}

export const getAllNews = () => {
    return axios.get(`${settings.BASE_URL}/api/organization/news`).then(res => res.data.MarketAction)
}