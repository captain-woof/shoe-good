import Container from '@mui/material/Container'
import { styled } from '@mui/material/styles'
import { ReactNode, CSSProperties } from 'react'

// Common interface
interface Container {
    children: ReactNode
    style?: CSSProperties
}

// Full width container
export const ContainerFullWidth = ({ children, style }: Container) => {
    return (
        <StyledContainer component="section" disableGutters style={style}>
            {children}
        </StyledContainer>
    )
}

// Margined container
export const ContainerMargin = ({ children, style }: Container) => {
    return (
        <StyledContainer component="section" maxWidth="md" style={style}>
            {children}
        </StyledContainer>
    )
}

// Custom styles
const StyledContainer = styled(Container, { shouldForwardProp: () => true })<{ component: string }>(({ theme }) => ({
    minHeight: "100vh"
}))