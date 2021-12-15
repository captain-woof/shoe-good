// Icons
import HomeIcon from '@mui/icons-material/Home'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'

// Styled comps
import { StyledHeading, StyledNavbar, StyledNavbarLinkWidescreen, StyledNavbarLinksContainer, StyledMobileNavbarIconButtons } from './styles'

// From MUI
import Toolbar from '@mui/material/Toolbar'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import IconButton from "@mui/material/IconButton"

// From Next
import Link from 'next/link'
import { useRouter } from 'next/router'

// Hooks
import useDevice from '../../../hooks/device'

const navLinks = {
    home: { displayName: "Home", url: "/", Icon: HomeIcon },
    store: { displayName: "Store", url: "/store", Icon: LocalMallIcon },
    cart: { displayName: "Cart", url: "/cart", Icon: LocalGroceryStoreIcon },
    dashboard: { displayName: "Dashboard", url: "/dashboard", Icon: PersonOutlineIcon }
}

export default function Navbar() {
    const { isMobile } = useDevice()
    const router = useRouter()

    return (
        <StyledNavbar>
            <Toolbar>
                {/* For widescreens */}
                {!isMobile &&
                    <Grid container minHeight="inherit">
                        <Grid item xs={6}>
                            <StyledHeading variant="h5">
                                <Link passHref href={navLinks.home.url}><a>
                                    Shoe-Good
                                </a></Link>
                            </StyledHeading>
                        </Grid>
                        <StyledNavbarLinksContainer container item xs={6}>
                            <StyledNavbarLinkWidescreen href={navLinks.store.url}>
                                {navLinks.store.displayName}
                            </StyledNavbarLinkWidescreen>
                            <StyledNavbarLinkWidescreen href={navLinks.dashboard.url}>
                                {navLinks.dashboard.displayName}
                            </StyledNavbarLinkWidescreen>
                            <IconButton href={navLinks.cart.url} color="primary">
                                {<navLinks.cart.Icon height="fit-content" />}
                            </IconButton>
                        </StyledNavbarLinksContainer>
                    </Grid>
                }

                {/* For mobiles */}
                {isMobile &&
                    <Grid container justifyContent="space-evenly">
                        <Grid item md={3}>
                            <Link href={navLinks.home.url} passHref><a>
                                <StyledMobileNavbarIconButtons active={router.pathname === navLinks.home.url}>
                                    {<navLinks.home.Icon />}
                                </StyledMobileNavbarIconButtons>
                            </a></Link>
                        </Grid>
                        <Grid item md={3}>
                            <Link href={navLinks.store.url} passHref><a>
                                <StyledMobileNavbarIconButtons active={router.pathname === navLinks.store.url}>
                                    {<navLinks.store.Icon />}
                                </StyledMobileNavbarIconButtons>
                            </a></Link>
                        </Grid>
                        <Grid item md={3}>
                            <Link href={navLinks.dashboard.url} passHref><a>
                                <StyledMobileNavbarIconButtons active={router.pathname === navLinks.dashboard.url}>
                                    {<navLinks.dashboard.Icon />}
                                </StyledMobileNavbarIconButtons>
                            </a></Link>
                        </Grid>
                        <Grid item md={3}>
                            <Link href={navLinks.cart.url} passHref><a>
                                <StyledMobileNavbarIconButtons active={router.pathname === navLinks.cart.url}>
                                    {<navLinks.cart.Icon />}
                                </StyledMobileNavbarIconButtons>
                            </a></Link>
                        </Grid>
                    </Grid>
                }
            </Toolbar>
        </StyledNavbar>
    )
}