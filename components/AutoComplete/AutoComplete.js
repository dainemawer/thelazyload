import {
    createAutocomplete,
} from '@algolia/autocomplete-core';
import { getAlgoliaResults } from '@algolia/autocomplete-preset-algolia';
import { useState, useMemo } from 'react';
import { searchClient } from '@lib/constants'; 

export function AutoComplete(props) {
    const [autocompleteState, setAutocompleteState] = useState({
        collections: [],
        completion: null,
        context: {},
        isOpen: false,
        query: '',
        activeItemId: null,
        status: 'idle',
    });

    const autocomplete = useMemo(
        () =>
            createAutocomplete({
            onStateChange({ state }) {
                setAutocompleteState(state);
            },
            id: 'autocomplete',
            placeholder: 'Search',
            openOnFocus: false,
            getSources() {
                return [
                    {
                        sourceId: 'articles',
                        getItems({ query }) {
                            return getAlgoliaResults({
                                searchClient,
                                queries: [
                                    {
                                        indexName: 'articles',
                                        query,
                                        params: {
                                            highlightPreTag: '<mark>',
                                            highlightPostTag: '</mark>',
                                            hitsPerPage: 5,
                                        },
                                    },
                                ],
                            });
                        },
                    },
                    {
                        sourceId: 'resources',
                        getItems({ query }) {
                            return getAlgoliaResults({
                                searchClient,
                                queries: [
                                    {
                                        indexName: 'resources',
                                        query,
                                        params: {
                                            highlightPreTag: '<mark>',
                                            highlightPostTag: '</mark>',
                                            hitsPerPage: 5,
                                        },
                                    },
                                ],
                            });
                        },
                    },
                ];
            },
            ...props,
        }),
        [props]
    );

    return (
        <div className="aa-Autocomplete" {...autocomplete.getRootProps({})}>
            <input className="aa-Input" {...autocomplete.getInputProps({})} />
            <div className="aa-Panel" {...autocomplete.getPanelProps({})}>
                {autocompleteState.isOpen &&
                    autocompleteState.collections.map((collection, index) => {
                        const { source, items } = collection;

                        return (
                            <div key={`source-${index}`} className="aa-Source">
                                {items.length > 0 && (
                                    <ul className="aa-List" {...autocomplete.getListProps()}>
                                        {items.map((item) => (
                                            <li
                                                key={item.objectID}
                                                className="aa-Item"
                                                {...autocomplete.getItemProps({
                                                    item,
                                                    source,
                                                })}
                                            >
                                                {item.name}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}