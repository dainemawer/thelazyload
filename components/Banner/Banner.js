import Link from 'next/link'

const Banner = () => {
    return (
        <div className="flex bg-indigo-600 justify-center py-6 px-4 text-center">
            <p className="text-white leading-none">Welcome to thelazyload. I&apos;am looking for contributors. <Link href="/submit"><a className="border-b-2 border-transparent transition duration-200 hover:border-white focus:border-white">Get in touch with me.</a></Link></p>
        </div>
    )
}

export default Banner