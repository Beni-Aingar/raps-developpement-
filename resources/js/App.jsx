import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Projets from './Pages/Projets';
import Galerie from './Pages/Galerie';
import Contact from './Pages/Contact';
import Don from './Pages/Don';
import ActualitesDetail from './Pages/ActualitesDetail'; // Import de la nouvelle page de détails

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white font-sans text-gray-900 antialiased">
        {/* Barre de navigation fixe en haut */}
        <Navbar />

        {/* Contenu principal qui s'adapte à la taille de l'écran */}
        <main className="flex-grow pt-16">
          <Routes>
            {/* Page d'accueil */}
            <Route path="/" element={<Home />} />

            {/* NOUVELLE ROUTE : Détails d'une actualité (Dynamique via :id) */}
            <Route path="/actualites/:id" element={<ActualitesDetail />} />

            {/* Liste des projets de l'ONG */}
            <Route path="/projets" element={<Projets />} />

            {/* Galerie photos des réalisations */}
            <Route path="/galerie" element={<Galerie />} />

            {/* Formulaire de contact */}
            <Route path="/contact" element={<Contact />} />
            
            {/* Page de Don */}
            <Route path="/don" element={<Don />} />

            {/* Gestion de l'erreur 404 - Page non trouvée */}
            <Route path="*" element={
              <div className="flex flex-col items-center justify-center py-32 px-4 text-center">
                <h2 className="text-4xl font-extrabold text-green-700">404</h2>
                <p className="text-xl text-gray-600 mt-2">Désolé, cette page n'existe pas.</p>
                <a 
                  href="/" 
                  className="mt-6 px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
                >
                  Retourner à l'accueil
                </a>
              </div>
            } />
          </Routes>
        </main>

        {/* Pied de page */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
