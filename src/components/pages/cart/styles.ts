import { styled } from "@mui/material/styles"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart'

// Below styles for Main

export const StyledCartPaper = styled(Paper)(({ theme }) => ({
    width: '100%',
    marginTop: theme.spacing(12),
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
        padding: `${theme.spacing(1)} 0 ${theme.spacing(4)} 0`,
        marginBottom: theme.spacing(12)
    }
}))

export const StyledHeading = styled(Typography)(({ theme }) => ({
    textAlign: "center",
    margin: `${theme.spacing(1)} 0`
}))

export const StyledLineItemsContainer = styled(Container)(({ theme }) => ({
    width: "100%",
    maxWidth: "600px",
    gap: theme.spacing(1),
    display: "flex",
    flexDirection: "column"
}))

export const StyledSubHeading = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[700]
}))

export const StyledNoItemsFound = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[500],
    textAlign: "center",
    padding: `${theme.spacing(8)} 0 ${theme.spacing(10)} 0`
}))

// Below styles for Line Item

export const StyledLineItemBox = styled(Box, { shouldForwardProp: () => true })<{ itemBeingDeleted: boolean }>(({ theme, itemBeingDeleted }) => ({
    width: '100%',
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    gap: theme.spacing(4),
    "& > *": {
        height: '100%',
        position: "relative"
    },
    [theme.breakpoints.down("sm")]: {
        gap: theme.spacing(2)
    },
    "@media (max-width: 340px)": {
        gap: theme.spacing(1.25)
    },
    opacity: itemBeingDeleted ? 0.5 : 1
}))

export const StyledLineItemImageWrapper = styled(Box)(({ theme }) => ({
    width: theme.spacing(10),
    height: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
        height: theme.spacing(6),
        width: theme.spacing(6)
    }
}))

export const StyledLineItemDetailsWrapper = styled(Box)(({ theme }) => ({
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
        minHeight: theme.spacing(6)
    }
}))

export const StyledRemoveLineItemIcon = styled(RemoveShoppingCartIcon)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
        height: theme.spacing(2),
        width: theme.spacing(2)
    }
}))

export const StyledLineItemName = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[600],
    fontWeight: 600
}))

export const StyledLineItemOptionsContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: theme.spacing(1)
}))

export const StyledLineItemOption = styled(Typography)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    borderRadius: "50rem",
    color: theme.palette.common.white,
    fontWeight: 600,
    padding: `0 ${theme.spacing(1)}`,
    whiteSpace: "nowrap"
}))

export const StyledLineItemPrice = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[700]
}))

export const StyledLineItemDivider = styled(Divider)(({ theme }) => ({
    width: "80%",
    maxWidth: "600px",
    margin: `${theme.spacing(1)} auto`
}))

// Below styles for global action button
export const StyledActionButtonsWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    gap: theme.spacing(2),
    marginTop: theme.spacing(4),
    justifyContent: "flex-end",
    "& > *": {
        whiteSpace: "nowrap"
    },
    [theme.breakpoints.down("sm")]: {
        justifyContent: "center"
    }
}))