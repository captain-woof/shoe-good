import { StyledCategoryHeading, StyledCategoryPaper, StyledCategoryImgWrapper, StyledCategoryProducts, StyledCategoryProduct, StyledCategoryDescription } from "./styles"
import Image from 'next/image'
import { Category } from "@chec/commerce.js/types/category"
import { ProductCollection } from "@chec/commerce.js/features/products"

interface ICategory {
    category: Category
    products: ProductCollection
}

export default function ProductCategory({ category, products }: ICategory) {
    const categoryImg = ("assets" in category) ? category.assets[0].url : "/"
    const categoryName = category.name
    const categoryDescription = category.description

    return (
        <StyledCategoryPaper>
            <StyledCategoryHeading variant="h4">{categoryName}</StyledCategoryHeading>
            <StyledCategoryImgWrapper>
                <Image src={categoryImg} alt={categoryName} layout="fill" objectFit="cover" />
            </StyledCategoryImgWrapper>
            <StyledCategoryProducts>
                {products?.data?.map((product) => (
                    <StyledCategoryProduct key={product.id}>
                        <Image src={product.image?.url || "#"} alt={product.name} layout="fill" objectFit="cover" />
                    </StyledCategoryProduct>
                ))}
            </StyledCategoryProducts>
            <StyledCategoryDescription>
                {categoryDescription}
            </StyledCategoryDescription>
        </StyledCategoryPaper>
    )
}