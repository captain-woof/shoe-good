import { styled } from "@mui/material/styles"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Pagination from "@mui/material/Pagination"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import CircularProgress from "@mui/material/CircularProgress"
import IconButton from "@mui/material/IconButton"
import FormControl from "@mui/material/FormControl"
import Drawer from "@mui/material/Drawer"
import { ContainerMargin } from "../../atoms/Containers"

// Below styles for Drawer and its children
export const StyledDrawer = styled(Drawer)(({ theme }) => ({
    [theme.breakpoints.up("sm")]: {
        "& > :nth-child(3)": {
            width: "320px !important"
        }
    }
}))

export const StyledDrawerContents = styled(Box)(({ theme }) => ({
    position: "relative",
    display: 'flex',
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
    padding: `${theme.spacing(6)} ${theme.spacing(4)}`,
    [theme.breakpoints.down("md")]: {
        padding: `${theme.spacing(3)} ${theme.spacing(4)}`
    }
}))

export const StyledDrawerHeading = styled(Typography)(({ theme }) => ({
    fontFamily: theme.typography.body1.fontFamily,
    marginBottom: theme.spacing(2)
}))

export const StyledFilterFormControl = styled(FormControl)(({ theme }) => ({
    marginBottom: theme.spacing(2)
}))

// Below styles for Main component
export const StyledContainerMargin = styled(ContainerMargin)(({ theme }) => ({
    display: "flex",
    flexDirection: "column"
}))

export const StyledHeadingContainer = styled(Container)(({ theme }) => ({
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        marginTop: theme.spacing(10),
    }
}))

export const StyledQueryBox = styled('form')(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: 'center',
    gap: theme.spacing(2),
    position: "relative",
    marginTop: theme.spacing(2)
}))

export const StyledQueryTextfield = styled(TextField)(({ theme }) => ({
    width: "50%",
    minWidth: "240px",
    maxWidth: "375px"
}))

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    "&:hover": {
        backgroundColor: theme.palette.primary.light
    }
}))

export const StyledHeading = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[900],
    width: "fit-content"
}))

export const StyledSubHeading = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[500],
    width: "fit-content"
}))

export const StyledProductsGrid = styled(Grid)(({ theme }) => ({
    marginTop: theme.spacing(4),
    position: "relative",
    flexGrow: 1,
    paddingBottom: theme.spacing(16)
}))

export const StyledCircularProgress = styled(CircularProgress)(({ theme }) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
}))

export const StyledProductsPagination = styled(Pagination)(({ theme }) => ({
    display: 'flex',
    width: "max-content",
    justifyContent: "center",
    position: "fixed",
    left: "50%",
    bottom: theme.spacing(1),
    transform: "translate(-50%, -50%)",
    backgroundColor: theme.palette.common.white,
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
    boxShadow: theme.shadows[6],
    borderRadius: "50rem",
    [theme.breakpoints.down("md")]: {
        bottom: theme.spacing(2),
        padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`
    },
    [theme.breakpoints.down("sm")]: {
        bottom: theme.spacing(7),
    }
}))

export const StyledCardImgAndCat = styled(Box)(({ theme }) => ({
    position: "relative",
    height: "160px",
    width: "100%"
}))

export const StyledProductCategories = styled(Typography)(({ theme }) => ({
    position: "absolute",
    bottom: theme.spacing(1),
    right: theme.spacing(1),
    display: "flex",
    flexDirection: "row",
    gap: theme.spacing(1)
}))

export const StyledProductCategory = styled(Typography)(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    padding: `${theme.spacing(0.125)} ${theme.spacing(0.5)}`,
    color: theme.palette.grey[900],
    fontWeight: 600,
    boxShadow: theme.shadows[4]
}))

export const StyledProductTitle = styled(Typography)(({ theme }) => ({
    fontFamily: theme.typography.body2.fontFamily
}))

export const StyledProductPrice = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[800]
}))