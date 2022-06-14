import Layout from '@components/Layout/Layout'
import Schema from '@components/Schema/Schema'
import Image from 'next/image'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Meta from '@components/Meta/Meta'
import { getArticlesBySlug, getArticle, getRelatedArticles } from '@services/articles' 
import ArticleContent from '@components/ArticleContent/ArticleContent'
import ArticleHeader from '@components/ArticleHeader/ArticleHeader'
import ArticleFooter from '@components/ArticleFooter/ArticleFooter'
import ArticleRelated from '@components/ArticleRelated/ArticleRelated'

const Article = ({ article, related }) => {
    const router = useRouter()
    const { title, id, slug, type, published_at, metadata, content } = article
    const { cover_image, excerpt, tags, author } = metadata
    const readingTime = Math.ceil(content.split(' ').length / 200)

    if (!router.isFallback && !slug) {
        return <ErrorPage statusCode={404} />
    }

    return (
        <Layout>
            <Meta page={title} />
            <Schema title={title} page="/resources/[slug]" url={`https://thelazyload.com/tags/${slug}`} image={metadata?.cover_image?.url} published={published_at} excerpt={excerpt} wordCount={content.split(' ').length} />
            <article className="max-w-4xl mx-auto" id={id}>
                {cover_image.url !== null && (
                    <Image className="rounded-lg" alt="Hero Image" layout="responsive" priority src={cover_image.url} width={896} height={448} />
                )}
                <ArticleHeader
                    title={title}
                    published={published_at}
                    author={author}
                    reading={`${readingTime} min read`}
                    excerpt={excerpt}
                    slug={slug}
                    image={cover_image.url}
                    type={type}
                />
                
                {content && <ArticleContent content={content} />}
                {tags && <ArticleFooter tags={tags} />}
            </article>

            <div className="max-w-4xl mx-auto">
                {related.length > 0 && <ArticleRelated posts={related} type={type} />}
            </div>
        </Layout>
    )
}

export async function getStaticProps({ params }) {
    const data = await getArticle(params.slug)
    const related = await getRelatedArticles(params.slug) || []

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