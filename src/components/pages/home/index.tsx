import Landing from "./landing-1"
import Categories from "./categories-2"
import { CategoryCollection } from "@chec/commerce.js/features/categories"
import { ProductCollection } from "@chec/commerce.js/features/products"
import Features from "./features-3"
import ShopNow from "./shopNow-4"

interface IHome {
    categories: CategoryCollection
    categoryToProductsMap: { [key: string]: ProductCollection }
}

const Home = ({ categories, categoryToProductsMap }: IHome) => {
    return (
        <>
            <Landing />
            <Categories categories={categories} categoryToProductsMap={categoryToProductsMap} />
            <Features />
            <ShopNow />
        </>
    )
}

export default Home