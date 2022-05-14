import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer'
import Banner from '@components/Banner/Banner'
import { searchClient } from '@lib/constants'
import { useState } from 'react'

import {
    InstantSearch,
} from 'react-instantsearch-dom';

const Layout = ({ children, screen }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    
    return (
        <InstantSearch indexName="articles" searchClient={searchClient}>
            <Header />
            <main className={`prose ${screen && 'w-screen h-screen flex justify-center items-center'} container max-w-7xl py-20 px-4 mx-auto`}>
                {children}
            </main>
            <Footer />
        </InstantSearch>
    )
}
export default Layout