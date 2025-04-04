
import { useState } from 'react';
import { Search, Menu, ShoppingBag } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };

  return (
    <header className="py-4 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 flex items-center justify-center">
            <img 
              src="/lovable-uploads/a781b6ac-0b81-4292-a63f-046bfe73c6df.png" 
              alt="P.Palace Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-bold text-xl">P.Palace</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <nav>
            <ul className="flex gap-6">
              <li><Link to="/" className="font-medium hover:text-brand-orange transition-colors">Home</Link></li>
              <li><Link to="/menu" className="font-medium hover:text-brand-orange transition-colors">Menu</Link></li>
              <li><Link to="/about" className="font-medium hover:text-brand-orange transition-colors">About</Link></li>
              <li><Link to="/contact" className="font-medium hover:text-brand-orange transition-colors">Contact</Link></li>
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <button 
              className={`text-gray-600 hover:text-brand-orange transition-colors ${isSearchActive ? 'text-brand-orange' : ''}`}
              onClick={toggleSearch}
            >
              <Search size={20} className="transform hover:scale-110 transition-transform" />
            </button>
            <button className="text-gray-600 hover:text-brand-orange transition-colors relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-brand-orange text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">2</span>
            </button>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            className={`text-gray-600 ${isSearchActive ? 'text-brand-orange' : ''}`}
            onClick={toggleSearch}
          >
            <Search size={20} className="transform hover:scale-110 transition-transform" />
          </button>
          <button className="text-gray-600 relative">
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 bg-brand-orange text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">2</span>
          </button>
          <button 
            className="text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Search bar that appears when search is active */}
      {isSearchActive && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md py-4 animate-fade-in">
          <div className="container-custom">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for dishes..."
                className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-orange"
                autoFocus
              />
              <Search size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md py-4 animate-fade-in">
          <nav className="container-custom">
            <ul className="flex flex-col gap-3">
              <li><Link to="/" className="font-medium hover:text-brand-orange block py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link to="/menu" className="font-medium hover:text-brand-orange block py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Menu</Link></li>
              <li><Link to="/about" className="font-medium hover:text-brand-orange block py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link></li>
              <li><Link to="/contact" className="font-medium hover:text-brand-orange block py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
