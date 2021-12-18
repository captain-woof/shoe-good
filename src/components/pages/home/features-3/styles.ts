import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { styled } from "@mui/material/styles"

export const StyledHeading = styled(Typography)(({ theme }) => ({
    margin: "auto",
    width: "max-content",
    [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.h4.fontSize,
        width: "fit-content",
        textAlign: 'center'
    }
}))

export const StyledFeaturesBanner = styled(Grid)(({ theme }) => ({
    minHeight: "225px",
    justifyContent: "center",
    alignItems: "center",
    gap: `${theme.spacing(5)} 0`,
    padding: `${theme.spacing(2)} ${theme.spacing(1)} ${theme.spacing(8)} ${theme.spacing(1)}`
}))

export const StyledFeatureGrid = styled(Grid)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    gap: theme.spacing(0.5)
}))

export const StyledFeatureImgBox = styled(Box)(({ theme }) => ({
    position: "relative",
    minHeight: "180px",
    width: "100%"
}))

export const StyledFeatureText = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[800]
}))