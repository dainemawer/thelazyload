import { Feed } from 'feed'
import fs from 'fs'
import { getArticles } from '@services/articles'
import { getResources } from '@services/resources'

export const generateRSSFeed = async () => {
    const posts = []
    const articles = await getArticles() || []
    const resources = await getResources() || []

    if(!articles && !resources) {
        return;
    }

    posts.push(...articles)
    posts.push(...resources)

    const BASE_URL = 'https://thelazyload.com';
    const DATE = new Date();
    const AUTHOR = {
        name: 'The Lazy Load',
        email: 'hello@thelazyload.com',
        link: 'https://twitter.com/iamdainemawer'
    }

    const feed = new Feed({
        title: "The lazy Load",
        description: "The Lazy Load is a web performance blog that attempts to shed light and provide insight on everyday performance issues.",
        id: BASE_URL,
        link: BASE_URL,
        image: `${BASE_URL}/logo.svg`,
        favicon: `${BASE_URL}/favicon.png`,
        copyright: `All rights reserved ${DATE.getFullYear()}, The Lazy Load`,
        updated: DATE,
        generator: "Feed for Node.js",
        feedLinks: {
            rss2: `${BASE_URL}/rss/feed.xml`,
            json: `${BASE_URL}/rss/feed.json`,
            atom: `${BASE_URL}/rss/atom.xml`,
        },
        author: AUTHOR,
    });

    posts.forEach((post) => {
        const url = `${BASE_URL}/${post.type}/${post.slug}`;
        feed.addItem({
            title: post.title,
            id: url,
            link: url,
            description: post.metadata.excerpt,
            content: post.content,
            author: [AUTHOR],
            contributor: [AUTHOR],
            date: new Date(post.published_at),
        });
    });

    fs.mkdirSync("public/rss", { recursive: true });
    fs.writeFileSync("public/rss/feed.xml", feed.rss2());
    fs.writeFileSync("public/rss/atom.xml", feed.atom1());
    fs.writeFileSync("public/rss/feed.json", feed.json1());
}