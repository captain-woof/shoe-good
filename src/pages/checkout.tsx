import Checkout from "../components/pages/checkout"
import { GetStaticPropsContext, InferGetStaticPropsType } from "next"
import { commerce } from "../utils/chec/commerce"

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
    // Get regions in India
    const { subdivisions } = await commerce.services.localeListSubdivisions("IN")

    return {
        props: {
            regionsInCountry: subdivisions
        }
    }
}

export default function CheckoutPage({ regionsInCountry }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <Checkout regionsInCountry={regionsInCountry}/>
    )
}