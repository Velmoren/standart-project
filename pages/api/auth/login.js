import axios from 'axios'

export default async (req, res) => {
    const login = req.query.login
    const pass = req.query.pass

    const response = await axios.get(
        `${process.env.STANDART_API}/ClientLogin/${login}/${pass}`,
        {auth: {username: process.env.STANDART_USERNAME, password: process.env.STANDART_PASSWORD}})
    const data = response.data
    return res.json(data)
}