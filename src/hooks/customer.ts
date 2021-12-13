import { RootState } from "../store"
import { useDispatch, useSelector } from 'react-redux'
import getCustomerAction from "../actions/customer"
import { Customer } from "@chec/commerce.js/types/customer"

const useCart = () => {
    const dispatch = useDispatch()
    const customer = useSelector((state: RootState) => state.customer)
    const setCustomer = (customer: Customer) => { dispatch(getCustomerAction(customer)) }
    return { customer, setCustomer }
}

export default useCart