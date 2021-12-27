import useCart from "../../../hooks/cart"
import { ContainerMargin } from "../../atoms/Containers"
import { StyledPaper, StyledHeading, StyledForm, StyledActionButtonsWrapper, StyledTextField, StyledSubHeading, StyledCartEmptyText } from "./styles"
import { Formik } from "formik"
import * as yup from "yup"
import Button from "@mui/material/Button"
import LoadingButton from "@mui/lab/LoadingButton"
import Link from "next/link"
import Select from "@mui/material/Select"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"
import MenuItem from "@mui/material/MenuItem"
import FormHelperText from "@mui/material/FormHelperText"
import { useMemo } from "react"

interface Checkout {
    regionsInCountry: { [name: string]: string }
}

export default function Checkout({ regionsInCountry }: Checkout) {
    const { opPending, startCheckout, cart } = useCart()

    // Initial form values
    const initialValues = useMemo(() => ({
        name: "",
        email: "",
        phone: "",
        pincode: "",
        state: "",
        streetAddress: "",
        townCity: ""
    }), [])

    // Form validation schema
    const validationSchema = useMemo(() => (
        yup.object({
            name: yup.string().required("Required"),
            email: yup.string().email("Must be a valid email"),
            phone: yup.string().required("Required"),
            pincode: yup.string().required("Required").length(6, "Must be a valid Pin code"),
            state: yup.string().required("Required").oneOf(
                Object.keys(regionsInCountry)
            ),
            streetAddress: yup.string().required("Required"),
            townCity: yup.string().required("Required")
        })
    ), [])

    return (
        <ContainerMargin>
            <StyledPaper elevation={4}>
                {/* Heading */}
                <StyledHeading variant="h4">Checkout</StyledHeading>

                {/* Number of items indicator */}
                <Link passHref href="/cart"><a>
                    <StyledSubHeading variant="subtitle1">{cart?.total_items || 0} items in cart</StyledSubHeading>
                </a></Link>

                {/* Show message if cart is empty, else render form */}
                {cart?.total_items === 0 ?
                    <StyledCartEmptyText variant="h5">Your cart is empty</StyledCartEmptyText> :

                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={async (values, { setSubmitting }) => {
                        // Function to handle checkout button click
                        !opPending && await startCheckout(values)
                        setSubmitting(false)
                    }}>
                        {({ handleSubmit, values, handleChange, errors, touched }) => (
                            <StyledForm onSubmit={handleSubmit}>

                                {/* Name */}
                                <StyledTextField size="small" name="name" value={values.name} onChange={handleChange} label="Name" error={!!errors.name && touched.name} helperText={(touched.name && errors.name) || "Your name"} color="primary" fullWidth />

                                {/* Email */}
                                <StyledTextField size="small" name="email" value={values.email} onChange={handleChange} label="Email" error={!!errors.email && touched.email} helperText={(touched.email && errors.email) || "Your email"} color="primary" fullWidth type="email" />

                                {/* Phone */}
                                <StyledTextField size="small" name="phone" value={values.phone} onChange={handleChange} label="Phone" error={!!errors.phone && touched.phone} helperText={(touched.phone && errors.phone) || "Your phone number (excluding +91)"} color="primary" fullWidth type="tel" />

                                {/* Street Address */}
                                <StyledTextField size="small" name="streetAddress" value={values.streetAddress} onChange={handleChange} label="Street Address" error={!!errors.streetAddress && touched.streetAddress} helperText={(touched.streetAddress && errors.streetAddress) || "Your street address"} color="primary" fullWidth />

                                {/*Town/City */}
                                <StyledTextField size="small" name="townCity" value={values.townCity} onChange={handleChange} label="Town/City" error={!!errors.townCity && touched.townCity} helperText={(touched.townCity && errors.townCity) || "Your town/city"} color="primary" fullWidth />

                                {/* Pin Code */}
                                <StyledTextField size="small" name="pincode" value={values.pincode} onChange={handleChange} label="Pin Code" error={!!errors.pincode && touched.pincode} helperText={(touched.pincode && errors.pincode) || "Your pin code"} color="primary" fullWidth type="number" />

                                {/* State */}
                                <FormControl fullWidth size="small">
                                    <FormLabel>State</FormLabel>
                                    <Select name="state" value={values.state} label="State" onChange={handleChange} error={!!errors.state && touched.state} color="primary">
                                        {Object.entries(regionsInCountry).map(([regionKey, regionName]) => (
                                            <MenuItem value={regionKey} key={regionKey}>
                                                {regionName}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    <FormHelperText error={!!errors.state && touched.state}>
                                        {(touched.state && errors.state) || "Your state / union territory"}
                                    </FormHelperText>
                                </FormControl>

                                {/* Action buttons */}
                                <StyledActionButtonsWrapper>
                                    {/* Cart button */}
                                    <Link passHref href="/cart"><a>
                                        <Button variant="outlined" color="primary">
                                            Cart
                                        </Button>
                                    </a></Link>

                                    {/* Submit button */}
                                    <LoadingButton loading={opPending} variant="contained" color="primary" type="submit">
                                        Go
                                    </LoadingButton>
                                </StyledActionButtonsWrapper>


                            </StyledForm>
                        )}
                    </Formik>
                }
            </StyledPaper>
        </ContainerMargin>
    )
}