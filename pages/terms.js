import Layout from '@components/Layout/Layout'
import Schema from '@components/Schema/Schema'
import Meta from '@components/Meta/Meta'
import { getPage } from '@services/pages'

const Terms = ({ terms }) => {
    const { content } = terms;
    return (
        <Layout>
            <Meta page="Terms" />
            <Schema title="Terms" page="/terms" url="https://thelazyload.com/terms" />
            <h1>Terms</h1>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </Layout>
    )
}

export async function getStaticProps() {
    const terms = await getPage('terms') || {}
    return {
        props: { terms },
        revalidate: 10
    }
}

export default Terms;