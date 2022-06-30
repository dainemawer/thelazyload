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
                    {`{
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "NewsMediaOrganization",
                                "@id": "${url}/#organization",
                                "name": "The Lazy Load",
                                "url": "${url}/",
                                "sameAs": [
                                    "https://twitter.com/iamdainemawer"
                                ],
                                "logo": {
                                    "@type": "ImageObject",
                                    "@id": "${url}/#logo",
                                    "inLanguage": "en-US",
                                    "url": "${url}/og-image.jpg",
                                    "contentUrl": "${url}/og-image.jpg",
                                    "width": 1200,
                                    "height": 630,
                                    "caption": "The Lazy Load"
                                },
                                "image": {
                                    "@id": "${url}/#logo"
                                },
                                "foundingDate": "2007",
                                "masthead": "${url}/about/"
                            },
                            {
                                "@type": "WebSite",
                                "@id": "${url}/#website",
                                "url": "${url}/",
                                "name": "The Lazy Load",
                                "description": "The Lazy Load is a web performance blog that attempts to shed light and provide insight on everyday performance issues.",
                                "publisher": {
                                    "@id": "${url}/#organization"
                                },
                                "potentialAction": [
                                    {
                                        "@type": "SearchAction",
                                        "target": {
                                            "@type": "EntryPoint",
                                            "urlTemplate": "${url}/?s={search_term_string}"
                                        },
                                        "query-input": "required name=search_term_string"
                                    }
                                ],
                                "inLanguage": "en-US"
                            },
                            {
                                "@type": "CollectionPage",
                                "@id": "${url}/#webpage",
                                "url": "${url}/",
                                "name": "The Lazy Load - a web performance blog that attempts to shed light and provide insight on everyday performance issues.",
                                "isPartOf": {
                                    "@id": "${url}/#website"
                                },
                                "about": {
                                    "@id": "${url}/#organization"
                                },
                                "description": "The Lazy Load is a web performance blog that attempts to shed light and provide insight on everyday performance issues.",
                                "breadcrumb": {
                                    "@id": "${url}/#breadcrumb"
                                },
                                "inLanguage": "en-US",
                                "potentialAction": [
                                    {
                                        "@type": "ReadAction",
                                        "target": [
                                            "${url}/"
                                        ]
                                    }
                                ]
                            },
                            {
                                "@type": "BreadcrumbList",
                                "@id": "${url}/#breadcrumb",
                                "itemListElement": [
                                    {
                                        "@type": "ListItem",
                                        "position": 1,
                                        "name": "Home"
                                    }
                                ]
                            }
                        ]
                    }`.replace(/\n\s+/g, '')}
                </script>
            )}

            {console.log(articles)}
            {articles.includes(page) && (
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@graph": [
                                {
                                    "@type": "NewsMediaOrganization",
                                    "@id": "${url}/#organization",
                                    "name": "The Lazy Load",
                                    "url": "${url}/",
                                    "sameAs": [
                                        "https://twitter.com/iamdainemawer"
                                    ],
                                    "logo": {
                                        "@type": "ImageObject",
                                        "@id": "${url}/#logo",
                                        "inLanguage": "en-US",
                                        "url": "https://thelazyload.com/og-image.jpg",
                                        "contentUrl": "https://thelazyload.com/og-image.jpg",
                                        "width": 350,
                                        "height": 60,
                                        "caption": "The Lazy Load"
                                    },
                                    "image": {
                                        "@id": "${url}/#logo"
                                    },
                                    "foundingDate": "2022",
                                    "masthead": "${url}/"
                                },
                                {
                                    "@type": "WebSite",
                                    "@id": "${url}/#website",
                                    "url": "${url}/",
                                    "name": "The Lazy Load",
                                    "description": "The Lazy Load is a web performance blog that attempts to shed light and provide insight on everyday performance issues.",
                                    "publisher": {
                                        "@id": "${url}/#organization"
                                    },
                                    "potentialAction": [
                                        {
                                            "@type": "SearchAction",
                                            "target": {
                                                "@type": "EntryPoint",
                                                "urlTemplate": "${url}/?s={search_term_string}"
                                            },
                                            "query-input": "required name=search_term_string"
                                        }
                                    ],
                                    "inLanguage": "en-US"
                                },
                                {
                                    "@type": "ImageObject",
                                    "@id": "${url}/#primaryimage",
                                    "inLanguage": "en-US",
                                    "url": "${image}",
                                    "contentUrl": "${image}",
                                    "width": 896,
                                    "height": 448,
                                    "caption": "${title}"
                                },
                                {
                                    "@type": "WebPage",
                                    "@id": "${url}/#webpage",
                                    "url": "${url}",
                                    "name": "${title} - The Lazy Load",
                                    "isPartOf": {
                                        "@id": "${url}/#website"
                                    },
                                    "primaryImageOfPage": {
                                        "@id": "${url}/#primaryimage"
                                    },
                                    "datePublished": "${published}",
                                    "dateModified": "${published}",
                                    "breadcrumb": {
                                        "@id": "${url}/#breadcrumb"
                                    },
                                    "inLanguage": "en-US",
                                    "potentialAction": [
                                        {
                                            "@type": "ReadAction",
                                            "target": [
                                                "${url}"
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "@type": "BreadcrumbList",
                                    "@id": "${url}/#breadcrumb",
                                    "itemListElement": [
                                        {
                                            "@type": "ListItem",
                                            "position": 1,
                                            "name": "Home",
                                            "item": "https://thelazyload.com/"
                                        },
                                        {
                                            "@type": "ListItem",
                                            "position": 2,
                                            "name": "${title}"
                                        }
                                    ]
                                },
                                {
                                    "@type": [
                                        "Article",
                                        "NewsArticle"
                                    ],
                                    "@id": "${url}/#article",
                                    "isPartOf": {
                                        "@id": "${url}/#webpage"
                                    },
                                    "author": {
                                        "@id": "${url}/#/schema/person/7d31fbd1bce02c8aba2e62c876a08a7c"
                                    },
                                    "headline": "${title}",
                                    "datePublished": "${published}",
                                    "dateModified": "${published}",
                                    "mainEntityOfPage": {
                                        "@id": "${url}/#webpage"
                                    },
                                    "wordCount": 315,
                                    "commentCount": 0,
                                    "publisher": {
                                        "@id": "${url}/#organization"
                                    },
                                    "image": {
                                        "@id": "${url}/#primaryimage"
                                    },
                                    "thumbnailUrl": "${image}",
                                    "articleSection": [
                                        "News"
                                    ],
                                    "inLanguage": "en-US",
                                    "potentialAction": [
                                        {
                                            "@type": "CommentAction",
                                            "name": "Comment",
                                            "target": [
                                                "${url}/#respond"
                                            ]
                                        }
                                    ],
                                    "copyrightYear": "2022",
                                    "copyrightHolder": {
                                        "@id": "https://thelazyload.com/#organization"
                                    }
                                },
                                {
                                    "@type": "Person",
                                    "@id": "${url}/#/schema/person/7d31fbd1bce02c8aba2e62c876a08a7c",
                                    "name": "Daine Mawer",
                                    "image": {
                                        "@type": "ImageObject",
                                        "@id": "${url}/#personlogo",
                                        "inLanguage": "en-US",
                                        "url": "https://pbs.twimg.com/profile_images/1496012556145680385/sZxWdamh_400x400.jpg",
                                        "contentUrl": "https://pbs.twimg.com/profile_images/1496012556145680385/sZxWdamh_400x400.jpg",
                                        "caption": "Daine Mawer"
                                    },
                                    "url": "${url}"
                                }
                            ]
                        }`.replace(/\n\s+/g, '') }
                </script>
            )}
        </Head>
    )
}

export default Schema;