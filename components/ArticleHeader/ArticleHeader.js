import { toDate } from '@util/content'

const ArticleHeader = ({ title, author, published, reading }) => {
    return (
        <header>
            <h1>{title}</h1>
            <div className="flex">
                <p className="w-1/6">{author}</p>
                <p className="w-1/6"><time dateTime={published}>{toDate(published)}</time></p>
                <p className="w-1/6">{reading}</p>
            </div>
        </header>
    )
}
export default ArticleHeader