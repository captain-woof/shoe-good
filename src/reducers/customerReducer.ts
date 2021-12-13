import { Customer } from "@chec/commerce.js/types/customer"
import { ActionTypes } from "../actions/actionTypes"
import getCustomerAction from "../actions/customer"

const customerReducer = (state: Customer | null = null, action: (ReturnType<typeof getCustomerAction>)): Customer | null => {
    switch (action.type) {
        case ActionTypes.SET_CUSTOMER:
            return action.payload
        default:
            return state
    }
}

export default customerReducer