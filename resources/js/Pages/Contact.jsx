import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Globe, MessageSquare, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Transmission sécurisée en cours...');
    setTimeout(() => setStatus('Votre message est entre nos mains. Merci.'), 2000);
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- TITRE ASYMÉTRIQUE --- */}
        <div className="relative mb-24">
          <span className="text-green-600 font-black tracking-[0.3em] uppercase text-xs mb-4 block">Communication Officielle</span>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-none">
            Parlons de <br /> 
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">
              votre impact.
            </span>
          </h1>
          <div className="absolute top-0 right-0 hidden lg:block opacity-5">
            <MessageSquare size={300} />
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* --- BLOC INFO (DARK STYLE) --- */}
          <div className="lg:col-span-4 bg-slate-900 rounded-[40px] p-10 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-600/20 rounded-full blur-3xl group-hover:bg-green-600/40 transition-colors"></div>
            
            <h3 className="text-2xl font-bold mb-10 border-b border-slate-800 pb-4">Liaison Directe</h3>
            
            <div className="space-y-10 relative z-10">
              <div className="flex gap-6">
                <div className="bg-slate-800 p-4 rounded-2xl text-green-500"><MapPin size={24} /></div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">Siège Social</p>
                  <p className="text-sm leading-relaxed text-slate-300">Quartier Ngomana,Province du Mandoul, Tchad</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-slate-800 p-4 rounded-2xl text-green-500"><Phone size={24} /></div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">Téléphone</p>
                  <p className="text-lg font-bold text-white">+235 66 23 45 88 / 99 28 72 46 </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-slate-800 p-4 rounded-2xl text-green-500"><Mail size={24} /></div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">Email</p>
                  <p className="text-lg font-bold text-white">secretariat@raps-dev.org</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-slate-800">
              <p className="text-sm italic text-slate-500 italic">"Chaque message est le début d'une transformation."</p>
            </div>
          </div>

          {/* --- FORMULAIRE (STYLE MINIMALISTE) --- */}
          <div className="lg:col-span-8 bg-slate-50 rounded-[60px] p-8 md:p-16 border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="relative">
                  <input type="text" required placeholder="Votre Nom" className="w-full bg-transparent border-b-2 border-slate-200 py-4 outline-none focus:border-green-600 transition-colors placeholder:text-slate-400 font-medium" />
                </div>
                <div className="relative">
                  <input type="email" required placeholder="Votre Email" className="w-full bg-transparent border-b-2 border-slate-200 py-4 outline-none focus:border-green-600 transition-colors placeholder:text-slate-400 font-medium" />
                </div>
              </div>

              <div className="relative">
                <select className="w-full bg-transparent border-b-2 border-slate-200 py-4 outline-none focus:border-green-600 transition-colors font-medium text-slate-600 appearance-none">
                  <option>Partenariat Stratégique</option>
                  <option>Soutien aux Projets</option>
                  <option>Bénévolat </option>
                  <option>Presse & Médias</option>
                </select>
                <ArrowRight size={18} className="absolute right-0 top-5 text-slate-400 rotate-90" />
              </div>

              <div className="relative">
                <textarea rows="4" required placeholder="Votre message ou proposition..." className="w-full bg-transparent border-b-2 border-slate-200 py-4 outline-none focus:border-green-600 transition-colors placeholder:text-slate-400 font-medium resize-none"></textarea>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8 pt-6">
                <button type="submit" className="w-full md:w-auto bg-slate-900 text-white px-12 py-5 rounded-full font-black flex items-center justify-center gap-3 hover:bg-green-600 transition-all duration-500 group shadow-xl shadow-slate-200">
                  Transmettre <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                {status && <span className="text-green-600 font-bold italic animate-pulse">{status}</span>}
              </div>
            </form>
          </div>

        </div>

        {/* --- SECTION MAP / DÉCORATIVE --- */}
        <div className="mt-32 rounded-[80px] h-[300px] bg-slate-100 relative overflow-hidden flex items-center justify-center border-4 border-white shadow-inner">
           <Globe size={100} className="text-slate-200 animate-spin-slow" />
           <p className="absolute text-slate-400 font-black uppercase tracking-[0.5em] text-xs">Déploiement Global</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

