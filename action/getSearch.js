import axios from "axios";
import settings from '../services/settings'

export const getSearch = (str) => {
    return axios.get(`${settings.BASE_URL}/api/search/search?str=${str}`).then(res => res.data)
}
