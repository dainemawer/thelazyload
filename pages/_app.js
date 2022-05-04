import '@styles/global.css'
import Script from 'next/script'

export default function TheLazyLoadApp({ Component, pageProps }) {
    return (
        <>
            <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`} />
            <Script id="gtag-datalayer" strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}');
                `}
            </Script>
            <Component {...pageProps} />
        </>
    )
}