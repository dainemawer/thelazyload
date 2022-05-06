import Layout from '@components/Layout/Layout'
import Meta from '@components/Meta/Meta'
import { getArticles } from '@services/articles'
import ArticleCard from '@components/ArticleCard/ArticleCard'

const Articles = ({ articles }) => {
    return (
        <Layout>
            <Meta page="Articles" />
            <h1>Articles</h1>
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
        </Layout>
    )
}

export async function getStaticProps() {
    const articles = await getArticles() || []
    return {
        props: { articles },
    }
}

export default Articles