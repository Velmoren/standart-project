import axios from 'axios'

export default async (req, res) => {
    const order = req.body.data

    const response = await axios({
        method: "post",
        url: `${process.env.STANDART_API}/Order`,
        auth: {
            username: process.env.STANDART_USERNAME,
            password: process.env.STANDART_PASSWORD,
        },
        data: order,
    })
    const data = response.data
    return res.json(data)
}