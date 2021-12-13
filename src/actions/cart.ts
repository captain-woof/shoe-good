import { Cart } from '@chec/commerce.js/types/cart'
import { ActionTypes } from './actionTypes'

const getCartAction = (cart: Cart) => ({
    type: ActionTypes.SET_CART,
    payload: cart
})

export default getCartAction