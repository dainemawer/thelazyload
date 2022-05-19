import Link from 'next/link'

const PopularTags = ({ tags }) => {
    return (
        <div className="flex flex-col container justify-between max-w-4xl mx-auto mb-4">
            <h3 className="m-0 text-sm uppercase mb-4">Popular Tags</h3>
            {tags && tags.map(tag => (
                <Link href={`/tags/${tag.slug}`} key={tag.id}>
                    <a className={`text-xs relative inline-block mb-2 no-underline font-bold transition-colors duration-200 rounded-full py-2 px-4 pl-8 tag-${tag.slug}`}>
                        <span className="w-2 h-2 bg-white absolute rounded-full left-4 top-[50%] -translate-y-2/4" />
                        {tag.title}
                    </a>
                </Link>
            ))}
        </div>
    )
}

export default PopularTags