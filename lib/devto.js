
export const postToDevTo = async ({ title, type_slug, content, slug, metadata }) => {
    
    const getTags = (metadata) => {
        const tags = [];
        if (metadata.tags) {
            metadata.tags.forEach(tag => {
                tags.push(tag.slug);
            });
        }
        return tags;
    }

    const URL = `https://dev.to/api/articles`
    await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'api-key': process.env.DEVTO_API_KEY,
        },
        body: JSON.stringify({
            article: {
                title,
                description: metadata.excerpt,
                main_image: metadata.cover_image.url || '',
                body_markdown: content,
                canonical_url: `https://thelazyload.com/${type_slug}/${slug}`,
                published: false,
                tags: getTags(metadata),
            },
        })
    });

    return true;
}