import Layout from '@components/Layout/Layout'
import Image from 'next/image'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Meta from '@components/Meta/Meta'
import { getArticlesBySlug, getArticle, getRelatedArticles } from '@services/articles' 
import ArticleContent from '@components/ArticleContent/ArticleContent'
import ArticleExcerpt from '@components/ArticleExcerpt/ArticleExcerpt'
import ArticleHeader from '@components/ArticleHeader/ArticleHeader'
import ArticleFooter from '@components/ArticleFooter/ArticleFooter'
import ArticleMeta from '@components/ArticleMeta/ArticleMeta'
import ArticleRelated from '@components/ArticleRelated/ArticleRelated'

const Article = ({ article, related }) => {
    const router = useRouter()

    if (!router.isFallback && !article?.slug) {
        return <ErrorPage statusCode={404} />
    }

    const { metadata, content } = article
    const { cover_image, excerpt, tag, author } = metadata
    const readingTime = Math.ceil(content.split(' ').length / 200)
    return (
        <Layout>
            <Meta page={article.title} />
            <article id={article.id}>
                <ArticleHeader
                    title={article.title}
                    published={article.published_at}
                    author={author}
                    reading={`${readingTime} min read`}
                />
                {excerpt && <ArticleExcerpt excerpt={excerpt} />}
                {cover_image.url !== null && (
                    <Image className="rounded-lg" alt="Hero Image" layout="responsive" priority src={cover_image.url} width={896} height={448} />
                )}
                {content && <ArticleContent content={content} />}
                {tag && <ArticleFooter tag={tag} />}
            </article>
            <aside>
                
            </aside>

            <ArticleRelated posts={related} type="articles" />

        </Layout>
    )
}

export async function getStaticProps({ params }) {
    const data = await getArticle(params.slug)
    const related = await getRelatedArticles(params.slug)

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            related,
            article: {
                ...data.article,
            },
        },
    }
}

export async function getStaticPaths() {
    const articles = await getArticlesBySlug() || []
    return {
        paths: articles.map((article) => `/articles/${article.slug}`),
        fallback: false,
    }
}

export default Article