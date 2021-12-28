import { styled } from "@mui/material/styles"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

export const StyledContainer = styled(Container)(({ theme }) => ({
    minHeight: "236px",
    width: "100%",
    padding: "0 !important",
    backgroundImage: "url(./images/footer-fixed-img.jpg)",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "0 70px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: theme.spacing(2)
}))

export const StyledShopNowText = styled(Typography)(({ theme }) => ({
    textTransform: "uppercase",
    color: theme.palette.common.white,
    [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.h4.fontSize
    }
}))

export const StyledFooterContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    minHeight: "100px",
    maxWidth: "1200px",
    margin: "0 auto",
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
        marginBottom: theme.spacing(6),
        padding: theme.spacing(2)
    }
}))

export const StyledCreditsHeadline = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontFamily: theme.typography.h1.fontFamily,
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.h5.fontSize
    }
}))

export const StyledCreditsBody = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[50],
    textAlign: "center",
    fontWeight: 500,
    textDecoration: "underline",
    fontStyle: "italic"
}))