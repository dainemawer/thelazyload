import Layout from '@components/Layout/Layout'
import Meta from '@components/Meta/Meta'
import Schema from '@components/Schema/Schema'
import { getArticles } from '@services/articles'
import { getResources } from '@services/resources'
import { getTags } from '@services/tags'
import { getTopTracks } from "@lib/spotify"
import ArticleCard from '@components/ArticleCard/ArticleCard'
import ArticleHero from '@components/ArticleHero/ArticleHero'
import Newsletter from '@components/Newsletter/Newsletter'
import dynamic from 'next/dynamic'
import { generateRSSFeed } from '@lib/rss'
import NoItems from '@components/NoItems/NoItems'

const UsefulTools = dynamic(() => import('@components/UsefulTools/UsefulTools'))
const RecentlyPlayedTracks = dynamic(() => import('@components/Spotify/RecentlyPlayedTracks'))
const PopularTags = dynamic(() => import('@components/PopularTags/PopularTags'))
const MostPopular = dynamic(() => import('@components/MostPopular/MostPopular'))

const Index = ({ articles, title, resources, tracks, tags }) => {
    const posts = []
    posts.push(...articles)
    posts.push(...resources)
    const hasPosts = posts.length > 0

    return (
        <Layout>
            <Meta page="The Lazy Load" />
            <Schema page="/" />
            <div className="text-center flex flex-col items-center justify-center mb-28">
                <span className="block mb-2 uppercase font-bold text-sm text-indigo-700">The Lazy Load</span>
                <h1 className="m-0 text-5xl max-w-2xl font-extrabold">Insights, tips and resources on web performance.</h1>
            </div>
            <div>
                {hasPosts ? (
                    <ArticleHero
                        title={posts[0].title}
                        type={posts[0].type}
                        slug={posts[0].slug}
                        metadata={posts[0].metadata}
                        published={posts[0].published_at}
                    />
                ) : (
                    <NoItems />
                )}
                <h3 className="text-2xl">Recent Articles</h3>
                <div className="grid border-t border-gray-100 pt-8 gap-8 md:grid-cols-12">
                    
                    <section className={`${hasPosts ? 'md:grid-cols-2' : ''} grid md:col-span-9 gap-4`}>
                        {hasPosts ? (
                            <>
                                {posts.slice(1).map(post => (
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
                            </>
                        ) : (
                            <NoItems />
                        )}
                        
                    </section>
                    <aside className="md:col-span-3">
                        <Newsletter />
                        <MostPopular />
                        <PopularTags tags={tags} />
                        <RecentlyPlayedTracks tracks={tracks} />
                        <UsefulTools />
                    </aside>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const articles = await getArticles() || []
    const resources = await getResources() || []

    const response = await getTopTracks();
    const { items } = await response.json();

    const tracks = items.slice(0, 5).map((track) => ({
        artist: track.artists.map((_artist) => _artist.name).join(', '),
        songUrl: track.external_urls.spotify,
        title: track.name,
        album: {
            artwork: track.album.images[0].url,
            artwork_width: track.album.images[0].width,
            artwork_height: track.album.images[0].height,
        },
    })) || null;

    const tags = await getTags() || []
    
    await generateRSSFeed();

    return {
        props: { articles, resources, tracks, tags },
    }
}

export default Index