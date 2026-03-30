const About = () => {
    return (
        <div id="about" className="py-24 bg-brand-dark text-white relative overflow-hidden">
            {/* Abstract shapes */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">About NVDesignsTX</h2>
                        <div className="space-y-6 text-brand-light/80 text-lg leading-relaxed">
                            <p>
                                At NVDesignsTX, we specialize in creating custom signage, graphics, and printing solutions that make a strong first impression. Based in Texas, we help businesses stand out with high-quality designs that capture attention and communicate your message clearly.
                            </p>
                            <p>
                                Whether you’re promoting a product or building a strong brand presence, our custom signs are designed to capture attention and leave a lasting impression.
                            </p>
                            <p>
                                Whether you’re promoting your brand, enhancing your storefront, or launching something new, NVDesignsTX delivers creative, professional results you can trust.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-video bg-gradient-to-br from-brand-gray to-black rounded-2xl border border-white/10 flex items-center justify-center p-8 shadow-2xl">
                            {/* Placeholder for an actual image if user had one, for now utilizing a stylized typography layout */}
                            <div className="text-center">
                                <h3 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-red mb-4">
                                    NVDesignsTX
                                </h3>
                                <p className="text-xl text-white/60">EST. Texas</p>
                            </div>
                        </div>
                        {/* Decorative outline */}
                        <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-brand-red/30 rounded-2xl -z-10"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
