import axios from 'axios'

export default async (req, res) => {
    const email = req.query.email

    const response = await axios.get(
        `${process.env.STANDART_API}/CheckLogin/${email}`,
        {auth: {username: process.env.STANDART_USERNAME, password: process.env.STANDART_PASSWORD}})
    const data = response.data
    return res.json(data)
}