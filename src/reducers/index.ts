import { combineReducers } from "redux"
import cartReducer from "./cartReducer"
import customerReducer from "./customerReducer"

const rootReducer = combineReducers({
    cart: cartReducer,
    customer: customerReducer
})

export default rootReducer