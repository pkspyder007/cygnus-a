import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html className="scroll-smooth selection:bg-emerald-100 selection:text-green dark:selection:bg-blue-300 dark:selection:text-blue-600">
                <Head>
                <meta name="google-site-verification" content="6rSQiloY-B0JoQb2gJpzVTEuFzW94WUZfM8-csRRsic" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
                        rel="stylesheet"
                    />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument