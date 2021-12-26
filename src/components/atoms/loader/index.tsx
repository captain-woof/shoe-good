import { StyledLoaderContainer } from "./styles"
import CircularProgress from '@mui/material/CircularProgress'

export default function Loader() {
    return (
        <StyledLoaderContainer>
            <CircularProgress color="primary" />
        </StyledLoaderContainer>
    )
}