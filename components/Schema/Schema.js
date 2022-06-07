import Head from 'next/head'

const Schema = ({ page, post }) => {
    return (
        <Head>
            {page === '/' && (
                <script type="application/ld+json">
                {`
                "@context": "http://schema.org",
                "@type": "WebSite",
                "name": "The Lazy Load",
                "url": "https://thelazyload.com"`
                }
                </script>
            )}
            {page === '/articles' && <script type="application/ld+json"></script>}
            {page === '/resources' && <script type="application/ld+json"></script>}
            {page === '/contact' && <script type="application/ld+json"></script>}
            {page === '/terms' && <script type="application/ld+json"></script>}
            {page === '/privacy' && <script type="application/ld+json"></script>}
            {page === '/disclaimer' && <script type="application/ld+json"></script>}
            {page === '/tags/[slug]' && <script type="application/ld+json"></script>}
            {page === '/articles/[slug]' && (
                <script type="application/ld+json">
                    {`{"@context": "https://schema.org", 
                    "@type": "TechArticle",
                    "headline": "${post.title}",
                    "dependencies": "You must be at least a level 2 PRO to make this happen",
                    "proficiencyLevel": "Intermediate",
                    "alternativeHeadline": "${post.title}",
                    "image": "${post.metadata.cover_image.url}",
                    "author": "Daine Mawer",
                    "genre": "search engine optimization",
                    "keywords": "seo sales b2b",
                    "wordcount": "1120",
                    "publisher": "Book Publisher Inc",
                    "url": "http://www.example.com",
                    "datePublished": "2015-09-20",
                    "dateCreated": "2015-09-20",
                    "dateModified": "2015-09-20",
                    "description": "We love to do stuff to help people and stuff",
                    "articleBody": "You can paste your entire post in here, and yes it can get really really long."
                    }`}
                </script>
            )}
            {page === '/resources/[slug]' && <script type="application/ld+json"></script>}
        </Head>
    )
}

export default Schema;