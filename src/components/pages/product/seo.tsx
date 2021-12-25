import Head from 'next/head'

interface ProductSeo {
    title: string
    description: string
    image: string
    url: string
}

export default function ProductSeo({ description, title, image, url }: ProductSeo) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="og:title" property="og:title" content={title} />
            <meta name="og:description" property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />
        </Head>
    )
}