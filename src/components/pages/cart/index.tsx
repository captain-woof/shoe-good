import { ContainerMargin } from "../../atoms/Containers"
import { StyledHeading, StyledCartPaper, StyledSubHeading, StyledLineItemsContainer, StyledNoItemsFound, StyledActionButtonsWrapper } from "./styles"
import useCart from "../../../hooks/cart"
import LineItem from "./lineItem"
import { useCallback, useEffect } from "react"
import Loader from "../../atoms/loader"
import Button from "@mui/material/Button"
import useDevice from "../../../hooks/device"
import Link from "next/link"

export default function Cart() {
    const { cart, opPending, cartPending, removeAllItemsFromCart } = useCart()
    const { isMobile } = useDevice()

    // Handler to clear cart
    const handleClearCart = useCallback(() => {
        removeAllItemsFromCart()
    }, [])

    return (
        <ContainerMargin>
            <StyledCartPaper elevation={4}>
                <StyledHeading variant="h4">Cart</StyledHeading>
                <StyledLineItemsContainer>
                    {cart?.total_items !== 0 &&
                        <StyledSubHeading variant="subtitle1">
                            Total selected items: {cart?.total_items}
                        </StyledSubHeading>
                    }
                    {cartPending
                        ? <Loader />
                        : (!cart?.total_items
                            ? <StyledNoItemsFound variant="h6">
                                No items in cart
                            </StyledNoItemsFound>
                            : cart?.line_items.map((lineItem) => (
                                <LineItem key={lineItem.id} lineItem={lineItem} />
                            ))
                        )
                    }
                </StyledLineItemsContainer>

                {cart?.total_items !== 0 &&
                    <StyledActionButtonsWrapper>
                        <Button onClick={handleClearCart} variant="outlined" size={isMobile ? "small" : "medium"} color="primary">
                            Clear
                        </Button>

                        <Link href="/checkout" passHref><a>
                            <Button variant="contained" size={isMobile ? "small" : "medium"} color="primary">
                                Checkout
                            </Button>
                        </a></Link>
                    </StyledActionButtonsWrapper>
                }

            </StyledCartPaper>
        </ContainerMargin>
    )
}