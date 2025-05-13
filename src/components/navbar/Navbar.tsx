import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const ministries = [
  { name: 'Intercessão', path: 'intercessao' },
  { name: 'Mulheres', path: 'mulheres' },
  { name: 'Jovens', path: 'jovens' },
  { name: 'Kids', path: 'kids' },
  { name: 'Lares', path: 'lares' },
  { name: 'Louvor', path: 'louvor' },
  { name: 'Retiro', path: 'retiro' },
  { name: 'EDB', path: 'edb' },
  { name: 'Social', path: 'social' },
  { name: 'Oração', path: 'oracao' },
  { name: 'Pastor', path: 'pastor' }
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-indigo-900 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-white">ADMAC</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-yellow-300 transition-colors">
              Home
            </Link>
            
            <div className="relative group">
              <button 
                onClick={toggleDropdown}
                className="flex items-center text-white hover:text-yellow-300 transition-colors"
              >
                Ministérios {isDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              
              <div 
                className={`absolute z-10 left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 ${
                  isDropdownOpen ? 'block' : 'hidden'
                } md:group-hover:block`}
              >
                {ministries.map((ministry) => (
                  <Link
                    key={ministry.path}
                    to={`/ministerios/${ministry.path}`}
                    className="block px-4 py-2 text-gray-800 hover:bg-indigo-100 hover:text-indigo-900"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {ministry.name}
                  </Link>
                ))}
              </div>
            </div>

            {isAuthenticated ? (
              <button 
                onClick={logout}
                className="text-white hover:text-yellow-300 transition-colors"
              >
                Sair
              </button>
            ) : (
              <Link 
                to="/login" 
                className="text-white hover:text-yellow-300 transition-colors"
              >
                Login
              </Link>
            )}
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4`}>
          <nav className="flex flex-col space-y-4 bg-indigo-800 p-4 rounded-lg">
            <Link 
              to="/" 
              className="text-white hover:text-yellow-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            
            <div>
              <button 
                onClick={toggleDropdown}
                className="flex items-center justify-between w-full text-white hover:text-yellow-300"
              >
                <span>Ministérios</span>
                {isDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              
              <div className={`mt-2 ml-4 space-y-2 ${isDropdownOpen ? 'block' : 'hidden'}`}>
                {ministries.map((ministry) => (
                  <Link
                    key={ministry.path}
                    to={`/ministerios/${ministry.path}`}
                    className="block text-white hover:text-yellow-300"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    {ministry.name}
                  </Link>
                ))}
              </div>
            </div>

            {isAuthenticated ? (
              <button 
                onClick={() => {
                  logout();
                  setIsMenuOpen(false);
                }}
                className="text-white hover:text-yellow-300 text-left"
              >
                Sair
              </button>
            ) : (
              <Link 
                to="/login" 
                className="text-white hover:text-yellow-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;