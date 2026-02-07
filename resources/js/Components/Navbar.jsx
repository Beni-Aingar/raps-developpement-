import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Menu, X, Heart, Settings } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Change le style de la navbar lors du défilement
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Détermine si un lien est la page actuelle
  const isActive = (path) => location.pathname === path ? "text-green-600 font-bold" : "text-gray-600 font-semibold";

  // Liste des liens de navigation (Actualisée avec l'ancre)
  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Actualités', path: '/#actualites' }, // Ancre vers la section actualités de Home.jsx
    { name: 'Nos Projets', path: '/projets' },
    { name: 'Galerie', path: '/galerie' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/90 backdrop-blur-md py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          
          {/* LOGO RAPS-Dev */}
<div className="flex items-center">
  <Link to="/" className="flex items-center gap-3 group">
    <img 
      src="/images/logo.png" 
      alt="Logo RAPS-Développement" 
      /* Ajuste h-14 pour changer la taille (ex: h-12 ou h-16) */
      className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
    />
    <div className="flex flex-col justify-center border-l-2 border-gray-100 pl-3">
      <span className="text-xl font-black text-gray-900 leading-none tracking-tighter">
        RAPS<span className="text-green-600">-Développement</span>
      </span>
      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] leading-none mt-1">
        Développement
      </span>
    </div>
  </Link>
</div>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`${isActive(link.path)} hover:text-green-600 transition-colors text-xs uppercase tracking-widest`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* BOUTON FAIRE UN DON */}
            <Link 
              to="/don" 
              className="bg-green-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-green-700 transition shadow-md flex items-center gap-2 group"
            >
              <Heart size={18} className="group-hover:fill-white transition-all" /> 
              Faire un Don
            </Link>

            {/* ACCÈS ADMIN (Filament) */}
            <a 
              href="/admin" 
              className="text-gray-300 hover:text-gray-900 transition-colors"
              title="Panel Administration"
            >
              <Settings size={20} />
            </a>
          </div>

          {/* MENU MOBILE (BOUTON) */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-700 hover:text-green-600 focus:outline-none transition"
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* MENU MOBILE DÉROULANT */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-4 pb-10 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-4 rounded-xl text-base font-bold ${location.pathname === link.path ? "bg-green-50 text-green-600" : "text-gray-700"}`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="pt-6 border-t border-gray-100 mt-4 space-y-4">
              <Link 
                to="/don"
                onClick={() => setIsOpen(false)}
                className="w-full bg-green-600 text-white py-4 rounded-xl font-bold text-center flex items-center justify-center gap-2 shadow-lg"
              >
                <Heart size={20} /> Faire un Don
              </Link>

              <a 
                href="/admin" 
                className="block w-full text-center py-2 text-xs text-gray-400 font-bold uppercase tracking-widest"
              >
                Administration
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

