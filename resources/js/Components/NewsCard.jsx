import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';

const NewsCard = ({ titre, image, date, lien }) => {
  return (
    <div 
      className="relative group h-[500px] overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-slate-100"
      style={{ borderRadius: '120px 0px 120px 0px' }} // Design initial asymétrique
    >
      {/* Image de fond avec effet de zoom au survol */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent"></div>
      </div>

      {/* Contenu textuel */}
      <div className="absolute inset-0 flex flex-col justify-end p-10 text-white">
        <span className="flex items-center gap-2 text-emerald-400 text-sm font-bold mb-4">
          <Calendar size={16} /> {date}
        </span>
        
        <h3 className="text-3xl font-black leading-tight mb-8 transform transition-transform group-hover:-translate-y-2">
          {titre}
        </h3>
        
        <div className="relative overflow-hidden w-fit group">
          {/* Utilisation de Link pour éviter le rechargement de la page */}
          <Link to={lien} className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
            Découvrir le combat <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </Link>
          <div className="h-1 w-full bg-emerald-500 mt-1 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
