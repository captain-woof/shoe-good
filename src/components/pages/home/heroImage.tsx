import { StyledHeroImageWrapper } from './styles'
import Image from 'next/image'

export default function HeroImage() {
    return (
        <StyledHeroImageWrapper>
            <Image src="/images/hero-shoe.png" alt="Hero image" layout="fill" objectFit="contain" />
        </StyledHeroImageWrapper>
    )
}