import Layout from '@components/Layout/Layout'
import Schema from '@components/Schema/Schema'
import Meta from '@components/Meta/Meta'
import { getResources } from '@services/resources' 
import ArticleCard from '@components/ArticleCard/ArticleCard'
import NoItems from '@components/NoItems/NoItems'

const Resources = ({ resources }) => {
    const hasPosts = resources.length > 0

    return (
        <Layout>
            <Meta page="Resources" />
            <Schema title="Resources" page="/resources" url="https://thelazyload.com/resources" />
            <h1 className="md:mb-4 md:mt-14">Resources</h1>
            <h2 className="max-w-2xl mt-0 mb-16 font-normal text-zinc-600">Useful resources for enigneers to manage performance problems on every day projects.</h2>
            <section className={`grid gap-4 lg:gap-8 ${hasPosts ? 'md:grid-cols-3' : ''}`}>
                {hasPosts ? (
                    <>
                        {resources.map(resource => (
                            <ArticleCard
                                key={resource.id}
                                id={resource.id}
                                title={resource.title}
                                type={resource.type}
                                slug={resource.slug}
                                metadata={resource.metadata}
                                published={resource.published_at}
                            />
                        ))}
                    </>
                ) : (
                    <NoItems />
                )}
               
            </section>
            
        </Layout>
    )
}

export async function getStaticProps() {
    const resources = await getResources() || []
    return {
        props: { resources },
        revalidate: 10
    }
}

export default Resources