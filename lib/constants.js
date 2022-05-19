import algoliasearch from 'algoliasearch/lite';

export const BUCKET_SLUG = process.env.COSMIC_BUCKET_SLUG
export const READ_KEY = process.env.COSMIC_READ_KEY
export const SITE_TITLE = 'thelazyload'
export const ALGOLIA_INDEX_NAME = 'thelazyload'
export const searchClient = algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID, process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY);
export const MAILJET_API_KEY = process.env.MAILJET_API_KEY
export const MAILJET_SECRET_KEY = process.env.MAILJET_SECRET_KEY
export const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID
export const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET
export const SPOTIFY_REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN
export const SPOTIFY_TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'
export const isDev = process.env.NODE_ENV !== 'production';
export const SERVER_URL = isDev ? 'http://localhost:3000' : 'https://thelazyload.com';