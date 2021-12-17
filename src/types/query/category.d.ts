import { Category as CategoryChec } from "@chec/commerce.js/types/category"

export type SingleCategoryQueryIdentity = {
    type: "slug" | "id"
}

declare module "@chec/commerce.js/types/category" {
    export interface Category extends CategoryChec {
        assets: {url: string}[]
    }
}