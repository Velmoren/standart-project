import axios from 'axios'

export default async (req, res) => {
    const str = req.query.str
    const response = await axios.get(
        encodeURI(`https://search-maps.yandex.ru/v1/?text=%D0%A1%D0%92%D0%95%D0%A0%D0%94%D0%9B%D0%9E%D0%92%D0%A1%D0%9A%D0%90%D0%AF,%D0%95%D0%9A%D0%90%D0%A2%D0%95%D0%A0%D0%98%D0%9D%D0%91%D0%A3%D0%A0%D0%93,%D0%9C%D0%95%D0%9B%D0%AC%D0%9A%D0%9E%D0%92%D0%A1%D0%9A%D0%90%D0%AF,2%D0%91&lang=ru_RU&type=biz&results=100&apikey=#`))

    // const data = response.data
    console.log(response)
    // return res.json(data)
}