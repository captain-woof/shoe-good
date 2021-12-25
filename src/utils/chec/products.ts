import { commerce } from "./commerce"
import { ProductIdentityQuery, ProductsQuery, ProductVariantsQuery } from "../../types/query/product"
import { Product } from "@chec/commerce.js/types/product"
import { ProductSimplified } from "../../types/product/simplifiedProduct"

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

export const getSimplifiedProduct = (product: Product): ProductSimplified => ({
    id: product.id,
    name: product.name,
    description: product.description,
    image_url: product.image?.url || "#",
    price_base: product.price.raw,
    seo: {
        title: product.seo.title || product.name,
        description: product.seo.description || product.description.slice(0, 120)
    },
    checkout_url: product.checkout_url.checkout,
    categories: product.categories,
    variant_groups: product.variant_groups.map((variantGroup) => ({
        id: variantGroup.id,
        name: variantGroup.name,
        options: variantGroup.options.map((variantGroupOption) => ({
            id: variantGroupOption.id,
            name: variantGroupOption.name,
            price_offsetted: product.price.raw + variantGroupOption.price.raw
        }))
    }))
})