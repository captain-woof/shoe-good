import { NextApiHandler } from "next"
import { getProducts } from "../../utils/chec/products"

const handler: NextApiHandler = async (req, res) => {
    try {
        if (req.method !== "POST") {
            res.status(401).send("Must be a POST request")
        } else {
            // Get body params
            const productQuery = req.body
            // Fetch data from Chec
            const products = await getProducts(productQuery)
            // Respond with products
            res.status(200).send(products)
        }
    } catch (e) {
        res.status(500).send(typeof e === 'string' ? e : JSON.stringify(e))
    }
}

export default handler