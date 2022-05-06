import { bucket } from './cosmic'

export const getArticles = async () => {
    const data = await bucket.getObjects({
        query: {
            type: 'articles',
        },
        props: 'id,title,slug,metadata,created_at,published_at',
        status: 'all'
    })
    return data.objects
}

export const getArticle = async (slug) => {
    const data = await getArticles()
    const object = await data.find((article) => article.slug === slug)
    const article = await bucket.getObject({id: object.id})

    return {
        article: article.object
    }
}

export const getRelatedArticles = async (slug) => {
    const articles = await getArticles()
    const article = await articles.find((resource) => resource.slug === slug)

    const related = await articles.filter((item) => item.id !== article.id)

    return related
}

export const getArticlesBySlug = async () => {
    const data = await bucket.getObjects({
        query: {
            type: 'articles',
        },
        props: 'slug',
    })
    return data.objects
}