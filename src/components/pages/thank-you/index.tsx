import { ContainerMargin } from "../../atoms/Containers"
import { StyledPaper, StyledHeading, StyledButton } from "./styles"
import Link from "next/link"
import Box from "@mui/material/Box"

export default function ThankYou() {

    return (
        <ContainerMargin>
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh" width="100%">
                <StyledPaper elevation={4}>
                    <StyledHeading variant="h4">
                        Thank you for your purchase !
                    </StyledHeading>

                    <Link passHref href="/"><a>
                        <StyledButton variant="contained">
                            Go back
                        </StyledButton>
                    </a></Link>
                </StyledPaper>
            </Box>
        </ContainerMargin>
    )
}