import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer'
import Banner from '@components/Banner/Banner'
import { searchClient } from '@lib/constants'
import { useState } from 'react'

import {
    InstantSearch,
} from 'react-instantsearch-dom';

const Layout = ({ children, screen }) => {
    
    return (
        <InstantSearch indexName="articles" searchClient={searchClient}>
            <Header />
            <main className={`prose${screen ? ' flex justify-center items-center' : ''} container max-w-7xl py-10 lg:py-20 px-4 mx-auto`}>
                {children}
            </main>
            <Footer />
        </InstantSearch>
    )
}
export default Layout