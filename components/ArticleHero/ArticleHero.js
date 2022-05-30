import Link from 'next/link'
import Image from 'next/image'
import { toDate } from '@util/content'

const ArticleHero = ({ type, slug, title, metadata, published }) => {
    return (
        <article className="grid md:grid-cols-2 mb-8">
            <figure className="md:mr-8 mb-4 md:m-0">
                <Link href={`/${type}/${slug}`}>
                    <a className="block leading-none">
                        {metadata && metadata.cover_image.url !== null && (
                            <Image alt="Article Image" src={metadata.cover_image.url} width="896" height="512" priority />
                        )}
                    </a>
                </Link>
            </figure>
            <div>
                <Link href={`/tags/${metadata.tags[0].slug}`}>
                    <a className={`text-xs no-underline font-bold transition-colors duration-200 rounded-full py-2 px-4 tag-${metadata.tags[0].slug}`}>
                        #{metadata.tags[0].title}
                    </a>
                </Link>

                <h3 className="text-4xl max-w-xl mt-4 font-bold">
                    <Link href={`/${type}/${slug}`}>
                        <a className="transition-colors duration-200 no-underline hover:text-indigo-700 focus:text-indigo-700 font-extrabold">{title}</a>
                    </Link>
                </h3>
                <p className="leading-loose max-w-xl">{metadata.excerpt}</p>
                <p className="text-sm text-zinc-400 uppercase">{`${metadata.author} · ${toDate(published)}`}</p>
            </div>
        </article>
    )
}

export default ArticleHero