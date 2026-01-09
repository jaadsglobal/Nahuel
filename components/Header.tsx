
import React, { useState } from 'react';

interface HeaderProps {
  isScrolled: boolean;
  onContactClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ isScrolled, onContactClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Opiniones', href: '#testimonios' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <span className={`text-2xl font-black tracking-tighter ${isScrolled ? 'text-slate-900' : 'text-white md:text-white text-slate-900'}`}>
            NAHUEL
          </span>
          <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className={`text-sm font-semibold transition-colors ${isScrolled ? 'text-slate-600 hover:text-amber-600' : 'text-white/90 hover:text-white'}`}
            >
              {item.label}
            </a>
          ))}
          <button 
            onClick={onContactClick}
            className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all transform active:scale-95 ${isScrolled ? 'bg-amber-500 text-white hover:bg-amber-600 shadow-sm' : 'bg-white text-slate-900 hover:bg-slate-100 shadow-lg'}`}
          >
            Presupuesto Gratis
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className={`w-6 h-6 ${isScrolled ? 'text-slate-900' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-slate-600 font-medium py-2 border-b border-slate-100"
              >
                {item.label}
              </a>
            ))}
            <button 
              onClick={() => {
                setIsMenuOpen(false);
                onContactClick();
              }}
              className="w-full bg-amber-500 text-white font-bold py-3 rounded-lg shadow-md"
            >
              Solicitar Presupuesto
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
