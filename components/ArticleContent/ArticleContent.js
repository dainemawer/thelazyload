const ArticleContent = ({ content }) => {
    return (
        <div dangerouslySetInnerHTML={{ __html: content }} />
    )
}
export default ArticleContent