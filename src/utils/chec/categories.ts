import { SingleCategoryQueryIdentity } from "../../types/query/category"
import { commerce } from "./commerce"

export const getAllCategories = async () => {
    return await commerce.categories.list()
}

export const getSingleCategory = async (categoryId: string, categoryIdentityType?: SingleCategoryQueryIdentity) => {
    return await commerce.categories.retrieve(categoryId, categoryIdentityType)
}