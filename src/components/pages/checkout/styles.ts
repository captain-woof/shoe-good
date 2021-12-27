import { styled } from "@mui/material/styles"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"

export const StyledPaper = styled(Paper)(({ theme }) => ({
    borderRadius: theme.spacing(2),
    width: "100%",
    maxWidth: "648px",
    margin: `${theme.spacing(10)} auto`,
    padding: `${theme.spacing(4)} ${theme.spacing(6)}`
}))

export const StyledHeading = styled(Typography)(({ theme }) => ({
    marginTop: theme.spacing(2),
    textAlign: 'center'
}))

export const StyledSubHeading = styled(Typography)(({ theme }) => ({
    margin: `${theme.spacing(1)} auto ${theme.spacing(2)} auto`,
    width: "fit-content",
    color: theme.palette.primary.main,
    fontWeight: 500,
    textDecoration: "underline"
}))

export const StyledCartEmptyText = styled(Typography)(({ theme }) => ({
    margin: `${theme.spacing(1)} auto ${theme.spacing(2)} auto`,
    width: "fit-content",
    color: theme.palette.grey[500]
}))

export const StyledForm = styled('form')(({ theme }) => ({
    maxWidth: "600px",
    margin: "auto"
}))

export const StyledTextField = styled(TextField)(({ theme }) => ({
    margin: `${theme.spacing(1)} 0`,
}))

export const StyledActionButtonsWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(2),
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "flex-end",
    marginTop: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
        justifyContent: "center"
    }
}))