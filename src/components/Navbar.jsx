import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/logo.png';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activePreview, setActivePreview] = useState(null);

    const menuItems = [
        { label: 'Home', id: 'home' },
        { label: 'Pages', id: 'pages' },
        { label: 'Portfolio', id: 'portfolio' },
        { label: 'Blog', id: 'blog' },
    ];

    const handleSmoothScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    const togglePreview = (id) => {
        setActivePreview(activePreview === id ? null : id);
    };

    return (
        <nav className="w-full font-inter sticky top-0 z-50 bg-white border-b border-gray-200 border-t-4 border-t-sky-500">
            <div className="w-full flex items-center justify-between h-20 px-6 sm:px-8 lg:px-12">
                {/* Logo */}
                <Link
                    to="/"
                    className="text-xl font-bold text-gray-900 hover:opacity-80 transition-opacity flex items-center gap-2 flex-shrink-0"
                >
                    <img src={logo} alt="Floka Logo" className="h-8" />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-60 absolute left-1/2 transform -translate-x-1/2">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleSmoothScroll(item.id)}
                            className="text-gray-700 text-lg hover:text-gray-900 font-medium transition-colors"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* Desktop Right Side */}
                <div className="hidden md:flex items-center gap-40 flex-shrink-0">
                    <a
                        href="mailto:info@floka.com"
                        className="text-gray-700 text-lg hover:text-gray-900 font-medium transition-colors whitespace-nowrap"
                    >
                        info@floka.com
                    </a>
                    <button className="group w-10 h-10 flex items-center justify-center">
                        <div className="relative w-6 h-6">

                            {/* Top */}
                            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gray-900 rounded-full transition-all duration-300 group-hover:-translate-y-0.5" />

                            {/* Middle Left */}
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-gray-900 rounded-full transition-all duration-300 group-hover:-translate-x-0.5" />

                            {/* Center */}
                            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-gray-900 rounded-full" />

                            {/* Middle Right */}
                            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-gray-900 rounded-full transition-all duration-300 group-hover:translate-x-0.5" />

                            {/* Bottom */}
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gray-900 rounded-full transition-all duration-300 group-hover:translate-y-0.5" />

                        </div>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden flex flex-col gap-1.5 justify-center items-center w-8 h-8 flex-shrink-0"
                >
                    <span className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 right-0 h-screen w-screen bg-white transform transition-transform duration-300 ease-in-out md:hidden z-40 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* Header with Logo and Close Button */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <Link
                        to="/"
                        className="text-xl font-bold text-gray-900 hover:opacity-80 transition-opacity flex items-center gap-2 flex-shrink-0"
                    >
                        <img src={logo} alt="Floka Logo" className="h-8" />
                    </Link>
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="text-gray-900 hover:text-gray-700 transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Menu Content */}
                <div className="flex flex-col p-6 gap-6 overflow-y-auto h-[calc(100vh-120px)]">
                    {/* Search Bar */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search keywords..."
                            className="w-full px-4 py-2.5 bg-gray-100 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                        />
                        <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>

                    {/* Menu Items */}
                    <div className="flex flex-col gap-4">
                        {menuItems.map((item) => (
                            <div key={item.id} className="border-b border-gray-100 pb-4">
                                <div className="flex items-center justify-between mb-2">
                                    <button
                                        onClick={() => handleSmoothScroll(item.id)}
                                        className="text-gray-700 hover:text-gray-900 font-medium transition-colors text-left flex-1"
                                    >
                                        {item.label}
                                    </button>
                                    <button
                                        onClick={() => togglePreview(item.id)}
                                        className="text-gray-500 hover:text-gray-700 transition-colors ml-2 flex-shrink-0"
                                    >
                                        <span className={`text-sm transform transition-transform duration-300 ${activePreview === item.id ? 'rotate-180' : ''}`}>▼</span>
                                    </button>
                                </div>

                                {/* Mobile Preview */}
                                {activePreview === item.id && (
                                    <div className="mt-3 animate-slideDown">
                                        <div className="w-full h-20 bg-gradient-to-br from-sky-100 to-pink-100 rounded flex items-center justify-center text-xs font-medium text-gray-600">
                                            {item.label}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="pt-6 border-t border-gray-200">
                        <a
                            href="mailto:info@floka.com"
                            className="text-gray-700 hover:text-gray-900 font-medium transition-colors block"
                        >
                            info@floka.com
                        </a>
                    </div>
                </div>
            </div>

            {/* Mobile Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-30"
                    onClick={() => setIsMenuOpen(false)}
                ></div>
            )}
        </nav>
    );
}
