import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"

export const StyledLoaderContainer = styled(Box)(({ theme }) => ({
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative"
}))
