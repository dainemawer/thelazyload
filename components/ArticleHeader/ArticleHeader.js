import { toDate } from '@util/content'
import ArticleExcerpt from '@components/ArticleExcerpt/ArticleExcerpt'
import ArticleShare from '@components/ArticleShare/ArticleShare'
import { ClockIcon, CalendarIcon, UserCircleIcon } from '@heroicons/react/outline'

const ArticleHeader = ({ title, author, published, reading, excerpt, slug, image, type }) => {
    return (
        <header>
            <h1 className="text-5xl mt-4 mb-4">{title}</h1>
            {excerpt && <ArticleExcerpt excerpt={excerpt} />}
            <div className="flex justify-between">
                <ul className="flex list-none p-0 w-6/12">
                    <li className="w-2/6 p-0 flex items-center text-sm">
                        <UserCircleIcon className="w-4 h-4 mr-2" />
                        {author}
                    </li>
                    <li className="w-2/6 p-0 flex items-center text-sm">
                        <CalendarIcon className="w-4 h-4 mr-2" />
                        <time dateTime={published}>{toDate(published)}</time>
                    </li>
                    <li className="w-2/6 p-0 flex items-center text-sm">
                        <ClockIcon className="w-4 h-4 mr-2" />
                        {reading}
                    </li>
                </ul>
                {type === 'articles' && <ArticleShare title={title} url={slug} type={type} description={excerpt} screenshot={image} />}
            </div>
        </header>
    )
}
export default ArticleHeader