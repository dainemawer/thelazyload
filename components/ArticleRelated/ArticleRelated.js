import ArticleCard from '@components/ArticleCard/ArticleCard'
const ArticleRelated = ({ posts, type }) => {
    return (
        <>
            <h3>You May Also Be Interested In</h3>
            <div className="grid gap-4 grid-cols-3">
                {posts && posts.map(post => (
                    <ArticleCard
                        key={post.id}
                        id={post.id}
                        slug={post.slug}
                        published={post.published_at}
                        type={post.type}
                        title={post.title}
                        metadata={post.metadata}
                    />
                ))}
            </div>
        </>
    )
}
export default ArticleRelated