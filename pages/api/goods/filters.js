import axios from 'axios'

export default async (req, res) => {
    const id = req.query.id
    const response = await axios.get(
        `${process.env.STANDART_API}/Filters/${id}`,
        {auth: {username: process.env.STANDART_USERNAME, password: process.env.STANDART_PASSWORD}})
    const data = response.data
    return res.json(data)
}