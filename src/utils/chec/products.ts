import { commerce } from "./commerce"
import { ProductIdentityQuery, ProductsQuery, ProductVariantsQuery } from "../../types/query/product"

export const getProducts = async (productQuery?: ProductsQuery) => {
    return await commerce.products.list(productQuery)
}

export const getSingleProduct = async (identity: string, identityType?: ProductIdentityQuery) => {
    return await commerce.products.retrieve(identity, identityType)
}

export const getProductVariants = async (productId: string, variantsQuery?: ProductVariantsQuery) => {
    return await commerce.products.getVariants(productId, variantsQuery)
}

export const getSingleProductVariant = async (productId: string, variantId: string) => {
    return await commerce.products.getVariant(productId, variantId)
}