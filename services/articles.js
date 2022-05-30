import { bucket } from './cosmic'

export const getArticles = async () => {
    await bucket.getObjects({
        query: {
            type: 'articles',
        },
        props: 'id,title,slug,metadata,created_at,published_at,type',
        status: 'all'
    })
    .then(response => response.objects)
    .catch(error => console.log('getArticles:', error))
}

export const getArticle = async (slug) => {
    const data = await getArticles()
    const object = await data.find((article) => article.slug === slug)
    await bucket.getObject({id: object.id})
        .then(response => {
           return {
                article: response.object
           }
        })
        .catch(error => console.log('getArticle:', error))
}

export const getRelatedArticles = async (slug) => {
    const articles = await getArticles()
    const article = await articles.find((resource) => resource.slug === slug)
    const related = await articles.filter((item) => item.id !== article.id)

    return related || []
}

export const getArticlesBySlug = async () => {
    await bucket.getObjects({
        query: {
            type: 'articles',
        },
        props: 'slug',
    }).then(response => response.objects)
        .catch(error => console.log('getArticlesBySlug:', error))
}