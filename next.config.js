module.exports = {
    images: {
        domains: ['cdn.cosmicjs.com', 'imgix.cosmicjs.com'],
    },
    env: {
        MAILJET_API_KEY: process.env.MAILJET_API_KEY,
        MAILJET_SECRET_KEY: process.env.MAILJET_SECRET_KEY,
    }
}