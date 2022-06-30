const ArticleContent = ({ content }) => {
    return (
        <div className="py-8" dangerouslySetInnerHTML={{ __html: content }} />
    )
}
export default ArticleContent