import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return(
            <Html lang="id">
                <Head>
                    <meta name="description" content="Okjek Boss" />
                    <link rel="icon" href="/favicon.ico" />
                    <meta charSet="utf-8" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}