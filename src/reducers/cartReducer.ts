import { Cart } from "@chec/commerce.js/types/cart"
import { ActionTypes } from "../actions/actionTypes"
import getCartAction from "../actions/cart"

const cartReducer = (state: Cart | null = null, action: (ReturnType<typeof getCartAction>)): Cart | null => {
    switch (action.type) {
        case ActionTypes.SET_CART:
            return action.payload
        default:
            return state
    }
}

export default cartReducer