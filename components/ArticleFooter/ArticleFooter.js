import Link from 'next/link'

const ArticleFooter = ({ tags }) => {
    return (
        <>
            {
                tags && (
                    <ul>
                        {tags.map(tag => (
                            <li key={tag.id}><Link href={`/tags/${tag.slug}`}>{tag.title}</Link></li>
                        ))}
                    </ul>
                )
            }
        </>
    )
}
export default ArticleFooter