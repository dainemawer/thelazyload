import algoliasearch from 'algoliasearch/lite';

export const BUCKET_SLUG = process.env.COSMIC_BUCKET_SLUG
export const READ_KEY = process.env.COSMIC_READ_KEY
export const SITE_TITLE = 'thelazyload'
export const ALGOLIA_INDEX_NAME = 'thelazyload'
export const searchClient = algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID, process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY);
export const MAILJET_API_KEY = process.env.MAILJET_API_KEY
export const MAILJET_SECRET_KEY = process.env.MAILJET_SECRET_KEY