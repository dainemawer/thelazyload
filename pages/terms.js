import Layout from '@components/Layout/Layout'
import Meta from '@components/Meta/Meta'
import { getPage } from '@services/pages'

const Terms = ({ terms }) => {
    const { content } = terms;
    return (
        <Layout>
            <Meta page="Terms" />
            <h1>Terms</h1>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </Layout>
    )
}

export async function getStaticProps() {
    const terms = await getPage('terms') || {}
    return {
        props: { terms },
    }
}

export default Terms;