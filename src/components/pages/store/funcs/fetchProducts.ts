import { ProductsQuery } from "../../../../types/query/product"
import axios from "axios"
import { ProductCollection } from "@chec/commerce.js/features/products"

export const fetchProducts = async (productsQuery: ProductsQuery) => {
    try {
        const res = await axios.post("/api/fetchProducts", productsQuery)
        if (res.status !== 200) {
            throw Error("Error while fetching products!")
        } else {
            return res.data as ProductCollection
        }
    } catch (e) {
        return (typeof e === 'string' ? e : JSON.stringify(e))
    }
}