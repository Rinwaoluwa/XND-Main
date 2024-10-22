export default function SubscribeToNewsletter() {
    return (
        <section className="container-padding-x container-padding-y text-center bg-[#E3E3E3]/10" aria-describedby="subscribe to newsletters" >
            <div className="mb-16">
                <h2 className="text-[1.35rem] md:text-[1.75rem] font-bold mb-4 text-main-primary">
                    Subscribe to our newsletters
                </h2>
                <p className="section-description text-g-700">
                    Get the latest news about our product and services
                </p>

                <div className="flex w-full md:w-[4/5] max-w-2xl flex-col items-center justify-center md:flex-row mx-auto text-base lg:text-lg gap-4 md:gap-0 mt-8">
                    <label className="sr-only">Email</label>
                    <input
                        className="w-full h-16 text-g-700 p-3 bg-p-100 rounded-r-md md:rounded-r-none rounded-l-md"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                    />
                    <button className="w-36 h-16 text-white p-3 bg-p-600 rounded-l-md md:rounded-l-none rounded-r-md">
                        Subscribe
                    </button>
                </div>
            </div>
        </section>
    )
}