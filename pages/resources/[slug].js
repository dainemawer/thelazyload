
import Layout from '@components/Layout/Layout'
import Image from 'next/image'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import Meta from '@components/Meta/Meta'
import { getResourcesBySlug, getResource, getRelatedResources } from '@services/resources' 
import ArticleContent from '@components/ArticleContent/ArticleContent'
import ArticleExcerpt from '@components/ArticleExcerpt/ArticleExcerpt'
import ArticleHeader from '@components/ArticleHeader/ArticleHeader'
import ArticleFooter from '@components/ArticleFooter/ArticleFooter'
import ArticleMeta from '@components/ArticleMeta/ArticleMeta'
import ArticleRelated from '@components/ArticleRelated/ArticleRelated'

const Resource = ({ resource, related }) => {
    const router = useRouter()

    if (!router.isFallback && !resource?.slug) {
        return <ErrorPage statusCode={404} />
    }

    const { metadata, content } = resource
    const { cover_image, excerpt, tags, author, url } = metadata
    const readingTime = Math.ceil(resource.content.split(' ').length / 200)
    
    return (
        <Layout>
            <Meta page={resource.title} />
            <article id={resource.id}>
                <ArticleHeader
                    title={resource.title}
                    published={resource.published_at}
                    author={author}
                    reading={`${readingTime} min read`}
                />
                <ArticleExcerpt excerpt={excerpt} />
                {cover_image.url !== null && (
                    <Image className="rounded-lg" alt="Hero Image" layout="responsive" priority src={cover_image.url} width={896} height={448} />
                )}
                {content && <ArticleContent content={content} />}
                {tags && <ArticleFooter tags={tags} />}
            </article>
            <aside>
                <ArticleMeta url={url} />
            </aside>
            
            <ArticleRelated posts={related} type="resources" />
            
        </Layout>
    )
}

export async function getStaticProps({ params }) {
    const data = await getResource(params.slug)
    const related = await getRelatedResources(params.slug)

    return {
        props: {
            related,
            resource: {
                ...data.resource,
            },
        },
    }
}

export async function getStaticPaths() {
    const resources = await getResourcesBySlug() || []
    return {
        paths: resources.map((resource) => `/resources/${resource.slug}`),
        fallback: false,
    }
}

export default Resource