import { StyledFeaturesBanner, StyledFeatureGrid, StyledFeatureImgBox, StyledFeatureText, StyledHeading } from "./styles";
import Image from 'next/image'
import Tooltip from "@mui/material/Tooltip"

const features = [
    {
        displayName: "Free Shipping",
        image: "/images/feature-free-shipping.svg",
        tooltipText: "You don't pay for shipping !"
    },
    {
        displayName: "30 Days Return Policy",
        image: "/images/feature-return-policy.svg",
        tooltipText: "Don't like what you bought? Get a full refund !"
    },
    {
        displayName: "Top Quality",
        image: "/images/feature-quality.svg",
        tooltipText: "Quality that lives upto the price."
    },
    {
        displayName: "Ships countrywide",
        image: "/images/feature-ships-countrywide.svg",
        tooltipText: "Ships throughout the country."
    },
]

export default function Features() {
    return (
        <>
            <StyledHeading variant="h3">Get the best experience</StyledHeading>
            <StyledFeaturesBanner container>
                {features.map((feature) => (
                    <Tooltip title={feature.tooltipText} key={feature.displayName}>
                        <StyledFeatureGrid item xs={12} sm={6} md={3}>
                            <StyledFeatureImgBox>
                                <Image src={feature.image} alt={feature.displayName} layout="fill" objectFit="contain" />
                            </StyledFeatureImgBox>
                            <StyledFeatureText>{feature.displayName}</StyledFeatureText>
                        </StyledFeatureGrid>
                    </Tooltip>
                ))}
            </StyledFeaturesBanner>
        </>
    )
}