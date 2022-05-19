import { bucket } from './cosmic'

export const getPages = async () => {
    const data = await bucket.getObjects({
        query: {
            type: 'pages',
        },
        props: 'id,title,slug',
        status: 'all'
    })
    return data.objects
}

export const getPage = async (slug) => {
    const data = await getPages()
    const object = await data.find((article) => article.slug === slug)
    const page = await bucket.getObject({ id: object.id })

    return page.object
}

export const getPagesBySlug = async () => {
    const data = await bucket.getObjects({
        query: {
            type: 'pages',
        },
        props: 'slug',
    })
    return data.objects
}