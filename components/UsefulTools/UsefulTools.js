const UsefulTools = () => {
    return (
        <div className="flex flex-col container justify-between max-w-4xl mx-auto mb-4">
            <h3 className="m-0 text-sm uppercase mb-2">Recommended Tools</h3>
            <ul className="list-none p-0">
                <li className="text-xs md:text-sm pl-0 mb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <a className="no-underline hover:text-indigo-700 focus:text-indigo-700" rel="nopener noreferrer" target="_blank" href="https://csswizardry.com/ct/">CT.CSS by Harry Roberts</a>
                </li>
                <li className="text-xs md:text-sm pl-0 mb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <a className="no-underline hover:text-indigo-700 focus:text-indigo-700" rel="nopener noreferrer" target="_blank" href="https://requestmap.webperf.tools/">Request Map Generator</a>
                </li>
                <li className="text-xs md:text-sm pl-0 mb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <a className="no-underline hover:text-indigo-700 focus:text-indigo-700" rel="nopener noreferrer" target="_blank" href="https://jakearchibald.github.io/svgomg/">SVGOMG by Jake Archibald</a>
                </li>
                <li className="text-xs md:text-sm pl-0 mb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <a className="no-underline hover:text-indigo-700 focus:text-indigo-700" rel="nopener noreferrer" target="_blank" href="https://webspeedtest.cloudinary.com/">Cloudinary Image Report</a>
                </li>
                <li className="text-xs md:text-sm pl-0 mb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <a className="no-underline hover:text-indigo-700 focus:text-indigo-700" rel="nopener noreferrer" target="_blank" href="https://quickmetrics.io/">QuickMetrics</a>
                </li>
            </ul>
        </div>
    )
}

export default UsefulTools