import axios from 'axios'

export default async (req, res) => {
    const user = req.body.data

    const response = await axios({
        method: "post",
        url: `${process.env.STANDART_API}/NewCustomer`,
        auth: {
            username: process.env.STANDART_USERNAME,
            password: process.env.STANDART_PASSWORD,
        },
        data: user,
    })
    const data = response.data
    return res.json(data)
}