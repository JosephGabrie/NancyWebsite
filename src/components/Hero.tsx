import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <div id="hero" className="relative pt-20 p-4 bg-brand-dark min-h-screen flex items-center overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="animate-fade-in">
                        <img
                            src="/HeroBanner.jpeg"
                            alt="Sign Installation"
                            className="w-full max-w-2xl mb-8 rounded-xl shadow-2xl border-4 border-white/10 mx-auto"
                        />
                        <span className="inline-block py-1 px-3 rounded-full bg-brand-blue/20 text-blue-300 font-semibold text-sm mb-6 border border-brand-blue/30">
                            Premier Sign Company in Texas
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                            Signs That <span className="text-brand-red">Speak</span> For Your Business
                        </h1>
                        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                            We specialize in custom indoor & outdoor signage, graphics, and printing solutions designed to help your business stand out.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-brand-blue hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Get a Quote
                                <ArrowRight className="ml-2" size={20} />
                            </a>
                            <a href="#services" className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-200 text-lg font-medium rounded-lg text-gray-100 hover:border-brand-blue hover:text-brand-blue hover:bg-white transition-all duration-300">
                                Our Services
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
