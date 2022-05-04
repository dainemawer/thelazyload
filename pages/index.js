import Layout from '@components/Layout/Layout'
import Meta from '@components/Meta/Meta'
import Link from 'next/link'

const Index = () => {
    return (
        <Layout>
            <Meta title="The Lazy Load" />
            <h1 role="heading">Index</h1>
            <p id="go-to-article">
                <Link href={`/articles/article`}>Go To Article</Link>
            </p>
            <p id="go-to-resource">
                <Link href={`/resources/resource`}>Go To Resource</Link>
            </p>
        </Layout>
    )
}
export default Index