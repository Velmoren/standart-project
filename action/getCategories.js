import axios from "axios";
import settings from '../services/settings'

export const getBolts = () => {
    return axios.get(`${settings.BASE_URL}/api/categories/bolts`).then(res => res.data.ListOfTypes.length === 0 ? [] : res.data.ListOfTypes[0].StdList)
}

export const getAnchors = () => {
    return axios.get(`${settings.BASE_URL}/api/categories/anchors`).then(res => res.data.ListOfTypes.length === 0 ? [] : res.data.ListOfTypes[0].StdList)
}

export const getElements = () => {
    return axios.get(`${settings.BASE_URL}/api/categories/elements`).then(res => res.data.ListOfTypes.length === 0 ? [] : res.data.ListOfTypes[0].StdList)
}

export const getScrews = () => {
    return axios.get(`${settings.BASE_URL}/api/categories/screws`).then(res => res.data.ListOfTypes.length === 0 ? [] : res.data.ListOfTypes[0].StdList)
}

export const getWares = () => {
    return axios.get(`${settings.BASE_URL}/api/categories/wares`).then(res => res.data.ListOfTypes.length === 0 ? [] : res.data.ListOfTypes[0].StdList)
}

export const getNuts = () => {
    return axios.get(`${settings.BASE_URL}/api/categories/nuts`).then(res => res.data.ListOfTypes.length === 0 ? [] : res.data.ListOfTypes[0].StdList)
}

export const getWashers = () => {
    return axios.get(`${settings.BASE_URL}/api/categories/washers`).then(res => res.data.ListOfTypes.length === 0 ? [] : res.data.ListOfTypes[0].StdList)
}

export const getOtherBolts = () => {
    return axios.get(`${settings.BASE_URL}/api/categories/other_bolts`).then(res => res.data.ListOfTypes.length === 0 ? [] : res.data.ListOfTypes[0].StdList)
}

export const getOtherWares = () => {
    return axios.get(`${settings.BASE_URL}/api/categories/other_wares`).then(res => res.data.ListOfTypes.length === 0 ? [] : res.data.ListOfTypes[0].StdList)
}