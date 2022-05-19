import { SPOTIFY_REFRESH_TOKEN, SPOTIFY_TOKEN_ENDPOINT, SERVER_URL } from './constants';
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`

export const getAccessToken = async () => {
    const response = await fetch(SPOTIFY_TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Basic ZmYwYTMyYjljZDc1NGNiNTk5ZDI5OTQ0NDA2OTM3YWI6ODRlMWYwNDVlMGFkNDUzMmE3MDdjNGI0MGRkMDE5ZWY`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `grant_type=refresh_token&refresh_token=${SPOTIFY_REFRESH_TOKEN}`
    });

    return response.json();
}

export const getTopTracks = async () => {
    const { access_token } = await getAccessToken();

    return fetch(TOP_TRACKS_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });
};

export const getTracks = async () => {
    const url = await fetch(`${SERVER_URL}/api/spotify`);
    const response = await url.json();

    return response;
}