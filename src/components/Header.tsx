
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BatteryMedium, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-4 bg-white/80 backdrop-blur-md shadow-subtle' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center space-x-2 transition-opacity duration-200 hover:opacity-80"
        >
          <BatteryMedium className="h-6 w-6 text-ev-blue" />
          <span className="font-semibold text-lg tracking-tight">
            Battery<span className="text-ev-blue">&</span>Range
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['Batteries', 'Range Calculator', 'Comparisons', 'Technology'].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="relative text-sm font-medium link-underline"
            >
              {item}
            </Link>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-ev-black" />
          ) : (
            <Menu className="h-6 w-6 text-ev-black" />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden pt-24`}
      >
        <nav className="flex flex-col space-y-6 px-8">
          {['Batteries', 'Range Calculator', 'Comparisons', 'Technology'].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-xl font-medium hover:text-ev-blue transform transition-all hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
