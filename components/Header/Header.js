import Link from 'next/link';
import Logo from '@components/Logo/Logo';
import { autocomplete, getAlgoliaResults } from '@algolia/autocomplete-js';
import React, { createElement, Fragment, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { searchClient } from '@lib/constants';
import Image from 'next/image';

export function Autocomplete(props) {
    const containerRef = useRef(null);
    const panelRootRef = useRef(null);
    const rootRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) {
            return undefined;
        }

        const search = autocomplete({
            container: containerRef.current,
            renderer: { createElement, Fragment, render: () => { } },
            render({ children }, root) {
                if (!panelRootRef.current || rootRef.current !== root) {
                    rootRef.current = root;

                    panelRootRef.current?.unmount();
                    panelRootRef.current = createRoot(root);
                }

                panelRootRef.current.render(children);
            },
            ...props,
        });

        return () => {
            search.destroy();
        };
    }, [props]);

    return <div ref={containerRef} />;
}

export function ArticleItem({ hit, components }) {
    return (
        <Link href={`/articles/${hit.slug}`}>
            <a className="aa-ItemLink">
                <div className="aa-ItemContent border border-gray-100 p-2 mb-2 flex justify-start">
                    {hit.cover_image && <Image src={hit?.cover_image} objectFit="cover" width={100} height={100} alt={hit.title} />}
                    <div className="aa-ItemTitle ml-4">
                        <h3 className="font-bold mb-2"><components.Highlight hit={hit} attribute="title" /></h3>
                        {hit.tags.length > 0 && <span className={`text-xs inline-block float-right font-bold text-white no-underline transition-colors duration-200 rounded-full py-1 px-2 tag-${hit.tags[0].toLowerCase()}`}>#{hit.tags[0]}</span>}
                        {hit.excerpt && <div className="text-xs">{hit.excerpt}</div>}
                    </div>
                </div>
            </a>
        </Link>
    );
}

export function ResourceItem({ hit, components }) {
    return (
        <Link href={`/resources/${hit.slug}`}>
            <a className="aa-ItemLink">
                <div className="aa-ItemContent border border-gray-100 p-2 mb-2 flex justify-start">
                    {hit.cover_image && <Image src={hit?.cover_image} objectFit="cover" width={100} height={100} alt={hit.title} />}
                    <div className="aa-ItemTitle">
                        <h3 className="font-bold mb-2"><components.Highlight hit={hit} attribute="title" /></h3>
                        {hit.tags.length > 0 && <span className={`text-xs inline-block float-right text-white no-underline transition-colors duration-200 rounded-full font-bold py-1 px-2 tag-${hit.tags[0].toLowerCase()}`}>#{hit.tags[0]}</span>}
                        {hit.excerpt && <div className="text-xs">{hit.excerpt}</div>}
                    </div>
                    
                </div>
            </a>
        </Link>
    );
}


const Header = () => {
    return (
        <header className="flex container justify-between items-center max-w-7xl mx-auto p-4">
            <div className="flex items-center">
                <Link href="/">
                    <a className="block mr-6 pt-[4px]">
                        <Logo height="24" width="120" />
                    </a>
                </Link>
                <nav>
                    <ul className="flex">
                        <li>
                            <Link href="/articles"><a className="text-sm transition-colors duration-200 text-zinc-600 hover:bg-indigo-100 rounded-full  hover:text-indigo-700 focus:text-indigo-700 px-4 py-2">Articles</a></Link>
                        </li>
                        <li>
                            <Link href="/resources"><a className="text-sm transition-colors duration-200 text-zinc-600 hover:bg-indigo-100 rounded-full hover:text-indigo-700 focus:text-indigo-700 px-4 py-2">Resources</a></Link>
                        </li>
                        <li>
                            <Link href="/contact"><a className="text-sm transition-colors duration-200 text-zinc-600 hover:bg-indigo-100 rounded-full hover:text-indigo-700 focus:text-indigo-700 px-4 py-2">Contact</a></Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="flex items-center">
                <nav className="flex mr-4">
                    <ul className="flex">
                        <li>
                            <Link href="/shop"><a className="text-sm transition-colors duration-200 text-zinc-600 hover:text-indigo-700 rounded-full hover:bg-indigo-100 focus:text-indigo-700 px-4 py-2">Shop</a></Link>
                        </li>
                        <li>
                            <Link href="/uses"><a className="text-sm transition-colors duration-200 text-zinc-600 hover:text-indigo-700 rounded-full hover:bg-indigo-100 focus:text-indigo-700 px-4 py-2">Uses</a></Link>
                        </li>
                    </ul>
                </nav>
                <Autocomplete
                    placeholder="Search"
                    openOnFocus={false}
                    getSources={({ query }) => [
                        {
                            sourceId: 'articles',
                            getItems() {
                                return getAlgoliaResults({
                                    searchClient,
                                    queries: [
                                        {
                                            indexName: 'articles',
                                            query,
                                        },
                                    ],
                                });
                            },
                            templates: {
                                item({ item, components }) {
                                    return <ArticleItem hit={item} components={components} />;
                                },
                            },
                        },
                        {
                            sourceId: 'resources',
                            getItems() {
                                return getAlgoliaResults({
                                    searchClient,
                                    queries: [
                                        {
                                            indexName: 'resources',
                                            query,
                                        },
                                    ],
                                });
                            },
                            templates: {
                                item({ item, components }) {
                                    return <ResourceItem hit={item} components={components} />;
                                },
                            },
                        },
                    ]}
                />
            </div>
        </header>
    )
}
export default Header