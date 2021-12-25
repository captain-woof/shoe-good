import Alert from "@mui/material/Alert"
import { styled } from "@mui/material/styles"

export const StyledAlert = styled(Alert)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white
}))