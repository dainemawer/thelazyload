import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer'

const Layout = ({ children, screen }) => {
    return (
        <>
            <Header />
            <main className={`prose ${screen && 'w-screen h-screen flex justify-center items-center'} container max-w-4xl mx-auto`}>
                {children}
            </main>
            <Footer />
        </>
    )
}
export default Layout