import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import axios from 'axios';

const ActualitesDetail = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Remplacez l'URL par celle de votre API Laravel quand elle sera prête
        axios.get(`http://127.0.0.1:8000/api/actualites/${id}`)
            .then(res => {
                setArticle(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Erreur lors de la récupération", err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div className="py-20 text-center font-bold">Chargement du combat...</div>;
    if (!article) return <div className="py-20 text-center font-bold text-red-500">Article introuvable.</div>;

    return (
        <div className="bg-white min-h-screen pt-28 pb-20">
            <div className="max-w-4xl mx-auto px-6">
                <Link to="/" className="flex items-center gap-2 text-green-600 font-bold mb-8 hover:gap-4 transition-all">
                    <ArrowLeft size={20} /> Retour aux actualités
                </Link>

                <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
                    {article.titre}
                </h1>

                <div className="flex gap-6 mb-10 text-slate-500 text-sm font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-2"><Calendar size={16} /> {new Date(article.date_publication).toLocaleDateString()}</span>
                    <span className="flex items-center gap-2"><Clock size={16} /> 5 min de lecture</span>
                </div>

                <div 
                    className="w-full h-[500px] bg-cover bg-center mb-12 shadow-2xl"
                    style={{ 
                        backgroundImage: `url(http://127.0.0.1:8000/storage/${article.image})`,
                        borderRadius: '0px 120px 0px 120px' 
                    }}
                ></div>

                <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                    {/* Affiche le contenu riche venant de Filament */}
                    <div dangerouslySetInnerHTML={{ __html: article.contenu }} />
                </div>
            </div>
        </div>
    );
};

export default ActualitesDetail;
