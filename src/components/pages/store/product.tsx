import { Product } from "@chec/commerce.js/types/product"
import Card from "@mui/material/Card"
import CardActionArea from "@mui/material/CardActionArea"
import CardContent from "@mui/material/CardContent"
import Grid from "@mui/material/Grid"
import Tooltip from "@mui/material/Tooltip"
import Link from "next/link"
import Image from "next/image"
import { StyledProductTitle, StyledProductPrice, StyledCardImgAndCat, StyledProductCategories, StyledProductCategory } from "./styles"

interface IProduct {
    product: Product
}

export default function ProductShown({ product }: IProduct) {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card>
                <Tooltip title="View details" placement="top">
                    <CardActionArea>
                        <Link href={`/products/${product.id}`} passHref><a>
                            <StyledCardImgAndCat>
                                <Image objectFit="cover" src={product.image?.url as string} layout="fill" alt={product.name}/>
                                <StyledProductCategories>
                                    {product.categories.map((category) => (
                                        <StyledProductCategory key={category.id} variant="caption">
                                            {category.name}
                                        </StyledProductCategory>
                                    ))}
                                </StyledProductCategories>
                            </StyledCardImgAndCat>
                            <CardContent>
                                <StyledProductTitle variant="subtitle1">{product.name}</StyledProductTitle>
                                <StyledProductPrice variant="subtitle2">{product.price.formatted_with_symbol}</StyledProductPrice>
                            </CardContent>
                        </a></Link>
                    </CardActionArea>
                </Tooltip>
            </Card>
        </Grid>
    )
}