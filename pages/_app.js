import '@styles/global.css'
import { useEffect } from 'react'
import Script from 'next/script'
import { sendMetric, pageView } from '@services/analytics'
import { useRouter } from 'next/router'

export function reportWebVitals(metric) {
    switch(metric.name) {
        case 'FCP':
            //sendMetric(metric);
            break
        case 'LCP':
            //sendMetric(metric);
            break
        case 'CLS':
            //sendMetric(metric);
            break
        case 'FID':
            //sendMetric(metric);
            break
        case 'TTFB':
            // sendMetric(metric);
            break
        default:
            break
    }
}

export default function TheLazyLoadApp({ Component, pageProps }) {

    const router = useRouter()

    useEffect(() => {

        const handleRouteChange = url => {
            pageView(url, document.title);
        };

        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    
    }, [router.events]);

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