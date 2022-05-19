import { getTopTracks } from "@lib/spotify"
const handler = async (req, res) => {
    const response = await getTopTracks();
    const { items } = await response.json();

    const tracks = items.slice(0, 5).map((track) => ({
        artist: track.artists.map((_artist) => _artist.name).join(', '),
        songUrl: track.external_urls.spotify,
        title: track.name,
        album: {
            artwork: track.album.images[0].url,
            artwork_width: track.album.images[0].width,
            artwork_height: track.album.images[0].height,
        },
    }));

    return res.status(200).json(tracks);
}

export default handler