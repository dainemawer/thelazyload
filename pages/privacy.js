import Layout from '@components/Layout/Layout'
import Meta from '@components/Meta/Meta'
import { getPage } from '@services/pages'

const Privacy = ({ privacy }) => {
    const { content } = privacy;
    return (
        <Layout>
            <Meta page="Privacy" />
            <h1>Privacy</h1>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </Layout>
    )
}

export async function getStaticProps() {
    const privacy = await getPage('privacy-policy') || {}
    return {
        props: { privacy },
    }
}

export default Privacy;