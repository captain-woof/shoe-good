export interface ProductVariantOptions {
    id: string
    name: string
    price_offsetted: number
}

export interface VariantGroupToOptionMap {
    [key: string]: ProductVariantOptions
}