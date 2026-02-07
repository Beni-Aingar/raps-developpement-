import React from 'react';
import { ArrowUpRight, Droplets, TreeDeciduous, GraduationCap, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projets = () => {
  const projetsAction = [
    {
      id: 1,
      titre: "appuis aux infrastructures eaux et solaires",
      categorie: "Infrastructure",
      // Utilisation des images existantes dans le dossier hero
      galerie: ["/images/hero/slide11.jpg", "/images/hero/slide12.jpg", "/images/hero/slide13.jpg"],
      description: "Déploiement de pompes solaires hybrides  pour garantir un accès continu à l'eau potable pour l'alimentation et betails.",
      progression: 75,
      align: "left",
      color: "bg-blue-600",
      icone: <Droplets />
    },
    {
      id: 2,
      titre: " promotions des initiatives de restauration des sols et protection de l'environnement",
      categorie: "Climat",
      galerie: ["/images/hero/slide21.jpg", "/images/hero/slide22.jpg", "/images/hero/slide23.jpg"],
      description: "Plus de 50 000 plants mis en terre cette année pour freiner l'avancée du désert et créer des micro-climats, amélioration de la fertilité des sols pour la production agricole.",
      progression: 45,
      align: "right",
      color: "bg-emerald-600",
      icone: <TreeDeciduous />
    },
    {
      id: 3,
      titre: "Éducation Inclusive",
      categorie: "Social",
      galerie: ["/images/hero/slide31.jpg", "/images/hero/slide32.jpg", "/images/hero/slide33.jpg"],
      description: "Construction de centres de formation technique pour les jeunes déplacés, alliant alphabétisation et métiers du futur.",
      progression: 90,
      align: "left",
      color: "bg-amber-600",
      icone: <GraduationCap />
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* --- HEADER --- */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto border-l-8 border-slate-900 pl-8">
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 uppercase tracking-tighter leading-none">
            Nos <br /> <span className="text-green-600 italic font-serif">Engagements.</span>
          </h1>
          <p className="mt-8 text-xl text-slate-500 max-w-xl font-medium">
            Découvrez comment RAPS-Développement transforme les intentions en résultats mesurables sur le terrain.
          </p>
        </div>
      </section>

      {/* --- LISTE DES PROJETS AVEC TRIPLETS D'IMAGES --- */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto space-y-40">
          {projetsAction.map((projet) => (
            <div 
              key={projet.id} 
              className={`flex flex-col ${projet.align === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}
            >
              {/* GRILLE DE 3 IMAGES */}
              <div className="relative w-full lg:w-3/5 group">
                <div className="grid grid-cols-2 gap-4 h-[450px]">
                  {/* Image 1 : Grande (Énergie/Eau/Base) */}
                  <div className="col-span-2 h-[280px] overflow-hidden rounded-[40px] shadow-2xl relative">
                    <img 
                      src={projet.galerie[0]} 
                      alt={projet.titre} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-900">
                      {projet.categorie}
                    </div>
                  </div>
                  {/* Image 2 : Forêt / Détail technique */}
                  <div className="h-[150px] overflow-hidden rounded-[30px] shadow-xl">
                    <img src={projet.galerie[1]} className="w-full h-full object-cover" alt="Focus 1" />
                  </div>
                  {/* Image 3 : Éducation / Impact social */}
                  <div className="h-[150px] overflow-hidden rounded-[30px] shadow-xl">
                    <img src={projet.galerie[2]} className="w-full h-full object-cover" alt="Focus 2" />
                  </div>
                </div>
              </div>

              {/* CONTENU TEXTUEL */}
              <div className="w-full lg:w-2/5 space-y-6">
                <div className="flex items-center gap-4">
                  <span className={`p-3 rounded-2xl ${projet.color} text-white shadow-lg`}>
                    {projet.icone}
                  </span>
                  <h2 className="text-3xl font-black text-slate-900 leading-tight">
                    {projet.titre}
                  </h2>
                </div>
                
                <p className="text-slate-600 leading-relaxed text-lg">
                  {projet.description}
                </p>

                {/* Barre de progression */}
                <div className="pt-4">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Avancement</span>
                    <span className="text-2xl font-black text-slate-900 font-mono">{projet.progression}%</span>
                  </div>
                  <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${projet.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${projet.progression}%` }}
                    ></div>
                  </div>
                </div>

                <Link to="/contact" className="inline-flex items-center gap-2 font-black text-sm uppercase tracking-wider group text-green-600">
                  En savoir plus <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION APPEL À L'ACTION --- */}
      <section className="bg-slate-900 py-24 px-6 text-center rounded-t-[60px]">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl font-black text-white">Le développement n'attend pas.</h2>
          <p className="text-slate-400 text-lg">
            Chaque projet dépend de la collaboration entre nos experts et des partenaires engagés.
          </p>
          <Link to="/don" className="bg-green-600 text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-all inline-block">
            Soutenir une action
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projets;
