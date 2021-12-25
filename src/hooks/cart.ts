import { RootState } from "../store"
import { useDispatch, useSelector } from 'react-redux'
import getCartAction from "../actions/cart"
import { Cart } from "@chec/commerce.js/types/cart"
import { useSnackbar } from "./snackbar"
import { useCallback, useEffect, useState } from "react"
import { commerce } from "../utils/chec/commerce"
import { VariantGroupToOptionMap } from "../types/product/variants"

const useCart = () => {
    const dispatch = useDispatch()
    const cart = useSelector((state: RootState) => state.cart) // Global cart
    const setCart = (cart: Cart) => { dispatch(getCartAction(cart)) } // Global cart setter
    const { setSnackbarPayload } = useSnackbar() // Global snackbar setter
    const [cartPending, setCardPending] = useState<boolean>(false) // For cart pending state

    // Initial cart setup
    useEffect(() => {
        (async () => {
            if (!!setCart && !cart) {
                try {
                    const cart = await commerce.cart.retrieve()
                    setCart(cart)
                } catch (e) {
                    setSnackbarPayload({ type: "error", message: "Could not setup your cart!" })
                }
            }
        })()
    }, [])

    // Function to add item to cart
    const addToCart = useCallback(async (prodId: string, quantity: number = 1, variantGroupToOptionMap: VariantGroupToOptionMap) => {
        try {
            setCardPending(true)
            setSnackbarPayload({ type: "info", message: "Adding to cart" })

            // Format payload in {groupId: optionId} format
            const variantGroupToOptionMapFormatted: { [key: string]: string } = {}
            for (let groupId in variantGroupToOptionMap) {
                variantGroupToOptionMapFormatted[groupId] = variantGroupToOptionMap[groupId].id
            }

            const resp = await commerce.cart.add(prodId, quantity, variantGroupToOptionMapFormatted)
            if (!resp.success) {
                throw Error()
            }
            setCart(resp.cart)
            setSnackbarPayload({ type: "success", message: "Product added to cart!" })
        } catch (e) {
            console.log("Error adding to cart", e)
            setSnackbarPayload({ type: "error", message: "Error adding to cart!" })
        } finally {
            setCardPending(false)
        }
    }, [setCart, setCardPending])

    return { cart, setCart, addToCart, cartPending }
}

export default useCart