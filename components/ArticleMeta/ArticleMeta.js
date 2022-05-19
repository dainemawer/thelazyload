import ArticleShare from '@components/ArticleShare/ArticleShare'

const ArticleMeta = ({ url }) => {
    return (
        <div className="sticky top-8 bg-white">  
            <div className="mb-8">
                <h4 className="uppercase text-sm mb-4">Resource Links</h4>
                <ul className="p-0">
                    <li className="flex items-center p-0 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <a className="text-sm ml-2 no-underline hover:text-indigo-700 focus:text-indigo-700" href="">Jeff Bines</a>
                    </li>
                    <li className="flex items-center p-0 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                        <a className="text-sm ml-2 no-underline hover:text-indigo-700 focus:text-indigo-700" href={url}>{url}</a>
                    </li>
                    <li className="flex items-center p-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <a className="text-sm ml-2 no-underline hover:text-indigo-700 focus:text-indigo-700" href="">https://github.com/resource</a>
                    </li>
                    <li className="flex items-center p-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                        </svg>
                        <a className="text-sm ml-2 no-underline hover:text-indigo-700 focus:text-indigo-700" href="">javascript</a>,
                        <a className="text-sm ml-2 no-underline hover:text-indigo-700 focus:text-indigo-700" href="">lcp</a>
                    </li>
                </ul>
            </div>
            <div className="mb-8">
                <h4 className="uppercase text-sm mb-4">Share Resource</h4>
                <ArticleShare />
            </div>
        </div>
    )
}
export default ArticleMeta