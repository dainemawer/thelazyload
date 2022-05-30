import { fetch } from 'fetch-opengraph';

const handler = async (req, res) => {
    const data = await fetch(req.query.url)
    return res.status(200).json(data)
}

export default handler