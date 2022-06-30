import { toDate } from '@util/content'
import Image from 'next/image'
import ArticleExcerpt from '@components/ArticleExcerpt/ArticleExcerpt'
import ArticleShare from '@components/ArticleShare/ArticleShare'
import { ClockIcon, CalendarIcon, UserCircleIcon } from '@heroicons/react/outline'

const ArticleHeader = ({ title, author, published, reading, excerpt, slug, image, type }) => {
    return (
        <header>
            {type === 'resources' ? (
                <div className="flex pb-8">
                    {type === 'resources' && image !== null && (
                        <figure className="border m-0 mr-8 rounded-lg flex flex-shrink-0 w-52 justify-center items-center">
                            <Image className="m-0" alt="Hero Image" layout="intrinsic" src={image} width={400} height={400} />
                        </figure>
                    )}
                    <h1 className="text-5xl">{title}</h1>
                </div>
            ) : (
                <>
                    <h1 className="text-3xl lg:text-5xl mt-8 mb-4">{title}</h1>
                    {excerpt && <ArticleExcerpt excerpt={excerpt} />}
                </>
            )}
            
            <div className="flex border-t border-b py-2 flex-col md:flex-row justify-between">
                <ul className="flex list-none p-0 w-6/12">
                    {published && (
                        <li className="lg:w-2/6 p-0 flex items-center text-sm whitespace-nowrap mr-4 lg:mr-0">
                            <CalendarIcon className="w-4 h-4 mr-2" />
                            <time dateTime={published}>{toDate(published)}</time>
                        </li>
                    )}
                    {reading && (
                        <li className="lg:w-2/6 p-0 flex items-center text-sm whitespace-nowrap">
                            <ClockIcon className="w-4 h-4 mr-2" />
                            {reading}
                        </li>
                    )}
                </ul>
                {type === 'articles' && <ArticleShare title={title} url={slug} type={type} description={excerpt} screenshot={image} />}
            </div>
        </header>
    )
}
export default ArticleHeader