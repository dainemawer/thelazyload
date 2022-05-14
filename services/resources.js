import { bucket } from './cosmic'

export const getResources = async () => {
    const data = await bucket.getObjects({
        query: {
            type: 'resources',
        },
        props: 'id,title,slug,metadata,created_at,published_at,type',
    })

    return data.objects
}

export const getResource = async (slug) => {
    const data = await getResources()
    const object = await data.find((resource) => resource.slug === slug)
    const resource = await bucket.getObject({ id: object.id })

    return {
        resource: resource.object
    }
}

export const getRelatedResources = async (slug) => {
    const resources = await getResources()
    const resource = await resources.find((resource) => resource.slug === slug)

    const related = await resources.filter((item) => item.id !== resource.id)

    return related
}


export const getResourcesBySlug = async () => {
    const data = await bucket.getObjects({
        query: {
            type: 'resources',
        },
        props: 'slug',
    })
    return data.objects
}