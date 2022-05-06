import { bucket } from './cosmic'

export const getTags = async () => {
    const data = await bucket.getObjects({
        query: {
            type: 'tags',
        },
        props: 'id,title,slug,metadata,created_at,published_at',
    })

    return data.objects
}

export const getTag = async (slug) => {
    const data = await getTags()
    const object = await data.find((tag) => tag.slug === slug)
    const tag = await bucket.getObject({ id: object.id })

    return tag.object
}

export const getResourcesByTag = async (slug) => {

    let objects = []
    const data = await bucket.getObjects({
        query: {
            type: 'resources',
        },
        props: 'id,title,slug,metadata,created_at,published_at',
    })

    data.objects.map(resource => {
        const tags = resource.metadata.tags
        tags.map(tag => {
            if (tag.slug === slug) {
                objects.push(resource) 
            }
        })
    })

    return objects
}

export const getArticlesByTag = async (slug) => {

    let objects = []
    const data = await bucket.getObjects({
        query: {
            type: 'articles',
        },
        props: 'id,title,slug,metadata,created_at,published_at',
    })

    data.objects.map(resource => {
        const tags = resource.metadata.tags
        tags.map(tag => {
            if (tag.slug === slug) {
                objects.push(resource)
            }
        })
    })

    return objects
}

export const getTagsBySlug = async () => {
    const data = await bucket.getObjects({
        query: {
            type: 'tags',
        },
        props: 'slug',
    })
    return data.objects
}