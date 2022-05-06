import Image from 'next/image'
import Link from 'next/link'
import { toDate } from '@util/content'

const ArticleCard = ({ id, title, type, slug, metadata, published }) => {
    const hasImage = metadata?.cover_image?.url !== null
    return (
        <article
            id={id}
            className="border-gray-100 border-2 p-4 rounded-lg mb-4"
        >
            {hasImage && (
            <Link href={`/${type}/${slug}`}>
                    <a>
                        <Image className="rounded-lg" alt="Article Image" src={metadata?.cover_image?.url} width={896} height={448} layout="responsive" priority />
                    </a>
            </Link>
            )}
            <h3>
                <Link href={`/${type}/${slug}`}>
                    {title}
                </Link>
            </h3>
            <p>{metadata.excerpt}</p>
            <small>
                {toDate(published)}
            </small>
        </article>
    )
}

export default ArticleCard