
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-white dark:bg-gray-900 pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <Link 
            to="/" 
            className="text-2xl font-display font-bold text-marketing-800 dark:text-white mb-6 md:mb-0"
          >
            DIGITAL<span className="text-marketing-500">MARKETER</span>
          </Link>
          
          <div className="flex flex-wrap justify-center gap-8">
            <Link to="/" className="subtle-underline text-gray-700 dark:text-gray-300 hover:text-marketing-600 dark:hover:text-marketing-400">
              Home
            </Link>
            <Link to="/services" className="subtle-underline text-gray-700 dark:text-gray-300 hover:text-marketing-600 dark:hover:text-marketing-400">
              Services
            </Link>
            <Link to="/portfolio" className="subtle-underline text-gray-700 dark:text-gray-300 hover:text-marketing-600 dark:hover:text-marketing-400">
              Portfolio
            </Link>
            <Link to="/contact" className="subtle-underline text-gray-700 dark:text-gray-300 hover:text-marketing-600 dark:hover:text-marketing-400">
              Contact
            </Link>
          </div>
          
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-marketing-100 dark:bg-marketing-800/40 text-marketing-600 dark:text-marketing-400 hover:bg-marketing-200 dark:hover:bg-marketing-700/60 transition-colors hidden md:block"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        <hr className="border-gray-200 dark:border-gray-800 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Digital Marketer. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-gray-600 dark:text-gray-400 hover:text-marketing-600 dark:hover:text-marketing-400 transition-colors"
              aria-label="TikTok"
            >
              TikTok
            </a>
            <a 
              href="#" 
              className="text-gray-600 dark:text-gray-400 hover:text-marketing-600 dark:hover:text-marketing-400 transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a 
              href="#" 
              className="text-gray-600 dark:text-gray-400 hover:text-marketing-600 dark:hover:text-marketing-400 transition-colors"
              aria-label="Twitter"
            >
              Twitter
            </a>
            <a 
              href="#" 
              className="text-gray-600 dark:text-gray-400 hover:text-marketing-600 dark:hover:text-marketing-400 transition-colors"
              aria-label="Instagram"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
