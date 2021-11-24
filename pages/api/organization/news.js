import axios from 'axios'

export default async (req, res) => {
    const response = await axios.get(
        `${process.env.STANDART_API}/GetMarketAction/20201016111515`,
        {auth: {username: process.env.STANDART_USERNAME, password: process.env.STANDART_PASSWORD}})
    const data = response.data
    return res.json(data)
}