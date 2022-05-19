import React from 'react'
import * as fs from 'fs'
import { getArticles } from '@services/articles'
import { getResources } from '@services/resources'

const staticPaths = fs
    .readdirSync("pages")
    .filter((staticPage) => {
        return ![
            "api",
            "_app.js",
            "_document.js",
            "articles.js",
            "resources.js",
            "404.js",
            "500.js",
            "sitemap.xml.js",
        ].includes(staticPage);
    })
    .map((staticPagePath) => {
        if (staticPagePath === 'index.js') {
            return 'https://thelazyload.com/'
        }

        return `https://thelazyload.com/${staticPagePath.replace('.js', '')
}`;
    });



const Sitemap = () => {
    return null
}

export const getServerSideProps = async ({ res }) => {
    const BASE_URL = 'https://thelazyload.com';

    const articles = await getArticles() || []
    const resources = await getResources() || []

    const dynamicPaths = [...articles, ...resources].map(item => {
        return `https://thelazyload.com/${item.type}/${item.slug}`;
    })

    const paths = [...staticPaths, ...dynamicPaths]

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${paths.map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        }).join("")}
    </urlset>
    `;

    res.setHeader('Content-Type', 'text/xml')
    res.write(sitemap)
    res.end();

    return {
        props: {}
    }

}

export default Sitemap