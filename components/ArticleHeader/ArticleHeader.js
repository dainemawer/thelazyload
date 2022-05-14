import { toDate } from '@util/content'
import ArticleExcerpt from '@components/ArticleExcerpt/ArticleExcerpt'
import { ClockIcon, CalendarIcon, UserCircleIcon } from '@heroicons/react/outline'

const ArticleHeader = ({ title, author, published, reading, excerpt }) => {
    return (
        <header>
            <h1 className="text-5xl mt-8 mb-4">{title}</h1>
            {excerpt && <ArticleExcerpt excerpt={excerpt} />}
            <ul className="flex list-none mt-2 p-0">
                <li className="w-1/6 flex items-center text-sm">
                    <UserCircleIcon className="w-4 h-4 mr-2" />
                    {author}
                </li>
                <li className="w-1/6 flex items-center text-sm">
                    <CalendarIcon className="w-4 h-4 mr-2" />
                    <time dateTime={published}>{toDate(published)}</time>
                </li>
                <li className="w-1/6 flex items-center text-sm">
                    <ClockIcon className="w-4 h-4 mr-2" />
                    {reading}
                </li>
            </ul>
        </header>
    )
}
export default ArticleHeader