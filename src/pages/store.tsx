import Store from "../components/pages/store"
import { GetStaticPropsContext, InferGetStaticPropsType } from "next"
import { getProducts } from "../utils/chec/products"
import { getAllCategories } from "../utils/chec/categories"

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
    // Fetch first 6 products for SSR
    const initialProducts = await getProducts({
        limit: 6,
        page: 1
    })

    // Fetch product categories
    const categories = await getAllCategories()

    return {
        props: {
            initialProducts,
            categories
        },
        revalidate: 60
    }
}

export default function StorePage({ initialProducts, categories }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <Store initialProducts={initialProducts} categories={categories}/>
    )
}