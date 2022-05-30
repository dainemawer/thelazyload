
import Layout from '@components/Layout/Layout'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import Meta from '@components/Meta/Meta'
import { getTagsBySlug, getArticlesByTag, getResourcesByTag, getTag } from '@services/tags'
import ArticleCard from '@components/ArticleCard/ArticleCard'
import NoItems from '@components/NoItems/NoItems'

const Tag = ({ tag, articles, resources }) => {
    const router = useRouter()

    if (!router.isFallback && !tag?.slug) {
        return <ErrorPage statusCode={404} />
    }

    return (
        <Layout>
            <Meta page={tag.title} />
            <section id={tag.id}>
                <h1>{tag.title}</h1>
                <div>
                    {resources.length > 0 ? (
                        <>
                            <h3>Resources</h3>
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
                        </>
                    ) : (
                        <NoItems />
                    )}
                   
                </div>
                <div>
                    {articles.length > 0 ? (
                        <>
                            <h3>Articles</h3>
                            {articles.map(article => (
                                <ArticleCard
                                    key={article.id}
                                    id={article.id}
                                    title={article.title}
                                    type="articles"
                                    slug={article.slug}
                                    metadata={article.metadata}
                                    published={article.published_at}
                                />
                            ))}
                        </>
                    ): (
                        <NoItems />
                    )}
                </div>
            </section>
        </Layout>
    )
}

export async function getStaticProps({ params }) {
    const tag = await getTag(params.slug)
    const articles = await getArticlesByTag(params.slug) || []
    const resources = await getResourcesByTag(params.slug) || []
    return {
        props: {
            resources,
            articles,
            tag
        },
    }
}

export async function getStaticPaths() {
    const tags = await getTagsBySlug() || []
    return {
        paths: tags.map((tag) => `/tags/${tag.slug}`),
        fallback: false,
    }
}

export default Tag