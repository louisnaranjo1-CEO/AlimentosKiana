import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenBenefits: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenBenefits }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBenefitsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    onOpenBenefits();
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        
        {/* Logo Text */}
        <a href="#" className="flex items-center gap-2 group">
            <div className={`font-heading font-extrabold text-3xl tracking-tight transition-colors ${isScrolled ? 'text-kiana-green' : 'text-white'}`}>
                Kiana
                <span className={`block text-[10px] font-sans font-normal -mt-1 ${isScrolled ? 'text-gray-500' : 'text-white/80'}`}>
                    ALIMENTOS CON CARIÑO
                </span>
            </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
            <a 
                href="#catalogo"
                className={`text-sm font-semibold uppercase tracking-wider hover:text-kiana-yellow transition-colors ${isScrolled ? 'text-gray-600' : 'text-white'}`}
            >
                Productos
            </a>
            <button 
                onClick={handleBenefitsClick}
                className={`text-sm font-semibold uppercase tracking-wider hover:text-kiana-yellow transition-colors bg-transparent border-none cursor-pointer ${isScrolled ? 'text-gray-600' : 'text-white'}`}
            >
                Beneficios
            </button>
            <a 
                href="#clientes"
                className={`text-sm font-semibold uppercase tracking-wider hover:text-kiana-yellow transition-colors ${isScrolled ? 'text-gray-600' : 'text-white'}`}
            >
                Clientes
            </a>

            <a 
                href="#contacto"
                className={`px-5 py-2 rounded-full font-bold text-sm transition-all transform hover:scale-105 ${
                    isScrolled 
                    ? 'bg-kiana-green text-white shadow-lg shadow-green-200' 
                    : 'bg-white text-kiana-green shadow-lg'
                }`}
            >
                Ser Distribuidor
            </a>
        </div>

        {/* Mobile Toggle */}
        <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
            {isMobileMenuOpen ? (
                <X className={isScrolled ? 'text-kiana-dark' : 'text-white'} />
            ) : (
                <Menu className={isScrolled ? 'text-kiana-dark' : 'text-white'} />
            )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 flex flex-col items-center gap-4">
            <a 
                href="#catalogo"
                className="text-gray-700 font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
            >
                Productos
            </a>
            <button 
                onClick={handleBenefitsClick}
                className="text-gray-700 font-semibold bg-transparent border-none"
            >
                Beneficios
            </button>
            <a 
                href="#clientes"
                className="text-gray-700 font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
            >
                Clientes
            </a>
             <a 
                href="#contacto"
                className="bg-kiana-green text-white px-6 py-2 rounded-full font-bold"
                onClick={() => setIsMobileMenuOpen(false)}
            >
                Ser Distribuidor
            </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;