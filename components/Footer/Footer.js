import Link from 'next/link'
const Footer = () => {
    return(
        <footer className="flex container justify-between items-center max-w-7xl border-t border-gray-100 mx-auto py-6 px-4 mt-8">
            <p className="text-sm">
                <a className="text-xs md:text-sm transition-colors duration-200  bg-indigo-100 rounded-full hover:text-indigo-700 focus:text-indigo-700 px-4 py-2" href="https://dainemawer.com" rel="noopener noreferrer" target="_blank">built by dainemawer</a> 
            </p>
            <div>
                <nav>
                    <ul className="flex">
                        <li>
                            <Link href="/terms">
                                <a className="text-xs md:text-sm transition-colors duration-200 text-zinc-600 hover:bg-indigo-100 rounded-full  hover:text-indigo-700 focus:text-indigo-700 px-4 py-2">Terms</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/privacy">
                                <a className="text-xs md:text-sm transition-colors duration-200 text-zinc-600 hover:bg-indigo-100 rounded-full  hover:text-indigo-700 focus:text-indigo-700 px-4 py-2">Privacy</a>
                            </Link>
                        </li>
                        <li className="mr-4">
                            <Link href="/disclaimer">
                                <a className="text-xs md:text-sm transition-colors duration-200 text-zinc-600 hover:bg-indigo-100 rounded-full  hover:text-indigo-700 focus:text-indigo-700 px-2 md:px-4 py-2">Disclaimer</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}
export default Footer