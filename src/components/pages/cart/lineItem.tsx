import { LineItem as LineItemChec } from "@chec/commerce.js/types/line-item"
import { StyledLineItemBox, StyledLineItemImageWrapper, StyledLineItemDetailsWrapper, StyledLineItemDivider, StyledLineItemName, StyledLineItemOption, StyledLineItemOptionsContainer, StyledLineItemPrice, StyledRemoveLineItemIcon } from "./styles"
import Image from 'next/image'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import useCart from "../../../hooks/cart"
import useDevice from "../../../hooks/device"
import { useCallback, useState } from "react"

interface LineItem {
    lineItem: LineItemChec
}

export default function LineItem({ lineItem }: LineItem) {
    const { removeItemFromCart } = useCart()
    const { isMobile } = useDevice()
    const [itemBeingDeleted, setItemBeingDeleted] = useState<boolean>(false)

    // Function to handle delete button click
    const handleRemoveButtonClick = useCallback(async () => {
        setItemBeingDeleted(true)
        await removeItemFromCart(lineItem.id)
    }, [])

    return (
        <>
            <StyledLineItemBox itemBeingDeleted={itemBeingDeleted}>
                {/* Product image */}
                <StyledLineItemImageWrapper>
                    <Image src={lineItem.image?.url || "#"} alt={lineItem.name} layout="fill" objectFit="cover" />
                </StyledLineItemImageWrapper>

                {/* Product details */}
                <StyledLineItemDetailsWrapper>

                    {/* Product name */}
                    <StyledLineItemName variant="body1">
                        {lineItem.name}
                    </StyledLineItemName>

                    {/* Product variants */}
                    <StyledLineItemOptionsContainer>
                        {lineItem.selected_options.map((selectedOption) => (
                            <StyledLineItemOption variant="body2" key={`${selectedOption.group_id}-${selectedOption.option_id}`}>
                                {selectedOption.group_name}: {selectedOption.option_name}
                            </StyledLineItemOption>
                        ))}
                    </StyledLineItemOptionsContainer>

                </StyledLineItemDetailsWrapper>

                {/* Remove from cart button */}
                <IconButton onClick={handleRemoveButtonClick} size={isMobile ? "small" : "medium"}>
                    <Tooltip title="Remove item from cart">
                        <StyledRemoveLineItemIcon />
                    </Tooltip>
                </IconButton>

                {/* Product price */}
                <StyledLineItemPrice variant={isMobile ? "body2" : "body1"}>
                    ₹ {lineItem.price.formatted}
                </StyledLineItemPrice>

            </StyledLineItemBox>

            {/* Divider */}
            <StyledLineItemDivider />

        </>
    )
}