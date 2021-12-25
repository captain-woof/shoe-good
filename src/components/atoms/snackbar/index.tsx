import SnackbarMui from "@mui/material/Snackbar"
import { useSnackbar } from "../../../hooks/snackbar"
import { useCallback, useEffect, useState } from "react"
import { StyledAlert } from "./styles"

export default function Snackbar() {
    const { snackbarPayload } = useSnackbar()
    const [show, setShow] = useState<boolean>(false)

    // Show snackbar every time global snackbar payload state changed
    useEffect(() => {
        if (snackbarPayload.message !== "") {
            setShow(true)
        }
    }, [snackbarPayload, setShow])

    // Function to hide snackbar
    const hideSnackbar = useCallback(() => {
        setShow(false)
    }, [setShow])

    return (
        <SnackbarMui autoHideDuration={4000} open={show} onClose={hideSnackbar} anchorOrigin={{
            horizontal: "right",
            vertical: "bottom"
        }}>
            <StyledAlert onClose={hideSnackbar} severity={snackbarPayload.type} sx={{ width: '100%' }} variant="filled">
                {snackbarPayload.message}
            </StyledAlert>
        </SnackbarMui>
    )
}