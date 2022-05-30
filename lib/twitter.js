import crypto from 'crypto'
import OAuth from 'oauth-1.0a'

export const postToTwitter = async ({ title, type_slug, content, slug, metadata }) => {

    const request = {
        url: 'https://api.twitter.com/2/tweets',
        method: 'POST',
    }

    const getHashTags = (metadata) => {
        let tags = '';
        if (metadata.tags) {
            metadata.tags.forEach(tag => {
                tags += `#${tag.slug} `;
            });
        }
        return tags;
    }

    await fetch(request.url, {
        method: request.method,
        headers: {
            Authorization: `OAuth oauth_consumer_key="${process.env.TWITTER_API_KEY}",oauth_token="${process.env.TWITTER_ACCESS_KEY}",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1653318655",oauth_nonce="WyZbyK1J7to",oauth_version="1.0",oauth_signature="ChESk4LF%2BfTKY6Z%2BJh2R9dJ6p08%3D"`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
                { text: `${title}, ${metadata.excerpt} - https://thelazyload.com/${type_slug}/${slug} ${getHashTags
                (metadata)}`
            })
    })
        .then((response) => console.log(response))
        .catch(err => console.log(err))
}