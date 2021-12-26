import { RootState } from "../store"
import { useDispatch, useSelector } from 'react-redux'
import getCartAction from "../actions/cart"
import { Cart } from "@chec/commerce.js/types/cart"
import { useSnackbar } from "./snackbar"
import { useCallback, useEffect, useState } from "react"
import { commerce } from "../utils/chec/commerce"
import { VariantGroupToOptionMap } from "../types/product/variants"
import Razorpay from "razorpay"

// Interface for checkout function
interface CustomerDetails {
    name: string
    email?: string
    phone: string
    streetAddress: string
    townCity: string
    pincode: string
    state: string
}

const useCart = () => {
    const dispatch = useDispatch()
    const cart = useSelector((state: RootState) => state.cart) // Global cart
    const setCart = (cart: Cart) => { dispatch(getCartAction(cart)) } // Global cart setter
    const { setSnackbarPayload } = useSnackbar() // Global snackbar setter
    const [cartPending, setCardPending] = useState<boolean>(false) // For cart pending state
    const [opPending, setOpPending] = useState<boolean>(false) // For any function pending state

    // Initial cart setup
    useEffect(() => {
        (async () => {
            if (!!setCart && !cart) {
                try {
                    setCardPending(true)
                    const cart = await commerce.cart.retrieve()
                    setCart(cart)
                } catch (e) {
                    setSnackbarPayload({ type: "error", message: "Could not setup your cart!" })
                } finally {
                    setCardPending(false)
                }
            }
        })()
    }, [])

    // Function to add item to cart
    const addToCart = useCallback(async (prodId: string, quantity: number = 1, variantGroupToOptionMap: VariantGroupToOptionMap) => {
        try {
            setOpPending(true)

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
            setSnackbarPayload({ type: "error", message: "Error adding to cart!" })
        } finally {
            setOpPending(false)
        }
    }, [setCart, setOpPending])

    // Function to remove item from cart (line item)
    const removeItemFromCart = useCallback(async (lineItemId: string) => {
        try {
            setOpPending(true)
            const res = await commerce.cart.remove(lineItemId)
            if (!res.success) {
                throw Error()
            }
            setCart(res.cart)
            setSnackbarPayload({ type: "success", message: "Removed product from cart" })
        } catch (e) {
            setSnackbarPayload({ type: "error", message: "Error removing item!" })
        } finally {
            setOpPending(false)
        }
    }, [setCart, setOpPending])

    // Function to remove all items from cart (line item)
    const removeAllItemsFromCart = useCallback(async () => {
        try {
            setOpPending(true)
            const res = await commerce.cart.empty()
            if (!res.success) {
                throw Error()
            }
            setCart(res.cart)
            setSnackbarPayload({ type: "success", message: "Cart cleared" })
        } catch (e) {
            setSnackbarPayload({ type: "error", message: "Error clearing cart!" })
        } finally {
            setOpPending(false)
        }
    }, [setCart, setOpPending])

    // Function to start checkout
    const startCheckout = useCallback(async (customerDetails: CustomerDetails) => {
        if (!!cart?.id) {
            try {
                setOpPending(true)

                // Generate Chec checkout token
                const checkoutToken = await commerce.checkout.generateTokenFrom("cart", cart?.id)

                // Complete payment through Razorpay
                const razorpay = new Razorpay({
                    key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                    amount: cart.subtotal.raw * 100,
                    currency: "INR",
                    name: "Shoe-Good",
                    image: `${process.env.NEXT_PUBLIC_APP_ORIGIN}/images/logo.png`,
                    prefill: {
                        name: customerDetails.name,
                        email: customerDetails.email,
                        contact: customerDetails.phone
                    },
                    theme: {
                        color: "#c9011b"
                    },
                    handler(response: any) { // Capture payment through Razorpay with Chec
                        (async () => {
                            try {
                                await commerce.checkout.capture(checkoutToken.id, {
                                    customer: {
                                        email: customerDetails.email || "",
                                        firstname: customerDetails.name.split(" ")[0],
                                        lastname: customerDetails.name.split(" ")[1],
                                        phone: customerDetails.phone,
                                    },
                                    payment: {
                                        gateway: "razorpay",
                                        razorpay: {
                                            payment_id: response.razorpay_payment_id
                                        }
                                    },
                                    shipping: {
                                        name: customerDetails.name,
                                        street: customerDetails.streetAddress,
                                        town_city: customerDetails.townCity,
                                        county_state: customerDetails.state,
                                        postal_zip_code: customerDetails.pincode,
                                        country: "IN"
                                    }
                                })
                            } catch {
                                throw Error(response.message)
                            }
                        })()
                    },
                    allow_rotation: true
                })

                // Error handling
                razorpay.on('payment.failed', (response: any) => {
                    throw Error()
                });

                // Show the razorpay window immediately
                razorpay.open();

            } catch (e) {
                setSnackbarPayload({ type: "error", message: "Payment failed!" })
            } finally {
                setOpPending(false)
            }
        }
    }, [cart])

    return { cart, setCart, addToCart, cartPending, opPending, removeItemFromCart, removeAllItemsFromCart, startCheckout }
}

export default useCart