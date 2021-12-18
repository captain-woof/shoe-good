import { styled } from "@mui/material/styles"
import Typography from '@mui/material/Typography'
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Link from 'next/link'

export const StyledHeading = styled(Typography)(({ theme }) => ({
    margin: "auto",
    width: "max-content",
    [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.h4.fontSize,
        width: "fit-content",
        textAlign: 'center'
    }
}))

export const StyledCategoryGrid = styled(Grid)(({ theme }) => ({
    minHeight: "inherit",
    marginTop: theme.spacing(5),
    gap: theme.spacing(2),
    flexWrap: "nowrap",
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down("sm")]: {
        flexWrap: "wrap",
        gap: theme.spacing(4)
    }
}))

export const StyledCategoryHeading = styled(Typography)(({ theme }) => ({
    textAlign: 'center'
}))

export const StyledCategoryPaper = styled(Paper)(({ theme }) => ({
    padding: `${theme.spacing(3)} ${theme.spacing(2)}`,
    minHeight: "100%",
    maxWidth: "400px"
}))

export const StyledCategoryImgWrapper = styled(Box)(({ theme }) => ({
    overflow: "hidden",
    borderRadius: theme.shape.borderRadius,
    marginTop: theme.spacing(2),
    height: "250px",
    position: "relative"
}))

export const StyledCategoryProducts = styled(Container)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    height: "90px",
    width: "100%",
    marginTop: theme.spacing(2)
}))

export const StyledCategoryProduct = styled(Box)(({ theme }) => ({
    position: 'relative',
    flexGrow: 1,
    flexBasis: 0,
    height: "100%"
}))

export const StyledProductLink = styled("a")(({ theme }) => ({
    height: "100%",
    width: "100%",
    display: "block",
    position: "relative"
}))

export const StyledCategoryDescription = styled(Typography)(({ theme }) => ({
    marginTop: theme.spacing(2),
    color: theme.palette.grey[800]
}))