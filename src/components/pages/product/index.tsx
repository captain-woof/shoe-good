import { ProductSimplified } from "../../../types/product/simplifiedProduct"
import { StyledGrid, StyledGridColImage, StyledGridColDetails, StyledProductImage, StyledProductImageLighboxOuterBox, StyledClickToEnlarge, StyledProductDetailsWrapper, StyledProductDetailsPaper, StyledProductImageBox, StyledProductName, StyledProductCategory, StyledProductDescriptionBox, StyledProductVariantsHeading, StyledProductVariantsBox, StyledProductVariantOption, StyledPriceHeading, StyledPrice, StyledActionButtonsRow } from "./styles"
import { ContainerMargin } from "../../atoms/Containers"
import Image from "next/image"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Modal from "@mui/material/Modal"
import { useCallback, useEffect, useMemo, useState } from "react"
import ProductSeo from "./seo"
import parseHtml from "html-react-parser"
import useCart from "../../../hooks/cart"
import { ProductVariantOptions, VariantGroupToOptionMap } from "../../../types/product/variants"
import LocalMallIcon from '@mui/icons-material/LocalMall'
import Link from "next/link"
import useDevice from "../../../hooks/device"

interface Product {
    product: ProductSimplified
}

export default function Product({ product }: Product) {
    // To track product image lightbox view state
    const [showProductLightbox, setShowProductLightbox] = useState<boolean>(false)

    // Function to get initial group to option selected map (first options)
    const initialVariantGroupOptionMap = useMemo(() => {
        const initialMap: VariantGroupToOptionMap = {}
        product.variant_groups.forEach((variantGroup) => {
            initialMap[variantGroup.id] = variantGroup.options[0]
        })
        return initialMap
    }, [product])

    // Map of variantGroup to their variantOption selected
    const [variantGroupOptionMap, setVariantGroupOptionMap] = useState<VariantGroupToOptionMap>(initialVariantGroupOptionMap)

    // Function to handle variants button click
    const handleVariantButtonClick = useCallback((group: string, option: ProductVariantOptions) => {
        setVariantGroupOptionMap((prev) => ({ ...prev, [group]: option }))
    }, [setVariantGroupOptionMap])

    // Function to see if variant option group is selected
    const isVariantOptionSelected = useCallback((group: string, option: ProductVariantOptions) => (variantGroupOptionMap[group]?.id === option?.id), [variantGroupOptionMap])

    // Price
    const totalPrice = useMemo(() => (
        Object
            .values(variantGroupOptionMap)
            .map(({ price_offsetted }) => price_offsetted)
            .reduce((total, price) => (total + price), 0)
    ), [variantGroupOptionMap])

    // For cart
    const { addToCart, cartPending } = useCart()

    // For deciding size of action buttons
    const { isMobile } = useDevice()

    return (
        <>
            <ProductSeo title={product.seo.title} description={product.seo.description} image={product.image_url} url={`${process.env.NEXT_PUBLIC_APP_ORIGIN}/products/${product.id}`} />
            <ContainerMargin>
                <Modal open={showProductLightbox} onClose={() => { setShowProductLightbox(false) }}>
                    <StyledProductImageLighboxOuterBox>
                        <Box width="100%" height="100%" position="relative">
                            <Image src={product.image_url} alt={product.seo.title} layout="fill" objectFit="contain" onClick={() => setShowProductLightbox(false)} />
                        </Box>
                    </StyledProductImageLighboxOuterBox>
                </Modal>
                <StyledGrid container>
                    {/* Product image */}
                    <StyledGridColImage item xs={12} sm={4}>
                        <StyledProductImageBox>
                            <StyledProductImage src={product.image_url} alt={product.seo.title} layout="fill" onClick={() => setShowProductLightbox(true)} />
                        </StyledProductImageBox>
                        <StyledClickToEnlarge variant="body2" onClick={() => setShowProductLightbox(true)}>
                            Click to enlarge
                        </StyledClickToEnlarge>
                    </StyledGridColImage>

                    {/* Product details */}
                    <StyledGridColDetails item xs={12} sm={8}>
                        <StyledProductDetailsWrapper>
                            <StyledProductDetailsPaper>

                                {/* Product name */}
                                <StyledProductName variant="h4">
                                    {product.name}
                                </StyledProductName>

                                {/* Product category */}
                                <StyledProductCategory variant="h6">
                                    {product.categories.map(({ name }) => name).join(" & ")}
                                </StyledProductCategory>

                                {/* Product description */}
                                <StyledProductDescriptionBox>
                                    {parseHtml(product.description)}
                                </StyledProductDescriptionBox>

                                {/* Product variants */}
                                {product.variant_groups.map((variantGroup) => (
                                    <StyledProductVariantsBox key={variantGroup.id}>
                                        <StyledProductVariantsHeading variant="body1">
                                            {variantGroup.name}
                                        </StyledProductVariantsHeading>
                                        {variantGroup.options.map((variantGroupOption) => (
                                            <StyledProductVariantOption key={variantGroupOption.id} onClick={() => { handleVariantButtonClick(variantGroup.id as string, variantGroupOption) }} variant={isVariantOptionSelected(variantGroup.id, variantGroupOption) ? "contained" : "outlined"} size="small">
                                                {variantGroupOption.name}
                                            </StyledProductVariantOption>
                                        ))}
                                    </StyledProductVariantsBox>
                                ))}

                                {/* Price */}
                                <StyledPriceHeading variant="body2">Price</StyledPriceHeading>
                                <StyledPrice variant="h6">₹ {totalPrice}</StyledPrice>

                                {/* Action buttons */}
                                <StyledActionButtonsRow>
                                    <Link href="/cart" passHref><a>
                                        <Button size={isMobile ? "small" : "medium"} variant="outlined" color="primary">
                                            Go to cart
                                        </Button>
                                    </a></Link>
                                    <Button size={isMobile ? "small" : "medium"} disabled={cartPending} variant="contained" color="primary" onClick={() => { addToCart(product.id, 1, variantGroupOptionMap) }} endIcon={<LocalMallIcon />}>
                                        Add to cart
                                    </Button>
                                </StyledActionButtonsRow>

                            </StyledProductDetailsPaper>
                        </StyledProductDetailsWrapper>
                    </StyledGridColDetails>
                </StyledGrid>
            </ContainerMargin>
        </>
    )
}