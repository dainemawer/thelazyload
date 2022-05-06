import Link from 'next/link'
const ArticleRelated = ({ posts, type }) => {
    return (
        <>
        <h3>Related</h3>
            <div className="flex">
                {posts && posts.map(post => (
                    <article className="border-gray-100 border rounded-lg p-4 w-1/3 mr-4 last:mr-0" key={post.id} id={post.id}>
                        <h4>
                            <Link href={`/${type}/${post.slug}`}>{post.title}</Link>
                        </h4>
                    </article>
                ))}
            </div>
        </>
    )
}
export default ArticleRelated