import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Facebook, Instagram, Linkedin, Send, MapPin, Phone } from 'lucide-react';

const Footer = () => (
  <footer className="bg-gray-900 text-white pt-16 pb-8 mt-auto">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
      
      {/* LOGO & MISSION */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          {/* Votre logo personnalisé */}
          <img 
            src="/images/logo.png" 
            alt="Logo RAPS-Développement" 
            className="h-16 w-auto object-contain brightness-0 invert" 
          />
          <div className="flex flex-col border-l border-gray-700 pl-3">
            <span className="text-xl font-black text-white tracking-tighter leading-none">
              RAPS<span className="text-green-500">-Développement</span>
            </span>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mt-1">
              ONG Durable
            </span>
          </div>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed italic">
          "Agir ensemble pour un avenir durable". Notre mission est d'impulser un changement positif durable au cœur des communautés.
        </p>
        <div className="flex gap-4">
          <a href="#" className="p-2.5 bg-gray-800 rounded-lg hover:bg-green-600 transition-colors"><Facebook size={20} /></a>
          <a href="#" className="p-2.5 bg-gray-800 rounded-lg hover:bg-green-600 transition-colors"><Instagram size={20} /></a>
          <a href="#" className="p-2.5 bg-gray-800 rounded-lg hover:bg-green-600 transition-colors"><Linkedin size={20} /></a>
        </div>
      </div>

      {/* Navigation Rapide */}
      <div>
        <h4 className="text-lg font-bold mb-6 text-green-500 uppercase tracking-widest text-xs">Navigation</h4>
        <ul className="space-y-4 text-gray-400 font-medium">
          <li><Link to="/" className="hover:text-white transition-all">Accueil</Link></li>
          <li><Link to="/#actualites" className="hover:text-white transition-all">Actualités</Link></li>
          <li><Link to="/projets" className="hover:text-white transition-all">Nos Projets</Link></li>
          <li><Link to="/galerie" className="hover:text-white transition-all">Galerie Vidéo</Link></li>
          <li><Link to="/contact" className="hover:text-white transition-all">Nous Contacter</Link></li>
          <li><Link to="/don" className="text-green-500 hover:text-white font-bold transition-all flex items-center gap-2 italic">
            <Heart size={14} className="fill-green-500" /> Faire un Don
          </Link></li>
        </ul>
      </div>

      {/* Contact Direct */}
      <div>
        <h4 className="text-lg font-bold mb-6 text-green-500 uppercase tracking-widest text-xs">Contact Officiel</h4>
        <ul className="space-y-4 text-gray-400 text-sm">
          <li className="flex items-start gap-3">
            <MapPin className="text-green-500 flex-shrink-0" size={18} /> 
            Koumra, Quartier Ngomana Siège RAPS-Dev
          </li>
          <li className="flex items-center gap-3">
            <Phone className="text-green-500 flex-shrink-0" size={18} /> 
            +235 66 23 45 88 / 99 28 72 46
          </li>
          <li className="flex items-center gap-3">
            <Mail className="text-green-500 flex-shrink-0" size={18} /> 
            contact@raps-dev.org
          </li>
        </ul>
      </div>

      {/* Action de Soutien & Newsletter */}
      <div className="space-y-6">
        <h4 className="text-lg font-bold mb-6 text-green-500 uppercase tracking-widest text-xs">Nous Soutenir</h4>
        <Link 
          to="/don" 
          className="flex items-center justify-center gap-2 w-full bg-white text-gray-900 py-3 rounded-xl font-black text-xs uppercase tracking-tighter hover:bg-green-500 hover:text-white transition-all duration-300 shadow-lg group"
        >
          Soutenir nos actions <Heart size={16} className="group-hover:scale-125 transition-transform text-red-500 fill-red-500" />
        </Link>

        <div className="pt-4 border-t border-gray-800">
          <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-3">Newsletter</p>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Votre email" 
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-green-600 outline-none text-white" 
            />
            <button className="absolute right-2 top-2 bg-green-600 p-1.5 rounded-lg hover:bg-green-700 transition-colors">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Copyright & Admin Link */}
    <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
      <p>© 2026 ONG RAPS-Développement. Tous droits réservés.</p>
      <div className="flex gap-6">
        <a href="/admin" className="hover:text-green-500 transition-colors uppercase tracking-widest text-[10px]">Espace Administration</a>
        <p>Développé par le Responsable Suivi-evaluation de RAPS-Développement</p>
      </div>
    </div>
  </footer>
);

export default Footer;
