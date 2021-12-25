export interface SnackbarPayload {
    type: "success" | "error" | "warning" | "info"
    message: string
}