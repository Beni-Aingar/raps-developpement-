import './bootstrap';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Importe le gros fichier App.jsx que nous venons de générer

// On cherche la balise <div id="root"></div> dans votre welcome.blade.php
const container = document.getElementById('root');

if (container) {
    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
} else {
    // Petit message de sécurité si jamais la balise root disparait par erreur
    console.error("Erreur : La balise <div id='root'></div> est introuvable dans le fichier Blade.");
}
