import Link from 'next/link'

const MostPopular = ({ page }) => {
    return (
        <div className="mb-4">
            <h3 className="m-0 text-sm uppercase">Most Popular</h3>
            <ul className="list-none p-0">
                <li className="flex items-start p-0">
                    <Link href="/"><a className="text-sm transition-colors duration-200 no-underline hover:text-indigo-700 focus:text-indigo-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit</a></Link>
                </li>
                <li className="flex items-start p-0">
                    <Link href="/"><a className="text-sm transition-colors duration-200 no-underline hover:text-indigo-700 focus:text-indigo-700">Ut urna dolor, dignissim a dapibus a, congue id lorem</a></Link>
                </li>
                <li className="flex items-start p-0">
                    <Link href="/"><a className="text-sm transition-colors duration-200 no-underline hover:text-indigo-700 focus:text-indigo-700">Vestibulum interdum metus ut</a></Link>
                </li>
            </ul>
        </div>
    )
}

export default MostPopular