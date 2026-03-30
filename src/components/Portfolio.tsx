const Portfolio = () => {
    const projects = [
        {
            title: 'Mornings Kolaches',
            category: 'Channel Letters',
            image: '/businessLogo.jpeg',
        },
        {
            title: 'Easy Tax Services',
            category: 'Cabinet Sign',
            image: '/businessLogo2.jpeg',
        },
        {
            title: 'Sign Installation',
            category: 'Service',
            image: '/businessLogo3.jpeg',
        },
        {
            title: 'Sunrise Heating & Cooling',
            category: 'Promotional Items',
            image: '/shirtsandbanner.jpeg',
        },
    ];

    return (
        <div id="portfolio" className="py-24 bg-brand-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-brand-blue font-semibold tracking-wide uppercase text-sm">Our Work</h2>
                    <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-brand-dark sm:text-4xl">
                        Recent Projects
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-brand-gray mx-auto">
                        Check out some of our recent signage and installation projects.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">
                            <div className="aspect-w-16 aspect-h-9 h-64 md:h-80 w-full overflow-hidden bg-gray-200">
                                {/* Images loaded from public folder */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <span className="text-brand-red font-medium text-sm mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.category}</span>
                                <h3 className="text-white text-2xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
