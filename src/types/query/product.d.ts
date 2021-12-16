import { Category } from "../category"

export type ProductsQuery = {
    category_slug?: string
    limit?: number
    query?: string
    sortBy?: 'sort_order' | 'name' | 'created' | 'price'
    sortDirection?: 'asc' | 'desc'
}

export type ProductIdentityQuery = {
    type?: 'id' | 'sku' | 'permalink'
}

export type ProductVariantsQuery = {
    limit?: number
    page?: number
}