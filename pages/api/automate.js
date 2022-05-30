import { postToDevTo } from '@lib/devto'
import { postToTwitter } from '@lib/twitter'

const handler = async (req, res) => {
    res.send({ received: true })
    const { title, slug, type_slug, metadata, content } = req.body?.data;

    if(type_slug === 'articles') {
        await postToDevTo({ title, type_slug, metadata, slug, content });
        await postToTwitter({ title, type_slug, metadata, slug, content });
    }
    
    if(type_slug === 'resources') {
        await postToTwitter({ title, type_slug, metadata, slug, content });
    }

}

export default handler