import axios from 'axios'

export default async (req, res) => {
    const response = await axios.get(
        `${process.env.STANDART_API}/StandartsByType/bd35f5e8-394a-11e9-9fa8-00155d0e072e`,
        {auth: {username: process.env.STANDART_USERNAME, password: process.env.STANDART_PASSWORD}})
    const data = response.data
    console.log(data)
    return res.json(data)
}