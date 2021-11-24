import axios from 'axios'

export default async (req, res) => {
    const str = req.query.str
    const response = await axios.get(
        encodeURI(`${process.env.STANDART_API}/Search/${str}`),
        {auth: {username: process.env.STANDART_USERNAME, password: process.env.STANDART_PASSWORD}})
    const data = transformSearchArray(response.data.ListOfTypes)
    return res.json(data)
}

 function transformSearchArray(arr) {
    return arr.map((item) => {
        if (item.Category_id === "c90c4463-394a-11e9-9fa8-00155d0e072e") {
            item.typeName = "screws";
        } else if (item.Category_id === "bd35f5e8-394a-11e9-9fa8-00155d0e072e") {
            item.typeName = "bolts";
        } else if (item.Category_id === "ac55ae62-394a-11e9-9fa8-00155d0e072e") {
            item.typeName = "anchors";
        } else if (item.Category_id === "2dd5ff8b-394b-11e9-9fa8-00155d0e072e") {
            item.typeName = "nuts";
        } else if (item.Category_id === "dbe38c4a-394a-11e9-9fa8-00155d0e072e") {
            item.typeName = "wares";
        } else if (item.Category_id === "06d29a2a-394b-11e9-9fa8-00155d0e072e") {
            item.typeName = "others_bolts";
        } else if (item.Category_id === "66784aac-577c-11e7-bc71-c4e98402e535") {
            item.typeName = "others_wares";
        } else if (item.Category_id === "912fc794-394a-11e9-9fa8-00155d0e072e") {
            item.typeName = "washers";
        } else if (item.Category_id === "145ad2fc-394b-11e9-9fa8-00155d0e072e") {
            item.typeName = "elements";
        } else {
            item.typeName = "others_wares";
        }

        return item;
    });
};