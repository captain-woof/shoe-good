import { ContainerMargin, ContainerFullWidth } from "../../atoms/Containers";
import HeroImage from "./heroImage";
import { useTheme } from '@mui/material/styles'
import Texts from "./texts";
import Grid from "@mui/material/Grid"
import { StyledParentGrid, StyledButton } from './styles'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'

export default function Home() {
    const theme = useTheme()

    return (
        <ContainerFullWidth style={{ backgroundColor: theme.palette.primary.main }}>
            <ContainerMargin>
                <StyledParentGrid container minHeight="inherit" alignItems="center" justifyItems="center">
                    <Grid xs={12} sm={6} item minHeight="100%">
                        {/* For texts */}
                        <Texts />
                    </Grid>
                    <Grid xs={12} sm={6} item minHeight="100%">
                        {/* For hero image */}
                        <HeroImage />
                    </Grid>
                </StyledParentGrid>
                <StyledButton href="/store" variant="text" endIcon={<ShoppingBagOutlinedIcon />}>
                    Explore
                </StyledButton>
            </ContainerMargin>
        </ContainerFullWidth>
    )
}