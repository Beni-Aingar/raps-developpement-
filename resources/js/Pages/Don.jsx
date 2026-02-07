import React, { useState } from 'react';
import { Heart, ShieldCheck, CreditCard, Landmark, ArrowRight, CheckCircle2 } from 'lucide-react';

const Don = () => {
  const [montant, setMontant] = useState(50);
  const [message, setMessage] = useState('');

  // AJOUT : Fonction pour gérer le clic sur le bouton
  const handlePayment = (methode) => {
    setMessage(`Initialisation du paiement de ${montant}€ par ${methode}...`);
    
    // Simulation d'une redirection vers une passerelle de paiement
    setTimeout(() => {
      alert(`Redirection vers l'interface sécurisée (${methode}) pour un montant de ${montant}€`);
      setMessage('');
    }, 1000);
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        
        {/* TEXTE DE MOTIVATION */}
        <div className="space-y-8">
          <span className="text-green-600 font-black tracking-widest uppercase text-xs">Solidarité</span>
          <h1 className="text-6xl font-black text-slate-900 leading-none">
            Votre don est le <br /> <span className="text-green-600 italic font-serif">début d'une survie.</span>
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed max-w-md">
            Chaque centime versé à RAPS-Développement est directement investi dans nos projets de terrain.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
              <CheckCircle2 className="text-green-500" />
              <p className="text-sm font-bold text-slate-700">Paiement 100% sécurisé et crypté</p>
            </div>
          </div>
        </div>

        {/* FORMULAIRE DE DON */}
        <div className="bg-white rounded-[40px] shadow-2xl p-8 md:p-12 relative overflow-hidden border border-slate-100">
          <h3 className="text-2xl font-black text-slate-900 mb-8">Choisissez le montant</h3>
          
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[20, 50, 100].map((m) => (
              <button 
                key={m}
                onClick={() => setMontant(m)}
                className={`py-4 rounded-2xl font-black transition-all ${montant === m ? 'bg-green-600 text-white shadow-lg' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
              >
                {m}€
              </button>
            ))}
          </div>

          <div className="relative mb-10">
            <input 
              type="number" 
              placeholder="Autre montant" 
              className="w-full bg-slate-50 border-none rounded-2xl py-5 px-6 outline-none focus:ring-2 focus:ring-green-600 font-bold text-lg"
              onChange={(e) => setMontant(e.target.value)}
            />
          </div>

          <div className="space-y-4">
            {/* CORRECTION : Ajout de onClick */}
            <button 
              onClick={() => handlePayment('Carte Bancaire')}
              className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-green-600 transition-all group"
            >
              Faire un don par Carte <CreditCard size={20} className="group-hover:rotate-12 transition-transform" />
            </button>
            
            <button 
              onClick={() => handlePayment('Virement')}
              className="w-full border-2 border-slate-100 text-slate-900 py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-slate-50 transition-all"
            >
              Virement Bancaire <Landmark size={20} />
            </button>
          </div>

          {message && <p className="mt-4 text-center text-green-600 font-bold animate-pulse">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Don;
