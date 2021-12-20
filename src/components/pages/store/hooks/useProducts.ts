import { useEffect, useMemo, useState } from "react"
import { ProductsQuery } from "../../../../types/query/product"
import { Product } from "@chec/commerce.js/types/product"
import { fetchProducts } from "../funcs/fetchProducts"
import { ProductCollection } from "@chec/commerce.js/features/products"
import { CategoryCollection } from "@chec/commerce.js/features/categories"

const PAGE_SIZE = 6

// Initial query state
const initialQuery: ProductsQuery = { limit: PAGE_SIZE, page: 1 }

// Function to check if query state is same as initial
const isQuerySameAsInitial = (query: ProductsQuery): boolean => {
    return (
        (initialQuery.page === query.page) &&
        (initialQuery.category_slug === query.category_slug) &&
        (initialQuery.query === query.query) &&
        (initialQuery.sortBy === query.sortBy) &&
        (initialQuery.sortDirection === query.sortDirection)
    )
}

export const useProducts = (initialProducts: ProductCollection) => {
    // Keeps track of products query
    const [productsQuery, setProductsQuery] = useState<ProductsQuery>(initialQuery)

    // Keeps track of products shown
    const [productsShown, setProductsShown] = useState<Product[]>([])

    // Keeps track of loading state
    const [loading, setLoading] = useState<boolean>(false)

    // Keeps track of pagination
    const [totalPages, setTotalPages] = useState<number>(0)

    // Fetch and set products whenever filters change
    useEffect(() => {
        (async () => {
            if (isQuerySameAsInitial(productsQuery)) { // If query state is initial
                setProductsShown(initialProducts.data)
                setTotalPages(initialProducts.meta.pagination.total_pages)
            } else { // If not, fetch and show products
                setLoading(true)
                const productsCollection = await fetchProducts(productsQuery)
                if (typeof productsCollection === 'string') {
                    // handle error
                } else {
                    setTotalPages(productsCollection.meta.pagination.total_pages)
                    setProductsShown(productsCollection.data)
                }
                setLoading(false)
            }
        })()
    }, [productsQuery])

    // Return
    return ({
        productsQuery, setProductsQuery, productsShown, totalPages, loading
    })
}