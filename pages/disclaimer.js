import Layout from '@components/Layout/Layout'
import Meta from '@components/Meta/Meta'
import { getPage } from '@services/pages'

const Disclaimer = ({ disclaimer }) => {
    const { content } = disclaimer;
    return (
        <Layout>
            <Meta page="Disclaimer" />
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </Layout>
    )
}

export async function getStaticProps() {
    const disclaimer = await getPage('disclaimer') || {}
    return {
        props: { disclaimer },
    }
}

export default Disclaimer;