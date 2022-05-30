import Layout from '@components/Layout/Layout'
import Meta from '@components/Meta/Meta'
import { getArticles } from '@services/articles'
import ArticleCard from '@components/ArticleCard/ArticleCard'
import NoItems from '@components/NoItems/NoItems'

const Articles = ({ articles }) => {
    const hasPosts = articles.length > 0

    return (
        <Layout>
            <Meta page="Articles" />
            <h1 className="mb-4 mt-14">Articles</h1>
            <h2 className="max-w-2xl mt-0 mb-16 font-normal text-zinc-600">Tutorials, research and insights into everyday engineering challenges, with a focus on performance.</h2>
            <section className={`grid gap-4 ${hasPosts ? 'grid-cols-3' : ''}`}>
                {hasPosts ? (
                    <>
                        {articles.map(article => (
                            <ArticleCard
                                key={article.id}
                                id={article.id}
                                title={article.title}
                                type={article.type}
                                slug={article.slug}
                                metadata={article.metadata}
                                published={article.published_at}
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
    const articles = await getArticles() || []
    return {
        props: { articles },
    }
}

export default Articles