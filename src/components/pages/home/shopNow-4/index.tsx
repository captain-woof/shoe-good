import { StyledContainer, StyledShopNowText, StyledFooterContainer, StyledCreditsHeadline, StyledCreditsBody } from './styles'
import Link from 'next/link'
import Button from "@mui/material/Button"

export default function ShopNow() {
    return (
        <>
            <StyledContainer>
                <StyledShopNowText variant="h3">Shop With Us</StyledShopNowText>
                <Link href="/store" passHref><a>
                    <Button variant="contained">Shop now</Button>
                </a></Link>
            </StyledContainer>
            <StyledFooterContainer>
                <StyledCreditsHeadline variant="h4">
                    Shoe-Good
                </StyledCreditsHeadline>
                <Link passHref href="https://sohail-saha.in"><a>
                    <StyledCreditsBody variant="body2">Designed and developed by <b>Sohail Saha</b></StyledCreditsBody>
                </a></Link>
            </StyledFooterContainer>
        </>
    )
}