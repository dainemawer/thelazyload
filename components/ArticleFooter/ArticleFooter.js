import Link from 'next/link'

const ArticleFooter = ({ tags }) => {
    return (
        <>
            {
                tags && (
                    <div className="border-t border-gray-100 py-4">
                        <ul className="flex list-none items-center p-0">
                            <li className="p-0 text-xs text-zinc-400 mr-2 uppercase font-bold">Tags:</li>
                            {tags.map(tag => (
                                <li className="p-0 text-sm" key={tag.id}><Link href={`/tags/${tag.slug}`}><a className={`text-xs font-bold transition-colors duration-200 rounded-full py-2 px-4 no-underline tag-${tag.slug}`}>{tag.title}</a></Link></li>
                            ))}
                        </ul>
                    </div>
                   
                )
            }
        </>
    )
}
export default ArticleFooter