import { bucket } from './cosmic'

export const getResources = async () => {
    await bucket.getObjects({
        query: {
            type: 'resources',
        },
        props: 'id,title,slug,metadata,created_at,published_at,type',
    }).then(response => response.objects)
        .catch(error => console.log('getResources:',error))
}

export const getResource = async (slug) => {
    const data = await getResources()
    const object = await data.find((resource) => resource.slug === slug)
    await bucket.getObject({ id: object.id })
        .then(response => {
            return {
                resource: response.object
            }
        })
        .catch(error => console.log('getResource:', error))
}

export const getRelatedResources = async (slug) => {
    const resources = await getResources()
    const resource = await resources.find((resource) => resource.slug === slug)
    const related = await resources.filter((item) => item.id !== resource.id)

    return related || []
}


export const getResourcesBySlug = async () => {
    await bucket.getObjects({
        query: {
            type: 'resources',
        },
        props: 'slug',
    }).then(response => response.objects)
        .catch(error => console.log('getResourcesBySlug:', error));
}

export const getResourceOpenGraphImage = async (slug) => {
    const data = await fetch(`http://localhost:3000/api/opengraph?url=${slug}`, {
        method: 'POST',
    });

    return data;
}