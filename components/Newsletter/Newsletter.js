const Newsletter = () => {

    const handleSubmit = () => {
        window.open('https://tinyletter.com/dainemawer', 'popupwindow', 'scrollbars=yes,width=800,height=600');
        return true
    }

    return (
        <div className="flex flex-col container justify-between max-w-4xl mx-auto">
            <h3 className="m-0 text-sm uppercase">Newsletter</h3>
            <form
                action="https://tinyletter.com/dainemawer"
                method="post"
                target="popupwindow"
                className="relative"
                onSubmit={handleSubmit}>
                <p>
                    <label className="block w-full" htmlFor="tlemail">
                        <span className="sr-only">Enter your email address</span>
                        <input className="text-sm border-gray-200 min-h-[48px] w-full rounded-full px-4 pr-24 hover:border-indigo-700 focus:border-indigo-700 transition-all duration-200" placeholder="Email Address" type="text" name="email" id="tlemail" />
                    </label>
                </p>
                <input type="hidden" value="1" name="embed" /><input type="submit" className="text-sm bg-indigo-100 hover:bg-indigo-700 focus:bg-indigo-700 hover:text-white focus:text-white transition duration-200 rounded-full py-2 px-4 absolute right-[1.5%] md:right-[2.5%] cursor-pointer top-[30%]" value="Subscribe" />
            </form>
        </div>
    )
}

export default Newsletter