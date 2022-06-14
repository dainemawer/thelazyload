import Head from 'next/head'

const Schema = ({ title, url, page, published, image, excerpt, wordCount }) => {

    const pages = [
        '/',
        '/articles',
        '/resources',
        '/contact',
        '/terms',
        '/privacy',
        '/disclaimer',
    ];

    const articles = [
        '/tags/[slug]',
        '/articles/[slug]',
        '/resources/[slug]',
    ];

    return (
        <Head>
            {pages.includes(page) && (
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@graph": [
                                {
                                    "@type": "Website",
                                    "name": "The Lazy Load",
                                    "sameAs": [
                                        "https://twitter.com/iamdainemawer"
                                    ],
                                    "logo": {
                                        "@type": "ImageObject",
                                        "@id": "${url}/#logo",
                                        "inLanguage": "en-US",
                                        "url": "${url}/og-image.png",
                                        "width": "1200",
                                        "height": "630",
                                        "caption": "The Lazy Load"
                                    },
                                    "image": {
                                        "@id": "${url}/#logo"
                                    },
                                    "foundingDate": "2022",
                                    "masthead": "https://thelazyload.com/contact",
                                },
                                {
                                    "@type": "WebSite",
                                    "@id": "${url}/#website",
                                    "url": "${url}",
                                    "name": "The Lazy Load",
                                    "description": "The Lazy Load is a web performance blog that attempts to shed light and provide insight on everyday performance issues.",
                                    "publisher": {
                                        "@id": "${url}/#organization"
                                    },
                                     "potentialAction": [
                                        {
                                            "@type": "SearchAction",
                                            "target": {
                                                "@type":"EntryPoint",
                                                "urlTemplate":"https://thelazyload.com/?s={search_term_string}"
                                            },
                                            "query-input":"required name=search_term_string"
                                        }
                                    ],
                                    "inLanguage": "en-US",
                                },
                                {
                                    "@type":"CollectionPage",
                                    "@id":"${url}/#webpage",
                                    "url":"${url}",
                                    "name":"The Lazy Load",
                                    "isPartOf":{
                                        "@id":"${url}/#website"
                                    },
                                    "about":{
                                        "@id":"${url}/#organization"
                                    },
                                    "description": "The Lazy Load is a web performance blog that attempts to shed light and provide insight on everyday performance issues.",
                                    "breadcrumb":{
                                        "@id":"${url}/#breadcrumb"
                                    },
                                    "inLanguage":"en-US",
                                    "potentialAction": [
                                        {
                                            "@type":"ReadAction",
                                            "target":[
                                                "${url}"
                                            ]
                                        }
                                    ]
                                }
                            ],
                        }
                    `.replace(/\s+/g, '')}
                </script>
            )}

            {articles.includes(page) && (
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@graph": [
                                {
                                    "@type": "NewsMediaOrganization",
                                    "@id":"https://thelazyload.com/#organization",
                                    "name": "The Lazy Load",
                                    "url": "${url}",
                                    "sameAs": [
                                        "https://twitter.com/iamdainemawer"
                                    ],
                                    "logo": {
                                        "@type": "ImageObject",
                                        "@id": "${url}/#logo",
                                        "inLanguage": "en-US",
                                        "url": "${url}/og-image.png",
                                        "width": "1200",
                                        "height": "630"
                                        "caption": "The Lazy Load"
                                    },
                                    "image": {
                                        "@id": "${url}/#logo"
                                    },
                                    "foundingDate": "2022",
                                    "masthead": "https://thelazyload.com/contact",
                                },
                                {
                                    "@type": "WebSite",
                                    "@id": "${url}/#website",
                                    "url": "${url}",
                                    "name": "The Lazy Load",
                                    "description": "The Lazy Load is a web performance blog that attempts to shed light and provide insight on everyday performance issues.",
                                    "publisher": {
                                        "@id": "${url}/#organization"
                                    },
                                     "potentialAction": [
                                        {
                                            "@type": "SearchAction",
                                            "target": {
                                                "@type":"EntryPoint",
                                                "urlTemplate":"https://thelazyload.com/?s={search_term_string}"
                                            },
                                            "query-input":"required name=search_term_string"
                                        }
                                    ],
                                    "inLanguage": "en-US",
                                },
                                {
                                    "@type":"ImageObject",
                                    "@id":"${url}/#primaryimage",
                                    "inLanguage":"en-US",
                                    "url":"${image}",
                                    "contentUrl":"${image}",
                                    "width": 896,
                                    "height": 448,
                                    "caption":"${title}"
                                },
                                {
                                    "@type":"WebPage",
                                    "@id":"${url}/#webpage",
                                    "url":"${url}",
                                    "name":"${title}",
                                    "isPartOf":{
                                        "@id":"https://thelazyload.com/#website"
                                    },
                                    "primaryImageOfPage":{
                                        "@id":"${url}/#primaryimage"
                                    },
                                    "datePublished":"${published}",
                                    "dateModified":"2022-06-07T13:22:09+00:00",
                                    "description":"${url}",
                                    "breadcrumb":{
                                        "@id":"${url}/#breadcrumb"
                                    },
                                    "inLanguage":"en-US",
                                    "potentialAction":[
                                        {
                                        "@type":"ReadAction",
                                        "target":[
                                            "${url}"
                                        ]
                                        }
                                    ]
                                },
                                {
                                    "@type":[
                                        "Article",
                                        "NewsArticle"
                                    ],
                                    "@id":"${url}/#article",
                                    "isPartOf":{
                                        "@id":"${url}/#webpage"
                                    },
                                    "author":{
                                        "@id":"https://thelazyload.com/#/schema/person/0af9ea856982f6aea2cbc90d47800284"
                                    },
                                    "headline":"${title}",
                                    "datePublished":"${published}",
                                    "dateModified":"2022-06-07T13:22:09+00:00",
                                    "mainEntityOfPage":{
                                        "@id":"${url}/#webpage"
                                    },
                                    "wordCount": ${wordCount},
                                    "commentCount":0,
                                    "publisher":{
                                        "@id":"https://thelazyload.com/#organization"
                                    },
                                    "image":{
                                        "@id":"${url}/#primaryimage"
                                    },
                                    "thumbnailUrl":"${image}",
                                    "articleSection":[
                                        "News"
                                    ],
                                    "inLanguage":"en-US",
                                    "potentialAction":[
                                        {
                                        "@type":"CommentAction",
                                        "name":"Comment",
                                        "target":[
                                            "${url}/#respond"
                                        ]
                                        }
                                    ],
                                    "copyrightYear":"2022",
                                    "copyrightHolder":{
                                        "@id":"https://thelazyload.com/#organization"
                                    },
                                },
                                {
                                    "@type":"Person",
                                    "@id":"https://thelazyload.com/#/schema/person/0af9ea856982f6aea2cbc90d47800284",
                                    "name":"Michael Potuck",
                                    "image":{
                                        "@type":"ImageObject",
                                        "@id":"https://9to5mac.com/#personlogo",
                                        "inLanguage":"en-US",
                                        "url":"https://secure.gravatar.com/avatar/617382fa123c4948681a44755a0146ca?s=96&d=mm&r=r",
                                        "contentUrl":"https://secure.gravatar.com/avatar/617382fa123c4948681a44755a0146ca?s=96&d=mm&r=r",
                                        "caption":"Michael Potuck"
                                    },
                                    "description":"Michael is an editor for 9to5Mac. Since joining in 2016 he has written more than 3,000 articles including breaking news, reviews, and detailed comparisons and tutorials. Michael has also appeared on the 9to5Mac Watch Time podcast with Zac Hall and TWiT's Tech News Weekly. Reach out to Michael with tips, deliberations, typos, or feedback at potuck@9to5mac.com",
                                    "sameAs":[
                                        "https://twitter.com/iamdainemawer"
                                    ],
                                    "url":"https://9to5mac.com/author/michaelpotuck/"
                                }
                            ],
                        }
                    `.replace(/\s+/g, '')}
                </script>
            )}
        </Head>
    )
}

export default Schema;