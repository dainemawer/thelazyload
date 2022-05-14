
const ArticleShare = ({ url, title, description, image }) => {

    const query = `url=${url}&title=${title}&description=${description}&screenshot=${image}&pubid=${process.env.NEXT_PUBLIC_ADDTHIS_PUBLISHER_ID}`

    return (
        <ul className="flex items-center justify-start">
            <li className="mr-8">
                <a target="_blank" rel="noreferrer" href={`http://api.addthis.com/oexchange/0.8/forward/email/offer?${query}`} className="text-sm">Email</a>
            </li>
            <li className="mr-8">
                <a target="_blank" rel="noreferrer" href={`http://api.addthis.com/oexchange/0.8/forward/facebook/offer?${query}`} className="text-sm">Facebook</a>
            </li>
            <li className="mr-8">
                <a target="_blank" rel="noreferrer" href={`http://api.addthis.com/oexchange/0.8/forward/linkedin/offer?${query}`} className="text-sm">LinkedIn</a>
            </li>
            <li className="mr-8">
                <a target="_blank" rel="noreferrer" href={`http://api.addthis.com/oexchange/0.8/forward/twitter/offer?${query}`} className="text-sm">Twitter</a>
            </li>
            <li className="mr-8">
                <a target="_blank" rel="noreferrer" href={`http://api.addthis.com/oexchange/0.8/forward/whatsapp/offer?${query}`} className="text-sm">WhatsApp</a>
            </li>
        </ul>
    )
}

export default ArticleShare