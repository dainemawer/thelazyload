import Layout from '@components/Layout/Layout'
import Meta from '@components/Meta/Meta'
import { getArticles } from '@services/articles'
import { getResources } from '@services/resources'
import ArticleCard from '@components/ArticleCard/ArticleCard'
import Link from 'next/link'
import Image from 'next/image'
import { toDate } from '@util/content'
import Newsletter from '@components/Newsletter/Newsletter'
import MostPopular from '@components/MostPopular/MostPopular'
import PopularTags from '@components/PopularTags/PopularTags'
import PlayListOfTheMonth from '@components/Spotify/PlaylistOfTheMonth'
import UsefulTools from '@components/UsefulTools/UsefulTools'

const Index = ({ articles, resources }) => {
    const posts = []
    posts.push(...articles)
    posts.push(...resources)
    return (
        <Layout>
            <Meta page="The Lazy Load" />
            <div className="text-center flex flex-col items-center justify-center mb-28">
                <span className="block mb-2 uppercase font-bold text-sm text-indigo-700">The Lazy Load</span>
                <h1 className="m-0 text-5xl max-w-2xl font-extrabold">Insights, tips and resources on web performance.</h1>
            </div>
            <div>
                <article className="grid md:grid-cols-2 mb-8">
                    <figure className="md:mr-8 mb-4 md:m-0">
                        <Link href={`/${posts[0].type}/${posts[0].slug}`}>
                            <a className="block leading-none">
                                <Image alt="Article Image" src={posts[0].metadata.cover_image.url} width="896" height="512" priority />
                            </a>
                        </Link>
                    </figure>
                    <div>
                        <Link href={`/tags/${posts[0].metadata.tags[0].slug}`}>
                            <a className={`text-xs no-underline font-bold transition-colors duration-200 rounded-full py-2 px-4 tag-${posts[0].metadata.tags[0].slug}`}>
                                #{posts[0].metadata.tags[0].title}
                            </a>
                        </Link>
                       
                        <h3 className="text-4xl max-w-xl mt-4 font-bold">
                            <Link href={`/${posts[0].type}/${posts[0].slug}`}>
                                <a className="transition-colors duration-200 no-underline hover:text-indigo-700 focus:text-indigo-700 font-extrabold">{posts[0].title}</a>
                            </Link>
                        </h3>
                        <p className="leading-loose max-w-xl">{posts[0].metadata.excerpt}</p>
                        <p className="text-sm text-zinc-400 uppercase">{`${posts[0].metadata.author} · ${toDate(posts[0].published_at)}`}</p>
                    </div>
                </article>
                <h3 className="text-2xl">Recent Articles</h3>
                <div className="grid border-t border-gray-100 pt-8 gap-8 md:grid-cols-12">
                    
                    <section className="grid md:col-span-9 md:grid-cols-2 gap-4">
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
                    </section>
                    <aside className="md:col-span-3">
                        <Newsletter />
                        <MostPopular />
                        <PopularTags />
                        <PlayListOfTheMonth />
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

    return {
        props: { articles, resources },
    }
}

export default Index