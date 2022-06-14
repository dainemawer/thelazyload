import Layout from '@components/Layout/Layout'
import Schema from '@components/Schema/Schema'
import Meta from '@components/Meta/Meta'
import { getPage } from '@services/pages'

const Privacy = ({ privacy }) => {
    const { content } = privacy;
    return (
        <Layout>
            <Meta page="Privacy" />
            <Schema title="Privacy" page="/privacy" url="https://thelazyload.com/privacy" />
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