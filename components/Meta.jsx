import Head from 'next/head'
import React from 'react'
import { getOgImageUrl } from '../utils'

function Meta({ title, description, url }) {
    return (
        <Head>
            <title>{title} | Praveen Kr.</title>
            <meta name="description" content={description} />
            <meta property="og:type" content="website" />
            <meta name="og:title" property="og:title" content={title} />
            <meta name="og:description" property="og:description" content={description} />
            <meta property="og:site_name" content="https://praveeen.in" />
            <meta property="og:url" content={url} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:site" content="https://praveeen.in" />
            <meta name="twitter:creator" content="" />
            <link rel="icon" type="image/png" href="/img/favicon.ico" />
            <link rel="apple-touch-icon" href="/img/favicon.ico" />
            <meta property="og:image" content={getOgImageUrl(title)} />
            <meta name="twitter:image" content={getOgImageUrl(title)} />
        </Head>
    )
}

export default Meta
