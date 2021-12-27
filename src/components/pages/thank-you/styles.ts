import { styled } from "@mui/material/styles"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"

export const StyledPaper = styled(Paper)(({ theme }) => ({
    borderRadius: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(4)
}))

export const StyledHeading = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    textAlign: "center"
}))

export const StyledButton = styled(Button)(({ theme }) => ({
    
}))