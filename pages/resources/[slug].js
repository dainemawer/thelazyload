
import Layout from '@components/Layout/Layout'
import Image from 'next/image'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import Meta from '@components/Meta/Meta'
import { getResourcesBySlug, getResource, getRelatedResources } from '@services/resources' 
import ArticleContent from '@components/ArticleContent/ArticleContent'
import ArticleHeader from '@components/ArticleHeader/ArticleHeader'
import ArticleFooter from '@components/ArticleFooter/ArticleFooter'
import ArticleMeta from '@components/ArticleMeta/ArticleMeta'
import ArticleRelated from '@components/ArticleRelated/ArticleRelated'

const Resource = ({ resource, related }) => {
    const router = useRouter()
    const { id, published_at, slug, type, title, metadata, content } = resource
    const { cover_image, excerpt, tags, author, url } = metadata
    const readingTime = Math.ceil(resource.content.split(' ').length / 200)

    if (!router.isFallback && !slug) {
        return <ErrorPage statusCode={404} />
    }

    return (
        <Layout>
            <Meta page={title} />
            <div className="grid gap-8 grid-cols-12 max-w-5xl mx-auto">
                <div className="col-span-12">
                    {cover_image.url !== null && (
                        <Image className="rounded-lg" alt="Hero Image" layout="responsive" priority src={cover_image.url} width={896} height={448} />
                    )}
                </div>
                
                <article className="col-span-9" id={id}>
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
                <aside className="col-span-3">
                    <ArticleMeta title={title} url={url} type={type} />
                </aside>
            </div>
            <div className="max-w-5xl mx-auto">
                {related.length > 0 && <ArticleRelated posts={related} type={type} />}
            </div>
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