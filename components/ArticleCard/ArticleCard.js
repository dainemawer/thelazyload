import Image from 'next/image'
import Link from 'next/link'
import { toDate } from '@util/content'

const ArticleCard = ({ id, title, type, slug, metadata, published, variation }) => {
    const hasImage = metadata?.cover_image?.url !== null;
    const hasTags = metadata?.tags?.length > 0;
    const tagSlug = hasTags ? metadata.tags[0]?.slug : null;
    const tagTitle = hasTags ? metadata.tags[0]?.title : null;
    const author = metadata.author && `${metadata.author} ·`
    
    return (
        <article
            id={id}
            className="border-gray-100 border-2 p-4"
        >
            <Link href={`/${type}/${slug}`}>
                <a className="block mb-4">
                    <Image alt="Article Image" src={hasImage ? metadata.cover_image.url : '/default.jpg'} width={540} height={270} layout="responsive" loading="lazy" />
                </a>
            </Link>
            <Link href={`/tags/${tagSlug}`}>
                <a className={`text-xs no-underline font-bold transition-colors duration-200 rounded-full py-2 px-4 tag-${tagSlug}`}>
                    {tagTitle}
                </a>
            </Link>
            <h3 className="mt-4 text-xl lg:text-2xl max-w-xl">
                <Link href={`/${type}/${slug}`}>
                    <a className="transition-colors duration-200 no-underline hover:text-indigo-700 focus:text-indigo-700 font-bold">{title}</a>
                </Link>
            </h3>
            {variation !== 'related' && <p className="line-clamp-3 lg:leading-loose max-w-xl">{metadata.excerpt}</p>}
            <p className="text-xs md:text-sm text-zinc-500 uppercase">{`${author} ${toDate(published)}`}</p>
        </article>
    )
}

export default ArticleCard