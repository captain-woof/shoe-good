import { StyledContainer, StyledShopNowText } from './styles'
import Link from 'next/link'
import Button from "@mui/material/Button"

export default function ShopNow() {
    return (
        <StyledContainer>
            <StyledShopNowText variant="h3">Shop With Us</StyledShopNowText>
            <Link href="/store" passHref><a>
                <Button variant="contained">Shop now</Button>
            </a></Link>
        </StyledContainer>
    )
}