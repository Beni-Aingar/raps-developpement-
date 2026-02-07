import React, { useState, useEffect } from 'react';
import { 
  Heart, Globe, Users, ArrowRight, ShieldCheck, 
  Scale, FileText, Leaf, LayoutGrid, GraduationCap, 
  Droplets, Calendar, Quote, CheckCircle2 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import NewsCard from '../Components/NewsCard';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    "/images/hero/slide1.jpg", 
    "/images/hero/slide2.jpg", 
    "/images/hero/slide3.jpg",
    "/images/hero/slide4.jpg"
  ];

  useEffect(() => {
    if (images.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  const secteurs = [
    { icon: <Scale size={40} />, titre: "Médiation des conflits", desc: "Prévention et résolution pacifique des différends communautaires pour la cohésion sociale." },
    { icon: <FileText size={40} />, titre: "Plans de Développement Local", desc: "Élaboration et appui technique à la mise en œuvre des PDL pour les communes." },
    { icon: <Leaf size={40} />, titre: "Agro-écologie & Climat", desc: "Lutte contre le changement climatique et promotion de l'agriculture durable." },
    { icon: <LayoutGrid size={40} />, titre: "Programmes Multisectoriels", desc: "Sécurité alimentaire, agropastoralisme, santé-nutrition et infrastructures." },
    { icon: <GraduationCap size={40} />, titre: "Éducation & Alphabétisation", desc: "Développement de l'éducation de base et alphabétisation fonctionnelle des adultes." },
    { icon: <Droplets size={40} />, titre: "Eau-Hygiène-Assainissement", desc: "Maîtrise d'œuvre pour l'accès à l'eau potable et l'amélioration de l'hygiène." }
  ];

  const partenaires = [
    "L’Union Européenne", "La Coopération Suisse (DDC)", "Le FIDA", 
    "Le Gouvernement Tchadien", "La Banque Africaine de Développement (BAD)", 
    "L'European Forest Institute (EFI)", "WOOD EN DAAD"
  ];

  return (
    <div className="bg-white overflow-hidden font-sans">
      
      {/* SECTION 1 : HERO */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="animate-in slide-in-from-left duration-1000">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-12 bg-green-600"></span>
              <span className="text-green-600 font-bold uppercase tracking-[0.2em] text-xs"> 
                ONG RAPS-Développement
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] mb-8">
              L'impact <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-400 font-serif italic">par l'action.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-md leading-relaxed border-l-4 border-slate-100 pl-6">
              « Sel de la terre et lumière du monde » : nous agissons pour la transformation sociale au Tchad.
            </p>
            <Link to="/projets" className="bg-slate-900 text-white w-fit px-8 py-5 rounded-full font-bold hover:bg-green-600 transition-all shadow-2xl flex items-center gap-3 group">
              Voir nos réalisations <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="relative rounded-tr-[120px] rounded-bl-[120px] overflow-hidden shadow-2xl h-[550px] border-[12px] border-white bg-slate-100">
            {images.map((img, index) => (
              <img key={index} src={img} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"}`} alt="Action terrain" />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 : SECTEURS D'INTERVENTION */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter italic">Domaines d'expertise</h2>
            <div className="h-1.5 w-24 bg-green-600 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {secteurs.map((secteur, index) => (
              <div key={index} className="bg-white p-8 rounded-[40px] shadow-lg hover:shadow-2xl transition-all group border-b-4 border-transparent hover:border-green-600">
                <div className="text-green-600 mb-6 group-hover:scale-110 transition-transform duration-300">{secteur.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-slate-900 leading-tight">{secteur.titre}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{secteur.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 : LE MOT DU DIRECTEUR GÉNÉRAL (VERSION COMPLÈTE) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Colonne Photo et Identité */}
            <div className="w-full lg:w-1/3 sticky top-24">
              <div className="relative group">
                <div className="absolute -inset-4 bg-emerald-100 rounded-[130px] -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
                <img 
                  src="/images/dg-raps.jpg" 
                  alt="AINGAR GENIA - DG RAPS-Dev" 
                  className="relative w-full h-[500px] object-cover rounded-[120px] shadow-2xl border-8 border-white"
                />
              </div>
              <div className="mt-8 text-center lg:text-left">
                <h3 className="text-3xl font-black text-emerald-900 uppercase tracking-tighter">AINGAR GENIA</h3>
                <p className="text-emerald-600 font-bold uppercase text-xs tracking-[0.2em] mt-2">Directeur Général & Fondateur</p>
                <div className="mt-4 flex justify-center lg:justify-start gap-2">
                  <span className="bg-emerald-50 text-emerald-700 px-4 py-1 rounded-full text-xs font-bold border border-emerald-100 italic">« Sel de la terre et lumière du monde »</span>
                </div>
              </div>
            </div>

            {/* Colonne Discours */}
            <div className="w-full lg:w-2/3">
              <Quote size={60} className="text-emerald-100 mb-6" />
              <h2 className="text-4xl font-black text-slate-900 mb-8 leading-tight">
                Bienvenue sur le portail officiel de <span className="text-emerald-600">RAPS-Développement</span>.
              </h2>
              
              <div className="space-y-6 text-slate-700 leading-relaxed text-lg text-justify">
                <p>
                  Depuis notre création en 2010, le Réseau d’Action, de Partages et de Solidarité pour le Développement (RAPS-Développement) 
                  s’est donné pour mission d’être un acteur clé de la transformation sociale au Tchad. Guidés par notre devise, nous travaillons 
                  chaque jour pour promouvoir la bonne gouvernance locale et accompagner les populations dans leur propre processus de développement.
                </p>
                
                <div className="bg-slate-50 p-8 rounded-3xl border-l-8 border-emerald-500 my-8">
                  <p className="font-semibold italic text-slate-800">
                    "En quatorze années d'existence, notre engagement s'est traduit par des résultats concrets : environ 20 projets ont été mis en œuvre avec succès dans les secteurs de l'agro-écologie, la sécurité alimentaire et la gestion pacifique des conflits."
                  </p>
                </div>

                <p>
                  Aujourd'hui, nous déployons nos projets dans huit provinces : <span className="font-bold text-slate-900">Mandoul, Moyen-Chari, Logone Occidental, Logone Oriental, Tandjilé, Chari-Baguirmi, Hadjer Lamis et Batha</span>. 
                  Au cœur de notre action, nous plaçons l'égalité de genre et une politique de « Tolérance Zéro » contre toute forme d’exploitation ou d’abus sexuel, 
                  garantissant un environnement sûr pour les 211 organisations de base qui composent notre réseau.
                </p>

                <div className="pt-8">
                  <h4 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight">Nos Partenaires Stratégiques</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {partenaires.map((partenaire, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-white border border-slate-100 p-4 rounded-xl shadow-sm">
                        <CheckCircle2 className="text-emerald-500 shrink-0" size={20} />
                        <span className="text-sm font-semibold text-slate-600">{partenaire}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="pt-8 border-t border-slate-100">
                  Ce site web est un espace de transparence. Ensemble, continuons d'agir et de partager pour le développement de notre pays.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 : ACTUALITÉS */}
      <section id="actualites" className="container mx-auto px-6 py-24 scroll-mt-24">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-5xl font-black text-slate-900 uppercase">Nos Actualités</h2>
          <Link to="/projets" className="text-emerald-600 font-bold flex items-center gap-2 group">
            Tous les combats <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-3 text-center py-10 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 text-gray-400 italic font-medium">
             Connectez-vous à l'administration pour publier vos premiers articles.
          </div>
        </div>
      </section>

      {/* SECTION 5 : STATISTIQUES */}
      <section className="py-20 bg-slate-900 text-white rounded-t-[100px] relative z-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
          {[
            { label: "Vies impactées", value: "25k+", icon: <Heart className="text-green-400" /> },
            { label: "Provinces couvertes", value: "08", icon: <Globe className="text-green-400" /> },
            { label: "Organisations réseau", value: "211", icon: <Users className="text-green-400" /> },
            { label: "Projets réalisés", value: "20", icon: <ShieldCheck className="text-green-400" /> },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center md:items-start">
              <div className="mb-4">{item.icon}</div>
              <span className="text-5xl font-black mb-1 tabular-nums">{item.value}</span>
              <span className="text-slate-400 uppercase tracking-widest text-[10px] font-bold">{item.label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
