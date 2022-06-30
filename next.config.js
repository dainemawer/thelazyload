module.exports = {
    images: {
        domains: ['cdn.cosmicjs.com', 'imgix.cosmicjs.com', 'i.scdn.co', 'pbs.twimg.com', 'repository-images.githubusercontent.com'],
    },
    env: {
        MAILJET_API_KEY: process.env.MAILJET_API_KEY,
        MAILJET_SECRET_KEY: process.env.MAILJET_SECRET_KEY,
    }
}