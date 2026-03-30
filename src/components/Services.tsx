const Services = () => {
    const services = [
        {
            title: 'Custom Sign Designs',
            description: 'Tailored solutions that reflect your brand and business goals.',
            image: '/businessLogo.jpeg',
        },
        {
            title: 'Quality Fabrication',
            description: 'Durable materials built to last and perform in any environment.',
            image: '/businessLogo2.jpeg',
        },
        {
            title: 'Professional Installation',
            description: 'Secure, precise installation for maximum visibility and safety.',
            image: '/businessLogo3.jpeg',
        },
        {
            title: 'Reliable Service',
            description: 'From design to installation, we’re with you every step of the way.',
            image: '/shirtsandbanner.jpeg',
        },
    ];

    return (
        <div id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-brand-blue font-semibold tracking-wide uppercase text-sm">Why Choose NVDesignsTX</h2>
                    <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-brand-dark sm:text-4xl">
                        Custom Solutions for Your Business
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-brand-gray mx-auto">
                        Signs are more than just markers; they are a key part of your business communication and brand identity.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col group h-full border-t-4 ${index % 2 === 0 ? 'border-brand-blue' : 'border-brand-red'}`}
                        >
                            <div className="h-48 overflow-hidden relative">
                                <div className={`absolute inset-0 opacity-20 ${index % 2 === 0 ? 'bg-brand-blue' : 'bg-brand-red'} mix-blend-overlay z-10`} />
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className={`text-xl font-bold mb-3 ${index % 2 === 0 ? 'text-brand-blue' : 'text-brand-red'}`}>{service.title}</h3>
                                <p className="text-brand-gray leading-relaxed mb-4 flex-1">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
