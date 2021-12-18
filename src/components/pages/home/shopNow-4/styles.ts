import { styled } from "@mui/material/styles"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"

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
    color: theme.palette.common.white
}))