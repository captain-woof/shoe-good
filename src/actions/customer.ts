import { Customer } from '@chec/commerce.js/types/customer'
import { ActionTypes } from './actionTypes'

const getCustomerAction = (customer: Customer) => ({
    type: ActionTypes.SET_CUSTOMER,
    payload: customer
})

export default getCustomerAction