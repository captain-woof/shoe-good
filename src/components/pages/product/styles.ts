import { styled } from "@mui/material/styles"
import Grid from "@mui/material/Grid"
import Image from "next/image"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Paper from "@mui/material/Paper"
import Button from "@mui/material/Button"

export const StyledGrid = styled(Grid)(({ theme }) => ({
    borderRadius: "12px",
    minHeight: "inherit",
    [theme.breakpoints.down("sm")]: {
        minHeight: "unset"
    }
}))

export const StyledGridColImage = styled(Grid)(({ theme }) => ({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
        height: "fit-content",
        marginTop: theme.spacing(3)
    }
}))

export const StyledGridColDetails = styled(Grid)(({ theme }) => ({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
        justifyContent: 'flex-start',
        height: "max-content"
    }
}))

export const StyledProductImageBox = styled(Box)(({ theme }) => ({
    position: "relative",
    width: "100%",
    height: "33%",
    [theme.breakpoints.down("sm")]: {
        height: "40vh",
        marginBottom: theme.spacing(1)
    }
}))

export const StyledProductImageLighboxOuterBox = styled(Box)(({ theme }) => ({
    width: "90%",
    height: "90%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",

    [theme.breakpoints.down("sm")]: {
        width: "100%",
        height: "100%",
    }
}))

export const StyledProductImage = styled(Image)(({ theme }) => ({
    cursor: "pointer",
    objectFit: "contain",
    [theme.breakpoints.down("sm")]: {
        objectFit: "cover",
    }
}))

export const StyledClickToEnlarge = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[600],
    fontWeight: 500,
    cursor: "pointer"
}))

export const StyledProductDetailsWrapper = styled(Box)(({ theme }) => ({
    height: "80%",
    width: "100%",
    position: "relative",
    top: theme.spacing(4),
    padding: `0 ${theme.spacing(4)}`,
    [theme.breakpoints.down("sm")]: {
        padding: 0
    }
}))

export const StyledProductDetailsPaper = styled(Paper)(({ theme }) => ({
    minHeight: "100%",
    minWidth: "100%",
    position: "relative",
    padding: theme.spacing(4),
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[2],
    [theme.breakpoints.down("sm")]: {
        borderRadius: theme.spacing(0.5),
        boxShadow: "unset",
        padding: `0 ${theme.spacing(1)}`
    }
}))

export const StyledProductName = styled(Typography)(({ theme }) => ({

}))

export const StyledProductCategory = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[600]
}))

export const StyledProductDescriptionBox = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(4)
}))

export const StyledProductVariantsBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing(1)
}))

export const StyledProductVariantsHeading = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[600],
    marginRight: theme.spacing(1)
}))

export const StyledProductVariantOption = styled(Button)(({ theme }) => ({
    borderRadius: "50rem"
}))

export const StyledPriceHeading = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    marginTop: theme.spacing(3)
}))

export const StyledPrice = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[700],
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
        marginBottom: theme.spacing(4)
    }
}))

export const StyledActionButtonsRow = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(2),
    display: "flex",
    flexWrap: "nowrap",
    gap: theme.spacing(2),
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
        justifyContent: "flex-end"
    },
    paddingBottom: theme.spacing(10)
}))