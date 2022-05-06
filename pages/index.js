import Layout from '@components/Layout/Layout'
import Meta from '@components/Meta/Meta'
import Link from 'next/link'
import Image from 'next/image'
import { getArticles } from '@services/articles'
import { getResources } from '@services/resources'
import ArticleCard from '@components/ArticleCard/ArticleCard'

const Index = ({ articles, resources }) => {
    return (
        <Layout>
            <Meta page="The Lazy Load" />
            <h1 role="heading">Home</h1>
            <h2>Articles</h2>
            <div>
                {articles && articles.map((article) => (
                    <ArticleCard
                        key={article.id}
                        id={article.id}
                        slug={article.slug}
                        published={article.published_at}
                        type="articles"
                        title={article.title}
                        metadata={article.metadata}
                    />
                ))}
            </div>
            <h3>Resources</h3>
            <div>
                {resources && resources.map((resource) => (
                    <ArticleCard
                        key={resource.id}
                        id={resource.id}
                        slug={resource.slug}
                        published={resource.published_at}
                        type="resources"
                        title={resource.title}
                        metadata={resource.metadata}
                    />
                ))}
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const articles = await getArticles() || []
    const resources = await getResources() || []
    return {
        props: { articles, resources },
    }
}

export default Index