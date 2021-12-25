import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import getSnackbarAction from "../actions/snackbar"
import { RootState } from "../store"
import { SnackbarPayload } from "../types/snackbar"

export const useSnackbar = () => {
    const dispatch = useDispatch()
    const snackbarPayload = useSelector((state: RootState) => (state.snackbar))
    const setSnackbarPayload = useCallback((snackbarPayload: SnackbarPayload) => {
        dispatch(getSnackbarAction(snackbarPayload))
    }, [dispatch])

    return {
        snackbarPayload,
        setSnackbarPayload
    }
}