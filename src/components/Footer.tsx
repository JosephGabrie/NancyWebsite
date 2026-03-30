import { Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-brand-gray text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 mb-12">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-brand-light">Contact Us</h3>
                        <div className="space-y-4">
                            <a href="mailto:Sales@nvdesignstx.com" className="flex items-center text-gray-300 hover:text-brand-blue transition-colors group">
                                <div className="bg-white/10 p-3 rounded-lg group-hover:bg-brand-blue/20 transition-colors mr-4">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Email Us</p>
                                    <p className="text-lg font-medium">Sales@nvdesignstx.com</p>
                                </div>
                            </a>

                            <a href="tel:346-431-8249" className="flex items-center text-gray-300 hover:text-brand-blue transition-colors group">
                                <div className="bg-white/10 p-3 rounded-lg group-hover:bg-brand-blue/20 transition-colors mr-4">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Call Us</p>
                                    <p className="text-lg font-medium">346-431-8249</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Social & CTA */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-brand-light">Connect With Us</h3>
                            <div className="flex space-x-4">
                                <a
                                    href="https://www.instagram.com/nvdesignstx?igsh=dmpwaXpzNmFocmtx&utm_source=qr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-brand-red p-4 rounded-full hover:bg-red-700 transition-all duration-300 hover:scale-110 shadow-lg"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="w-6 h-6 text-white" />
                                </a>
                                <a
                                    href="https://www.facebook.com/share/1CQHkAsRkH/?mibextid=wwXIfr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-brand-blue p-4 rounded-full hover:bg-blue-800 transition-all duration-300 hover:scale-110 shadow-lg"
                                    aria-label="Facebook"
                                >
                                    <Facebook className="w-6 h-6 text-white" />
                                </a>
                            </div>
                        </div>

                        <div className="mt-8 md:mt-0">
                            <p className="text-gray-400 mb-2">Ready to start your project?</p>
                            <p className="text-lg font-semibold text-brand-light">We're here to help you stand out.</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} NVDesignsTX. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
