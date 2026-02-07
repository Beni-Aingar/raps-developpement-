import React from 'react';
import { Play, Calendar, MapPin, ArrowRight } from 'lucide-react';

const Galerie = () => {
  const videos = [
    {
      id: "dQw4w9WgXcQ", // Remplacez par vos IDs YouTube réels
      titre: "Impact de l'eau au Sahel",
      date: "Octobre 2025",
      lieu: "Zone Lac",
      description: "Documentaire sur la réhabilitation des forages solaires."
    },
    {
      id: "y6120QOlsfU", 
      titre: "Éducation pour tous",
      date: "Décembre 2025",
      lieu: "N'Djamena",
      description: "Inauguration du nouveau centre de formation technique."
    },
    {
      id: "9xwazD5AHwk",
      titre: "Rapport Annuel 2025",
      date: "Janvier 2026",
      lieu: "Siège RAPS",
      description: "Rétrospective de nos actions majeures sur le terrain."
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* EN-TÊTE DE LA GALERIE */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <span className="text-green-600 font-black tracking-widest uppercase text-xs">Preuves d'Impact</span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mt-4 leading-none">
            La réalité du <br /> <span className="font-serif italic text-green-600 underline">terrain en images.</span>
          </h1>
        </div>

        {/* GRILLE VIDÉO ASYMÉTRIQUE */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {videos.map((video, index) => (
            <div key={video.id} className={`group ${index % 2 !== 0 ? 'md:mt-24' : ''}`}>
              <div className="relative overflow-hidden rounded-[40px] shadow-2xl bg-slate-100 aspect-video mb-8">
                {/* Embed YouTube */}
                <iframe
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.titre}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                
                {/* Overlay au survol */}
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center justify-center">
                  <div className="bg-white p-6 rounded-full shadow-2xl transform scale-50 group-hover:scale-100 transition-transform duration-500">
                    <Play className="text-green-600 fill-green-600" size={32} />
                  </div>
                </div>
              </div>

              <div className="space-y-4 px-4">
                <div className="flex items-center gap-4 text-slate-400 text-xs font-bold uppercase tracking-widest">
                  <span className="flex items-center gap-1"><Calendar size={14}/> {video.date}</span>
                  <span className="flex items-center gap-1"><MapPin size={14}/> {video.lieu}</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 group-hover:text-green-600 transition-colors">
                  {video.titre}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                  {video.description}
                </p>
                <button className="flex items-center gap-2 text-slate-900 font-black text-xs uppercase tracking-tighter pt-2 border-b-2 border-slate-100 hover:border-green-600 transition-all">
                  Partager le témoignage <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Galerie;
