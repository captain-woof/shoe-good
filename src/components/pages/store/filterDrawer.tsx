import { Dispatch, SetStateAction, useCallback } from "react"
import useDevice from "../../../hooks/device"
import { ProductsQuery } from "../../../types/query/product"
import { StyledDrawerContents, StyledDrawerHeading, StyledFilterFormControl, StyledDrawer } from "./styles"
import { CategoryCollection } from "@chec/commerce.js/features/categories"
import FormControlLabel from "@mui/material/FormControlLabel"
import RadioGroup from "@mui/material/RadioGroup"
import Radio from "@mui/material/Radio"
import FormLabel from "@mui/material/FormLabel"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import SearchIcon from '@mui/icons-material/Search'

interface FilterDrawer {
    setQueryDrawerShow: Dispatch<SetStateAction<boolean>>
    setProductsQuery: Dispatch<SetStateAction<ProductsQuery>>
    queryState: ProductsQuery
    queryDrawerShow: boolean
    setQuery: (newQueryTerms: ProductsQuery) => void
    categories: CategoryCollection
}

export default function FilterDrawer({ setQueryDrawerShow, setProductsQuery, queryState, queryDrawerShow, setQuery, categories }: FilterDrawer) {
    const { isMobile } = useDevice()

    const handleQueryDrawerClose = useCallback(() => {
        setQueryDrawerShow(false)
        setProductsQuery(queryState)
    }, [queryState, setQueryDrawerShow, setProductsQuery])

    return (
        <StyledDrawer anchor={isMobile ? "bottom" : "left"} open={queryDrawerShow} onClose={handleQueryDrawerClose}>
            <StyledDrawerContents>
                {/* Query filters */}
                <Box width="100%">
                    <StyledDrawerHeading variant="h4">Filter results</StyledDrawerHeading>

                    {/* Category */}
                    <StyledFilterFormControl fullWidth>
                        <FormLabel>Categories</FormLabel>
                        <RadioGroup row value={queryState.category_slug} onChange={(e) => { setQuery({ category_slug: e.target.value }) }}>
                            {categories.data.map((category) => (
                                <FormControlLabel key={category.id} value={category.slug} control={<Radio size="small" color="primary" />} label={category.name} />
                            ))}
                        </RadioGroup>
                    </StyledFilterFormControl>

                    {/* Sort by - price, name */}
                    <StyledFilterFormControl fullWidth>
                        <FormLabel>Sort by</FormLabel>
                        <RadioGroup row value={queryState.sortBy} onChange={(e) => { setQuery({ sortBy: e.target.value as "name" | "sort_order" | "created" | "price" | undefined }) }}>
                            <FormControlLabel value={undefined} control={<Radio size="small" color="primary" />} label="None" />
                            <FormControlLabel value="name" control={<Radio size="small" color="primary" />} label="Name" />
                            <FormControlLabel value="price" control={<Radio size="small" color="primary" />} label="Price" />
                        </RadioGroup>
                    </StyledFilterFormControl>

                    {/* Sort Direction */}
                    <StyledFilterFormControl fullWidth>
                        <FormLabel>Sort order</FormLabel>
                        <RadioGroup row value={queryState.sortDirection} onChange={(e) => { setQuery({ sortDirection: e.target.value as "desc" | "asc" | undefined }) }}>
                            <FormControlLabel value="asc" control={<Radio size="small" color="primary" />} label="Ascending" />
                            <FormControlLabel value="desc" control={<Radio size="small" color="primary" />} label="Descending" />
                        </RadioGroup>
                    </StyledFilterFormControl>
                </Box>

                {/* Button to close drawer and filter */}
                <Button color="primary" variant="outlined" endIcon={<SearchIcon />} onClick={handleQueryDrawerClose}>Search</Button>
            </StyledDrawerContents>
        </StyledDrawer>
    )
}