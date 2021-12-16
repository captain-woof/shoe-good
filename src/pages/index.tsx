import Home from "../components/pages/home"
import { GetStaticPathsContext, InferGetStaticPropsType } from 'next'
import { getAllCategories } from '../utils/chec/categories'
import { getProducts } from "../utils/chec/products"
import { ProductCollection } from "@chec/commerce.js/features/products"

export const getStaticProps = async (ctx: GetStaticPathsContext) => {
  // For all categories data
  const categories = await getAllCategories()
  // Get 3 products from each categories
  const categoryToProductsMap: { [key: string]: ProductCollection } = {}
  const productPromises: Promise<ProductCollection>[] = []
  const categorySlugs: string[] = []
  categories.data.forEach((category) => {
    categorySlugs.push(category.slug)
    productPromises.push(getProducts({ limit: 3, category_slug: category.slug }))
  })
  const products = await Promise.all(productPromises)
  products.forEach((product, index) => {
    categoryToProductsMap[categorySlugs[index]] = product
  })
  return {
    props: {
      categories,
      categoryToProductsMap
    }
  }
}

const HomePage = ({ categories, categoryToProductsMap }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Home categories={categories} categoryToProductsMap={categoryToProductsMap}/>
  );
};

export default HomePage;
