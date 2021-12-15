import { styled } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import Link from "../../atoms/Link"
import Grid from '@mui/material/Grid'
import IconButton from "@mui/material/IconButton"

export const StyledNavbar = styled(AppBar)(({ theme }) => ({
    [theme.breakpoints.up('xs')]: {
        top: 'unset',
        bottom: 0,
        left: 0,
        backgroundColor: theme.palette.primary.main
    },
    [theme.breakpoints.up('sm')]: {
        top: 0,
        bottom: 'unset',
        left: 0,
        backgroundColor: theme.palette.common.white
    }
}))

export const StyledHeading = styled(Typography)(({ theme }) => ({
    height: "100%",
    display: "flex",
    alignItems: "center",
    color: theme.palette.grey[900],
    cursor: "hover",
    transition: theme.transitions.create("all", {
        duration: theme.transitions.duration.standard
    }),
    "&:hover": {
        color: theme.palette.primary.main
    }
}))

export const StyledNavbarLinksContainer = styled(Grid)(({ theme }) => ({
    justifyContent: "end",
    gap: theme.spacing(3),
    alignItems: 'center'
}))

export const StyledNavbarLinkWidescreen = styled(Link)(({ theme }) => ({
    backgroundColor: "transparent",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: `0 ${theme.spacing(2)}`,
    textDecoration: "none",
    transition: theme.transitions.create("all", {
        duration: theme.transitions.duration.short,
        easing: theme.transitions.easing.easeInOut
    }),
    "&:hover": {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.grey["50"]
    }
}))

export const StyledMobileNavbarIconButtons = styled(IconButton, { shouldForwardProp: () => true })<{ active?: boolean }>(({ theme, active }) => ({
    color: theme.palette.common.white,
    backgroundColor: active ? theme.palette.primary.light : "transparent",
    "&:hover": {
        backgroundColor: theme.palette.primary.dark
    }
}))
