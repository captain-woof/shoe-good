import { RootState } from "../store"
import { useDispatch, useSelector } from 'react-redux'
import getCartAction from "../actions/cart"
import { Cart } from "@chec/commerce.js/types/cart"

const useCart = () => {
    const dispatch = useDispatch()
    const cart = useSelector((state: RootState) => state.cart)
    const setCart = (cart: Cart) => { dispatch(getCartAction(cart)) }
    return { cart, setCart }
}

export default useCart