export interface ProductSimplified {
    categories: Array<{ id: string, slug: string, name: string }>
    checkout_url: string
    description: string
    id: string
    image_url: string
    name: string
    price_base: number
    seo: { description: string, title: string }
    variant_groups: Array<{
        id: string
        name: string
        options: Array<{
            id: string
            name: string
            price_offsetted: number
        }>
    }>
}