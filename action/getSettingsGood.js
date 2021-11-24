import axios from "axios";
import settings from '../services/settings'

export const getSettingsGood = (ID, currentPage, countPage) => {
    return axios.get(`${settings.BASE_URL}/api/goods/goods?id=${ID}&currentPage=${currentPage}&countPage=${countPage}`).then(res => res.data)
}

export const getFilters = (ID) => {
    return axios.get(`${settings.BASE_URL}/api/goods/filters?id=${ID}`).then(res => res.data)
}

export const getFilterItems = (standart, mat, cov, form, dimA, dimB, dimC, currentPage, countPage) => {
    return axios.get(`${settings.BASE_URL}/api/goods/filterItems?standart=${standart}&mat=${mat}&cov=${cov}&form=${form}&dimA=${dimA}&dimB=${dimB}&dimC=${dimC}&currentPage=${currentPage}&&countPage=${countPage}`)
        .then(res => res.data)
}
