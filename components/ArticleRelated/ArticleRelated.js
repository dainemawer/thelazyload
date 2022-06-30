import ArticleCard from '@components/ArticleCard/ArticleCard'
const ArticleRelated = ({ posts, type }) => {
    return (
        <>
            <h3>You May Also Be Interested In</h3>
            <div className="flex overflow-x-scroll -ml-2 no-scrollbar scroll-smooth">
                {posts && posts.map(post => (
                    <div key={post.id} className="inline-block px-2">
                        <div className="w-72 max-w-xs overflow-hidden">
                            <ArticleCard
                                id={post.id}
                                slug={post.slug}
                                published={post.published_at}
                                type={post.type}
                                title={post.title}
                                metadata={post.metadata}
                                variation="related"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default ArticleRelated