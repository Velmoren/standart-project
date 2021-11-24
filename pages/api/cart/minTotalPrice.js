import axios from 'axios'

export default async (req, res) => {
    const response = await axios.get(
        `${process.env.STANDART_API}/GetOrderMinPrice`,
        {auth: {username: process.env.STANDART_USERNAME, password: process.env.STANDART_PASSWORD}})
    const data = response.data
    return res.json(data)
}