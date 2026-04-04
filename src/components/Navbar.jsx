import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <nav className="w-full sticky top-0 z-50 bg-white border-b border-gray-200 border-t-4 border-t-sky-500">
      <div className="w-full flex items-center justify-between h-20 px-6 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-xl font-bold text-gray-900 hover:opacity-80 transition-opacity flex items-center gap-2 flex-shrink-0"
        >
            <img src={logo} alt="Floka Logo" className=" h-8" />
        </Link>

        {/* Center Navigation Links */}
        <div className="flex items-center gap-60 absolute left-1/2 transform -translate-x-1/2">
          <Link 
            to="/" 
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/" 
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
          >
            Pages
          </Link>
          <Link 
            to="/" 
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
          >
            Portfolio
          </Link>
          <Link 
            to="/" 
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
          >
            Blog
          </Link>
        </div>

        {/* Right Side: Email and Settings Icon */}
        <div className="flex items-center gap-40 flex-shrink-0">
          <a 
            href="mailto:info@floka.com"
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors whitespace-nowrap"
          >
            info@floka.com
          </a>
          <button className="text-gray-700 hover:text-gray-900 transition-colors text-xl flex-shrink-0">
            ⋮
          </button>
        </div>
      </div>
    </nav>
  );
}
