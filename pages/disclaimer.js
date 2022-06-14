import Layout from '@components/Layout/Layout'
import Meta from '@components/Meta/Meta'
import Schema from '@components/Schema/Schema'
import { getPage } from '@services/pages'

const Disclaimer = ({ disclaimer }) => {
    const { content } = disclaimer;
    return (
        <Layout>
            <Meta page="Disclaimer" />
            <Schema title="Disclaimer" page="/disclaimer" url="https://thelazyload.com/disclaimer" />
            <h1>Disclaimer</h1>
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