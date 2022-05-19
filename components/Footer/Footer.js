import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return(
        <footer className="flex container justify-between items-center max-w-7xl border-t border-gray-100 mx-auto py-6 px-4 mt-8">
            <p className="text-sm">
                <a className="text-xs md:text-sm transition-colors duration-200 px-4 py-2 flex items-center hover:text-indigo-700 focus:text-indigo-700" href="https://dainemawer.com" rel="noopener noreferrer" target="_blank">
                    <Image className="rounded-full" src="https://pbs.twimg.com/profile_images/1496012556145680385/sZxWdamh_400x400.jpg" width={25} height={25} alt="Daine Mawer" />
                    <span className="inline-block ml-2">built by dainemawer</span>
                </a> 
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