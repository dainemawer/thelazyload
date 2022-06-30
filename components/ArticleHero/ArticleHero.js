import Link from 'next/link'
import Image from 'next/image'
import { toDate } from '@util/content'

const ArticleHero = ({ type, slug, title, metadata, published }) => {
    const hasImage = metadata?.cover_image?.url !== null;
    const hasTags = metadata?.tags?.length > 0;
    const tagSlug = hasTags ? metadata.tags[0]?.slug : null;
    const tagTitle = hasTags ? metadata.tags[0]?.title : null;
    const author = metadata.author && `${metadata.author} ·`

    return (
        <article className="grid md:grid-cols-2 mb-8">
            <figure className="md:mr-8 mb-4 md:m-0">
                <Link href={`/${type}/${slug}`}>
                    <a className="block leading-none">
                        {hasImage ? (
                            <Image alt="Article Image" layout="responsive" src={metadata.cover_image.url} width="896" height="512" priority />
                        ) : (
                            <span className="sr-only">{title}</span>
                        )}
                    </a>
                </Link>
            </figure>
            <div>
                {hasTags && (
                    <Link href={`/tags/${tagSlug}`}>
                        <a className={`text-xs no-underline font-bold transition-colors duration-200 rounded-full py-2 px-4 tag-${tagSlug}`}>
                            {tagTitle}
                        </a>
                    </Link>
                )}
            
                <h2 className="text-2xl md:text-4xl mb-2 max-w-xl mt-4 font-bold">
                    <Link href={`/${type}/${slug}`}>
                        <a className="transition-colors duration-200 no-underline hover:text-indigo-700 focus:text-indigo-700 font-extrabold">{title}</a>
                    </Link>
                </h2>
                <p className="leading-loose mb-0 max-w-xl">{metadata.excerpt}</p>
                <p className="text-xs md:text-sm text-zinc-500 uppercase">{`${author} ${toDate(published)}`}</p>
            </div>
        </article>
    )
}

export default ArticleHero