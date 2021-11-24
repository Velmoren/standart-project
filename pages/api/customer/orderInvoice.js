import axios from 'axios'

export default async (req, res) => {
    const id = req.query.id

    const response = await axios.get(
        `${process.env.STANDART_API}/GetOrderInvoice/${id}`,
        {auth: {username: process.env.STANDART_USERNAME, password: process.env.STANDART_PASSWORD}})
    const data = await response.data
    const picURL = await data.Invoice ? process.env.STANDART_API_PIC + data.Invoice.substr(12) : 0
    return res.json(picURL)
}