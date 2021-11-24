import axios from 'axios'

export default async (req, res) => {
    const id = req.query.id
    const offset = req.query.offset
    const count = req.query.count
    const startData = req.query.startData !== "" ? `&DateStart=${req.query.startData}` : ""
    const endData = req.query.endData !== "" ? `&DateEnd=${req.query.endData}` : ""

    const response = await axios.get(
        `${process.env.STANDART_API}/GetPaymentByClient/${id}?offset=${offset}&count=${count}${startData}${endData}`,
        {auth: {username: process.env.STANDART_USERNAME, password: process.env.STANDART_PASSWORD}})
    const data = response.data
    return res.json(data)
}