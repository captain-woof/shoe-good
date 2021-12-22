import { StyledContainerMargin, StyledHeading, StyledSubHeading, StyledHeadingContainer, StyledProductsGrid, StyledProductsPagination, StyledCircularProgress, StyledQueryBox, StyledQueryTextfield, StyledIconButton } from "./styles"
import { useProducts } from "./hooks/useProducts"
import ProductShown from "./product"
import { ProductCollection } from "@chec/commerce.js/features/products"
import { useQuery } from "./hooks/useQuery"
import useDevice from "../../../hooks/device"
import ManageSearchIcon from '@mui/icons-material/ManageSearch'
import Tooltip from "@mui/material/Tooltip"
import { useState } from "react"
import { CategoryCollection } from "@chec/commerce.js/features/categories"
import FilterDrawer from "./filterDrawer"

interface Store {
    initialProducts: ProductCollection
    categories: CategoryCollection
}

export default function Store({ initialProducts, categories }: Store) {
    const { loading, productsQuery, productsShown, setProductsQuery, totalPages } = useProducts(initialProducts)
    const { queryState, setQuery } = useQuery(productsQuery)
    const [queryDrawerShow, setQueryDrawerShow] = useState<boolean>(false)

    return (
        <>
            <FilterDrawer setQueryDrawerShow={setQueryDrawerShow} setProductsQuery={setProductsQuery} queryState={queryState} queryDrawerShow={queryDrawerShow} setQuery={setQuery} categories={categories} />
            <StyledContainerMargin>
                <StyledHeadingContainer>
                    <StyledHeading variant="h3">Store</StyledHeading>
                    <StyledSubHeading variant="h5">Find your fit</StyledSubHeading>
                </StyledHeadingContainer>
                <StyledQueryBox onSubmit={(e) => { e.preventDefault(); setProductsQuery(queryState) }}>
                    <StyledQueryTextfield value={queryState.query} placeholder="Search for products" onChange={(e) => { setQuery({ query: e.target.value }) }} color="primary" size="small" label="Search" />
                    <Tooltip title="Search filters">
                        <StyledIconButton onClick={() => { setQueryDrawerShow(true) }}>
                            <ManageSearchIcon />
                        </StyledIconButton>
                    </Tooltip>
                </StyledQueryBox>
                <StyledProductsGrid container spacing={4}>
                    {loading
                        ? <StyledCircularProgress color="primary" />
                        : productsShown.map((productShown) => (
                            <ProductShown product={productShown} key={productShown.id} />
                        ))
                    }
                </StyledProductsGrid>
                <StyledProductsPagination showFirstButton showLastButton count={totalPages} page={productsQuery.page} onChange={(e, page) => { setProductsQuery((prev) => ({ ...prev, page })); setQuery({ page }) }} />
            </StyledContainerMargin>
        </>
    )
}