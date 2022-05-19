
export const postToDevTo = async ({ title }) => {
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
                body_markdown: 'Test',
                tags: ['test'],
            },
        })
    });

    return true;
}