import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en-US" dir="ltr">
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400&family=Roboto&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}