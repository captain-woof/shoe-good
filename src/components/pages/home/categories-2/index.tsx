import { ContainerMargin } from "../../../atoms/Containers"
import { StyledCategoryGrid, StyledHeading } from "./styles"
import Box from "@mui/material/Box"
import { useTheme } from "@mui/material/styles"
import Grid from "@mui/material/Grid"
import ProductCategory from "./category"
import { CategoryCollection } from "@chec/commerce.js/features/categories"
import { ProductCollection } from "@chec/commerce.js/features/products"

interface ICategories {
    categories: CategoryCollection
    categoryToProductsMap: { [key: string]: ProductCollection }
}

export default function Categories({ categories, categoryToProductsMap }: ICategories) {
    const theme = useTheme()

    return (
        <ContainerMargin>
            <Box minHeight="inherit" padding={`${theme.spacing(8)} 0`}>
                <StyledHeading variant="h3">We got you covered!</StyledHeading>
                <StyledCategoryGrid container>
                    {categories.data.map((category) => (
                        <Grid item xs={12} md={6} key={category.id} display="flex" justifyContent="center">
                            <ProductCategory category={category} products={categoryToProductsMap[category.slug]} />
                        </Grid>
                    ))}
                </StyledCategoryGrid>
            </Box>
        </ContainerMargin>
    )
}