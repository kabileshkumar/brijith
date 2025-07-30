import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { useSearch } from '@/context/SearchContext';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { searchQuery, setSearchQuery } = useSearch();
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      location === '/' && !isScrolled
        ? 'bg-transparent'
        : 'bg-white/90 dark:bg-[#0a0915]/90 backdrop-blur-lg shadow-lg'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-gray-900 via-purple-400 to-gray-900 dark:from-white dark:via-purple-200 dark:to-white bg-clip-text text-transparent">
            ./brijith-sec
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-gray-900 dark:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors ${location === '/' ? 'text-purple-600 dark:text-purple-400' : ''}`}>
              Home
            </Link>
            <Link href="/about" className={`text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors ${location === '/about' ? 'text-purple-600 dark:text-purple-400' : ''}`}>
              About
            </Link>
            <Link href="/blogs" className={`text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors ${location === '/blogs' ? 'text-purple-600 dark:text-purple-400' : ''}`}>
              Blogs
            </Link>
            <Link href="/contact" className={`text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors ${location === '/contact' ? 'text-purple-600 dark:text-purple-400' : ''}`}>
              Contact
            </Link>
            
            {/* Search */}
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-gray-100 dark:bg-[#151320] rounded-lg border border-gray-300 dark:border-purple-900/30 px-4 py-2 w-40 focus:w-64 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-gray-900 dark:text-white"
              />
              <i className="fas fa-search absolute right-3 top-3 text-gray-500 dark:text-gray-400"></i>
            </div>
            
            {/* Theme Toggle */}
            <ThemeToggle />
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-gray-100 dark:bg-[#151320] border-b border-gray-300 dark:border-purple-900/30 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <Link href="/" className={`text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors py-2 ${location === '/' ? 'text-purple-600 dark:text-purple-400' : ''}`}>
            Home
          </Link>
          <Link href="/about" className={`text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors py-2 ${location === '/about' ? 'text-purple-600 dark:text-purple-400' : ''}`}>
            About
          </Link>
          <Link href="/blogs" className={`text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors py-2 ${location === '/blogs' ? 'text-purple-600 dark:text-purple-400' : ''}`}>
            Blogs
          </Link>
          <Link href="/contact" className={`text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors py-2 ${location === '/contact' ? 'text-purple-600 dark:text-purple-400' : ''}`}>
            Contact
          </Link>
          
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-gray-200 dark:bg-[#0d0c14] rounded-lg border border-gray-300 dark:border-purple-900/30 px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-gray-900 dark:text-white"
            />
            <i className="fas fa-search absolute right-3 top-3 text-gray-500 dark:text-gray-400"></i>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-700 dark:text-gray-400">Toggle Theme</span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
