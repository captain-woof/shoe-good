import { SnackbarPayload } from '../types/snackbar'
import { ActionTypes } from './actionTypes'

const getSnackbarAction = (snackbarPayload: SnackbarPayload) => ({
    type: ActionTypes.SHOW_SNACKBAR,
    payload: snackbarPayload
})

export default getSnackbarAction