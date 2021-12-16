import Box from "@mui/material/Box"
import { styled } from "@mui/material/styles"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"


// For grid
export const StyledParentGrid = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.up("xs")]: {
        padding: `0 ${theme.spacing(4)}`
    },
    [theme.breakpoints.up("sm")]: {
        padding: `0 ${theme.spacing(3)}`
    }
}))

// For hero image
export const StyledHeroImageWrapper = styled(Box)(({ theme }) => ({
    width: "auto",
    position: "relative",
    [theme.breakpoints.up("xs")]: {
        height: "250px"
    },
    [theme.breakpoints.up("sm")]: {
        height: "400px"
    }
}))

// For texts
export const StyledTextContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: "column",
    justifyContent: "center",
    height: "100%"
}))

export const StyledHeading = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    [theme.breakpoints.up("xs")]: {
        textAlign: 'center'
    },
    [theme.breakpoints.up("sm")]: {
        textAlign: 'start'
    }
}))

export const StyledSubHeading = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[300],
    [theme.breakpoints.up("xs")]: {
        textAlign: 'center'
    },
    [theme.breakpoints.up("sm")]: {
        textAlign: 'start'
    }
}))

export const StyledButton = styled(Button)(({ theme }) => ({
    color: theme.palette.common.white,
    position: 'absolute',
    left: '50vw',
    transform: "translate(-50%, 0%)",
    fontWeight: 600,
    padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.up("xs")]: {
        bottom: "15%",
    },
    [theme.breakpoints.up("sm")]: {
        bottom: "5%",
    }
}))