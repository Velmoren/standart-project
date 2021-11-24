import axios from 'axios'

export default async (req, res) => {
    const response = await axios.get(
        `${process.env.STANDART_API}/StandartsByType/06d29a2a-394b-11e9-9fa8-00155d0e072e`,
        {auth: {username: process.env.STANDART_USERNAME, password: process.env.STANDART_PASSWORD}})
    const data = response.data
    return res.json(data)
}