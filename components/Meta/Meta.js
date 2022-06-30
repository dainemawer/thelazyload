import Head from 'next/head'
import { useRouter } from 'next/router'
import { isWindow } from '@util/dom'
import { isHome } from '@util/router'
import { SITE_TITLE } from '@lib/constants'

const Meta = ({ page, canonical }) => {
    const router = useRouter()
    const host = isWindow && window.location.host
    const protocol = isWindow && window.location.protocol
    const path = `${protocol}//${host}${router.asPath}`
    const title = isHome(router.pathname) ? SITE_TITLE : `${page} | ${SITE_TITLE}`
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta name="keywords" content="web performance, tutorials, resources, news" />
            <meta name="robots" content="index,follow" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            {canonical && <link rel="canonical" href={canonical} />}
            <meta name="theme-color" content="#000000" />
            <meta name="description" content="The Lazy Load is a web performance blog that attempts to shed light and provide insight on everyday performance issues." />

            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:url" content={path} />
            <meta property="og:site_name" content="The Lazy Load" />
            <meta property="og:image" content="/og-image.jpg" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@iamdainemawer" />
            <meta name="twitter:creator" content="@iamdainemawer" />
            <meta name="twitter:image:src" content="/og-image.jpg" />

            <title>{title}</title>
        </Head>
    )
}
export default Meta