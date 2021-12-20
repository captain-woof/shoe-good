import { ProductsQuery } from "../../../../types/query/product"
import { useCallback, useState } from "react"

export const useQuery = (initialProductsQuery: ProductsQuery) => {
    const [queryState, setQueryState] = useState<ProductsQuery>(initialProductsQuery)

    // Handles setting query terms
    const setQuery = useCallback((newQueryTerms: ProductsQuery) => {
        setQueryState((prev) => ({ ...prev, ...newQueryTerms }))
    }, [setQueryState])

    return {
        queryState,
        setQuery
    }
}