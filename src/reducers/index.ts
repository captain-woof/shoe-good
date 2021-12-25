import { combineReducers } from "redux"
import cartReducer from "./cartReducer"
import customerReducer from "./customerReducer"
import snackbarReducer from "./snackbarReducer"

const rootReducer = combineReducers({
    cart: cartReducer,
    customer: customerReducer,
    snackbar: snackbarReducer
})

export default rootReducer