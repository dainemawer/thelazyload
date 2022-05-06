import Layout from '@components/Layout/Layout'
import Meta from '@components/Meta/Meta'
import { getResources } from '@services/resources' 
import ArticleCard from '@components/ArticleCard/ArticleCard'

const Resources = ({ resources }) => {
    return (
        <Layout>
            <Meta page="Resources" />
            <h1>Resources</h1>
            {resources.map(resource => (
                <ArticleCard
                    key={resource.id}
                    id={resource.id}
                    title={resource.title}
                    type="resources"
                    slug={resource.slug}
                    metadata={resource.metadata}
                    published={resource.published_at}
                />
            ))}
        </Layout>
    )
}

export async function getStaticProps() {
    const resources = await getResources() || []
    return {
        props: { resources },
    }
}

export default Resources