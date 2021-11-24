import axios from 'axios'

export default async (req, res) => {
    const standart = req.query.standart
    const mat = req.query.mat
    const cov = req.query.cov
    const form = req.query.form
    const dimA = req.query.dimA
    const dimB = req.query.dimB
    const dimC = req.query.dimC
    const currentPage = req.query.currentPage
    const countPage = req.query.countPage

    const response = await axios.get(
        `${process.env.STANDART_API}/Standart/${standart}?mat=${mat}&cov=${cov}&form=${form}&dimA=${dimA}&dimB=${dimB}&dimC=${dimC}&offset=${currentPage}&&count=${countPage}`,
        {auth: {username: process.env.STANDART_USERNAME, password: process.env.STANDART_PASSWORD}})
    const data = response.data
    return res.json(data)
}