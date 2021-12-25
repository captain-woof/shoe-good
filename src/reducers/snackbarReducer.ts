import { ActionTypes } from "../actions/actionTypes"
import getSnackbarAction from "../actions/snackbar"
import { SnackbarPayload } from "../types/snackbar"

const initialSnackbarState: SnackbarPayload = {
    message: "",
    type: "success"
}

const snackbarReducer = (state: SnackbarPayload = initialSnackbarState, action: (ReturnType<typeof getSnackbarAction>)): SnackbarPayload => {
    switch (action.type) {
        case ActionTypes.SHOW_SNACKBAR:
            return action.payload
        default:
            return state
    }
}

export default snackbarReducer