import { GetStaticPathsContext, GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { getProducts, getSingleProduct, getSimplifiedProduct } from "../../utils/chec/products"
import Product from "../../components/pages/product"

// Get paths to generate
export const getStaticPaths = async (ctx: GetStaticPathsContext) => {
    const products = await getProducts()
    const paths = products.data.map((product) => ({
        params: { id: product.id }
    }))

    return {
        paths,
        fallback: true
    }
}

// Get static props (Product) for product page
export const getStaticProps = async (ctx: GetStaticPropsContext) => {
    const productId = ctx.params?.id as string
    if (!productId) {
        return {
            notFound: true,
            props: { product: null }
        }
    } else {
        const productFromChec = await getSingleProduct(productId, { type: "id" })
        const product = getSimplifiedProduct(productFromChec)
        return {
            props: { product },
            revalidate: 60
        }
    }
}

// Page
export default function ProductPage({ product }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (!!product ? <Product product={product}/> : <></>)
}