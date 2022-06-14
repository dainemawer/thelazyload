import { bucket } from './cosmic'

export const getTags = async () => {
    return await bucket.getObjects({
        query: {
            type: 'tags',
        },
        props: 'id,title,slug,metadata,created_at,published_at',
    }).then(response => response.objects)
        .catch(error => console.log(error))
}

export const getTag = async (slug) => {
    const data = await getTags()
    const object = await data.find((tag) => tag.slug === slug)
    
    return await bucket.getObject({ id: object.id })
        .then(response => response.object)
        .catch(error => console.log(error))
}

export const getResourcesByTag = async (slug) => {

    let objects = []
    await bucket.getObjects({
        query: {
            type: 'resources',
        },
        props: 'id,title,slug,metadata,created_at,published_at',
    })
        .then(response => {
            response.objects.map(resource => {
                const tags = resource.metadata.tags
                tags.map(tag => {
                    if (tag.slug === slug) {
                        objects.push(resource)
                    }
                })
            })
        })
        .catch(error => console.log(error))

    return objects || []
}

export const getArticlesByTag = async (slug) => {

    let objects = []
    await bucket.getObjects({
        query: {
            type: 'articles',
        },
        props: 'id,title,slug,metadata,created_at,published_at',
    }).then(response => {
        response.objects.map(resource => {
            const tags = resource.metadata.tags
            tags.map(tag => {
                if (tag.slug === slug) {
                    objects.push(resource)
                }
            })
        })
    })
    .catch(error => console.log(error))

    return objects || []
}

export const getTagsBySlug = async () => {
    return await bucket.getObjects({
        query: {
            type: 'tags',
        },
        props: 'slug',
    }).then(response => response.objects)
        .catch(error => console.log(error))
}